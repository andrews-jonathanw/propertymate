'use client';
import { useState, useEffect } from 'react';
import Apartment from '../../../components/properties/ApartmentBuilding';
import Duplex from '../../../components/properties/Duplex';
import Home from '../../../components/properties/Home';
import Condo from '../../../components/properties/Condo';
import PropertySearch from '../../../components/properties/PropertySearch';

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
          switch(property.type) {
            case 'Apartment Building':
              return <Apartment key={property.id} property={property} onUpdate={updateProperties}/>;
            case 'Duplex':
              return <Duplex key={property.id} property={property} />;
            case 'Home':
              return <Home key={property.id} property={property} />;
            case 'Condo':
              return <Condo key={property.id} property={property} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
