import React, { useState } from 'react';

const Duplex = ({ property }) => {
  const [unitVisibility, setUnitVisibility] = useState({});

  // Function to toggle unit visibility
  const toggleUnitVisibility = (unitId) => {
    setUnitVisibility((prevState) => ({
      ...prevState,
      [unitId]: !prevState[unitId], // Toggle the visibility state
    }));
  };

  return (
    <div key={property.id} className="border border-gray-300 p-4 rounded-md mb-4">
      <h2 className="text-2xl font-semibold mb-4">{property.name}</h2>
      <p className="text-gray-700 mb-2">{property.address}</p>
      {/* {property.units.map((unit) => (
        <div key={unit.id} className="border border-gray-300 p-4 rounded-md mb-2">
          <button
            onClick={() => toggleUnitVisibility(unit.id)}
            className="font-semibold mb-2 focus:outline-none"
          >
            {unit.unitNumber} - {unitVisibility[unit.id] ? 'Hide' : 'Show'}
          </button>
          {unitVisibility[unit.id] && (
            <div className="mt-2">
              <p className="text-gray-700">{unit.size}</p>
              <p className="text-gray-700">{unit.bedrooms} bedrooms, {unit.bathrooms} bathrooms</p>
              {unit.occupied && (
                <div className="mt-2">
                  <h4 className="text-lg font-semibold">Tenant</h4>
                  <p className="text-gray-700">{unit.tenant.name}</p>
                  <p className="text-gray-700">{unit.tenant.email}</p>
                  <p className="text-gray-700">{unit.tenant.phone}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};

export default Duplex;

