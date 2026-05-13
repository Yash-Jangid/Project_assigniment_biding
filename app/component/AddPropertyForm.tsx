'use client'

import { useEffect, useState } from "react"

type Props = {
    onSubmit: (
        data: {
            name: string;
            city: string;
            pricePerNight: number;
            isActive: boolean;
        }
    ) => Promise<void>
};

export function AddPropertyForm({ onSubmit }: Props) {

    const [form, setForm] = useState({
        name: '',
        city: '',
        pricePerNight: 0,
        isActive: true
    })

    const [state, setState] = useState(false);
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.city) {
            setError('All Field are required')
        }

        try {
            setState(true)
            await onSubmit({
                name: form.name,
                city: form.city,
                pricePerNight: form.pricePerNight,
                isActive: form.isActive,
            });

            setForm({
                name: '',
                city: '',
                pricePerNight: 0,
                isActive: true
            });

        } catch (error) {

            setError("Something went wrong");
        } finally {
            setState(false)
        }
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Property Name
                    </label>
                    <input
                        id="name"
                        title="Name"
                        placeholder="e.g., Sunset Villa"
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        value={form.name}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                </div>

                {/* City Input */}
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        City
                    </label>
                    <input
                        id="city"
                        title="City"
                        placeholder="e.g., Udaipur"
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        value={form.city}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                </div>

                {/* Price Per Night Input */}
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Price Per Night
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-2 text-gray-500 dark:text-gray-400 font-medium">$</span>
                        <input
                            id="price"
                            title="Price Per Night"
                            placeholder="0.00"
                            onChange={(e) => setForm({ ...form, pricePerNight: parseFloat(e.target.value) || 0 })}
                            value={form.pricePerNight}
                            type="number"
                            step="0.01"
                            min="0"
                            className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        />
                    </div>
                </div>

                {/* Status Checkbox */}
                <div className="flex items-center pt-2">
                    <input
                        id="status"
                        title="Status"
                        type="checkbox"
                        onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                        checked={form.isActive}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-700 cursor-pointer"
                    />
                    <label htmlFor="status" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                        Mark as Active
                    </label>
                </div>

                {/* Error Message */}
                {
                    error && (
                        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-sm text-red-800 dark:text-red-300 font-medium">{error}</p>
                        </div>
                    )
                }

                {/* Submit Button */}
                <button 
                    disabled={state}
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition duration-200 flex items-center justify-center gap-2"
                >
                    {state ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Adding property...
                        </>
                    ) : (
                        '+ Add Property'
                    )}
                </button>

            </form>

        </div>
    )
} 