import React, { useState } from 'react';
import Image from "next/image";
import PropertyForm from './PropertyForm'; // Assuming this can be reused or adapted

const Condo = ({ property, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdateProperty = (updatedProperty) => {
    onUpdate(updatedProperty);
    setIsEditing(false);
  };

  return (
    <div key={property.id} className="flex flex-col justify-between border border-gray-300 p-4 rounded-md mb-4">
      <div className="w-full relative pt-[56.25%]"> {/* Adjust the padding-top to match your image aspect ratio */}
        <Image
          src={property.imageUrl}
          alt={property.name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
      <p className="text-gray-700">{property.address}</p>
      {/* {property.occupied && (
        <div>
          <h3 className="text-lg font-semibold mt-4">Tenant</h3>
          <p className="text-gray-700">{property.tenant.name}</p>
          <p className="text-gray-700">{property.tenant.email}</p>
          <p className="text-gray-700">{property.tenant.phone}</p>
        </div>
      )}
      {isEditing && (
        <PropertyForm property={property} onSubmit={handleUpdateProperty} onCancel={() => setIsEditing(false)} />
      )}
      {!isEditing && (
        <div className='flex justify-end space-x-2 mt-4'>
          <button onClick={handleEdit} className="">
            ✏️
          </button>
          <button onClick={() => onDelete(property.id)} className="">
            🗑️
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Condo;
