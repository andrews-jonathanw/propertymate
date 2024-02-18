import React, { useState } from 'react';

const PropertyForm = ({ property, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    id: property.id,
    name: property.name,
    address: property.address,
    type: property.type,
    occupied: property.occupied,
    tenant: {
      name: property.tenant?.name || '',
      email: property.tenant?.email || '',
      phone: property.tenant?.phone || ''
    },
    units: property.units ? property.units.map(unit => ({
      id: unit.id,
      unitNumber: unit.unitNumber,
      size: unit.size,
      bedrooms: unit.bedrooms,
      bathrooms: unit.bathrooms,
      occupied: unit.occupied,
      tenant: {
        name: unit.tenant?.name || '',
        email: unit.tenant?.email || '',
        phone: unit.tenant?.phone || ''
      }
    })) : []
  });
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTenantChange = (e) => {
    const { name, value } = e.target;
    const updatedUnits = [...formData.units];
    updatedUnits[selectedUnitIndex].tenant[name] = value;
    setFormData({
      ...formData,
      units: updatedUnits,
    });
  };

  const handlePropertyTenantChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      tenant: {
        ...formData.tenant,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Handle the submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-5">
      <div className="mb-4">
        {console.log('formData', formData)}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Property Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address:
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        {formData.tenant && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="flex items-center mb-2">
            <span className="text-gray-700 text-md font-bold mr-2">Occupied:</span>
            <input
              type="checkbox"
              style={{height: '1rem', width: '1rem'}}
              name="occupied"
              checked={formData.occupied}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  occupied: e.target.checked,
                });
              }}
              className="mt-1"
            />
          </div>
            <label className="block">
              <span className="text-gray-700 text-sm font-bold mb-2">Name:</span>
              <input
                type="text"
                name="name"
                value={formData.tenant.name}
                onChange={handlePropertyTenantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 text-sm font-bold mb-2">Email:</span>
              <input
                type="email"
                name="email"
                value={formData.tenant.email}
                onChange={handlePropertyTenantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 text-sm font-bold mb-2">Phone:</span>
              <input
                type="text"
                name="phone"
                value={formData.tenant.phone}
                onChange={handlePropertyTenantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        )}
      </div>

      {property.units && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Select Unit to Edit</h3>
          <div className="flex flex-wrap gap-2">
            {formData.units && formData.units.map((unit, index) => (
              <button
                key={unit.id}
                type="button"
                onClick={() => setSelectedUnitIndex(index)}
                className={`py-2 px-4 border rounded focus:outline-none ${selectedUnitIndex === index ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
              >
                Unit {unit.unitNumber}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedUnitIndex !== null && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Editing Tenant Details (Unit {formData.units[selectedUnitIndex].unitNumber})</h3>
          <div className="flex items-center mb-2">
            <span className="text-gray-700 text-md font-bold mr-2">Occupied:</span>
            <input
              type="checkbox"
              style={{height: '1rem', width: '1rem'}}
              name="occupied"
              checked={formData.units[selectedUnitIndex].occupied}
              onChange={(e) => {
                const updatedUnits = [...formData.units];
                updatedUnits[selectedUnitIndex].occupied = e.target.checked;
                setFormData({
                  ...formData,
                  units: updatedUnits,
                });
              }}
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

            <label className="block">

              <span className="text-gray-700 text-sm font-bold mb-2">Name:</span>
              <input
                type="text"
                name="name"
                value={formData.units[selectedUnitIndex].tenant.name}
                onChange={handleTenantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 text-sm font-bold mb-2">Email:</span>
              <input
                type="email"
                name="email"
                value={formData.units[selectedUnitIndex].tenant.email}
                onChange={handleTenantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
            <label className="block">
              <span className="text-gray-700 text-sm font-bold mb-2">Phone:</span>
              <input
                type="text"
                name="phone"
                value={formData.units[selectedUnitIndex].tenant.phone}
                onChange={handleTenantChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </label>
          </div>
        </div>
      )}

      {/* Editable Form for Selected Unit */}

      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;