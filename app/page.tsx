'use client'

import Image from "next/image";
import { PropertiesList } from "./component/PropertyList";
import { useEffect, useState } from "react";
import { createProperty, getProperties } from "./services/property.service";
import { Property } from "./types/property";
import { AddPropertyForm } from "./component/AddPropertyForm";

export default function Home() {

  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setloading] = useState(true);

  const fetchProperty = async () => {
    try {
      const data = await getProperties();
      console.log('Data =>>',data);
      setProperties(data);

    } catch (error) {
      setloading(false)
      window.alert('Unexpected Error occured')
    }finally {
      setloading(false)
    }
  }

  const handleCreateProperty = async (data: {
    name: string;
    city: string;
    pricePerNight: number;
    isActive: boolean;
  }) => {
    try {
      await createProperty(data);
      await fetchProperty();
    } catch (error) {
      window.alert('Unexpected Error occured')
    }
  }
  useEffect(() => {
    fetchProperty()
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Property Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and add your properties easily</p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Add New Property</h2>
          <AddPropertyForm onSubmit={handleCreateProperty} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Your Properties</h2>
          {
            loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <div className="w-6 h-6 border-3 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Loading properties...</p>
                </div>
              </div>
            ) : (
              <PropertiesList properties={properties} />
            )
          }
        </div>
      </main>
    </div>
  );
}