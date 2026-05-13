import { Property } from "../types/property"

type Props = {
    properties: Property[]
}

export function PropertiesList({ properties }: Props) {
    if (properties.length === 0) {
        return (
            <div className="flex items-center justify-center py-12 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-slate-700 mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z" />
                        </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">No properties yet</p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">Add your first property to get started</p>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                properties.map((property) => (
                    <div 
                        key={property.id} 
                        className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-slate-700 overflow-hidden"
                    >
                        {/* Card Header with Status Badge */}
                        <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800">
                            <div className="flex items-start justify-between">
                                <h2 className="text-xl font-bold text-white truncate pr-2">{property.name}</h2>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                                    property.isActive 
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                }`}>
                                    {property.isActive ? '✓ Active' : 'Inactive'}
                                </span>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="px-6 py-4 space-y-4">
                            {/* City */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Location</p>
                                    <p className="text-gray-900 dark:text-white font-semibold">{property.city}</p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Price per Night</p>
                                    <p className="text-gray-900 dark:text-white font-bold text-lg">${property.pricePerNight.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        {/* Card Footer */}
                        <div className="px-6 py-3 bg-gray-50 dark:bg-slate-700/50 border-t border-gray-200 dark:border-slate-700">
                            <button className="w-full text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-2 px-3 rounded hover:bg-blue-50 dark:hover:bg-slate-700 transition">
                                View Details
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}