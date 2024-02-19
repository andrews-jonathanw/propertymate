import React from 'react';

export default function PropertyViewer({ property, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
          <span className="absolute top-0 right-0 p-4 cursor-pointer text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</span>
          <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
          <div className="mb-4">
            <p className="text-gray-600">{property.address}</p>
            <p className="text-gray-600">{property.type}</p>
            <p className="text-gray-600">{property.bedrooms} bedrooms</p>
            <p className="text-gray-600">{property.bathrooms} bathrooms</p>
            <p className='text-gray-600'>Rent: ${property.rent}/month</p>
          </div>
          {property.occupied && (
            <div className='mb-4'>
              <h3 className="text-lg font-semibold mb-2">Tenant:</h3>
              <p className="text-gray-600 mb-2">{property.tenant.name}</p>
              <p className="text-gray-600 mb-2">{property.tenant.email}</p>
              <p className="text-gray-600 mb-2">{property.tenant.phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




