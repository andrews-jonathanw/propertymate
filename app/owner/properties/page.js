'use client';
import { useState, useEffect } from 'react';
import Apartment from '../../../components/properties/ApartmentBuilding';
import Duplex from '../../../components/properties/Duplex';
import Home from '../../../components/properties/Home';
import Condo from '../../../components/properties/Condo';
import PropertySearch from '../../../components/properties/PropertySearch';
import PropertyCard from '@/components/properties/PropertyCard';

export default function PropertyManagementPage() {

  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    async function fetchProperties() {

      try {
        const response = await fetch('/api/properties', {
          headers: {
            Accept: 'application/json',
            Method: 'GET'
          }
        });
        if (response) {
          const data = await response.json();
          setProperties(data.properties);
        }
      } catch (error) {
        console.error('An error occurred while fetching properties:', error);
      } finally {
        // setLoading(false);
      }
    }

    fetchProperties();
  }, []);


  const updateProperties = (updatedProperty) => {
    setProperties(currentProperties =>
      currentProperties.map(property =>
        property.id === updatedProperty.id ? { ...property, ...updatedProperty } : property
      )
    );
  };


  // come back and implement modal popup for delete confirmation
  const deleteProperty = (propertyId) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this property?');
    if (isConfirmed) {
      // User clicked "OK"
      setProperties(currentProperties =>
        currentProperties.filter(property => property.id !== propertyId)
      );
    } else {
      // User clicked "Cancel"
      console.log('Property deletion cancelled.');
    }
  }


  const filteredProperties = properties.filter(property => {
    const name = property.name.toLowerCase();
    const address = property.address.toLowerCase();
    const type = property.type.toLowerCase();
    return name.includes(searchTerm.toLowerCase()) ||
           address.includes(searchTerm.toLowerCase()) ||
           type.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Property Management</h1>

      <PropertySearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map(property => {
          return (
            <PropertyCard key={property.id} property={property} />
          )
        })}
      </div>
    </div>
  );
}
