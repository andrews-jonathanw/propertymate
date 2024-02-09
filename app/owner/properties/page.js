'use client';
import { useState, useEffect } from 'react';

export default function PropertyManagementPage() {
  // State to manage properties
  const [properties, setProperties] = useState([]);

  // Fetch properties from the API endpoint
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('http://localhost:3000/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error.message);
      }
    }

    fetchProperties();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-8">Property Management</h1>
      <div className="flex flex-col">
        {properties.map(property => (
          <div key={property.id} className="border border-gray-300 p-4 rounded-md mb-4">
            <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
            <p className="text-gray-700">{property.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


