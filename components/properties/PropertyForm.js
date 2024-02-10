import React, { useState } from 'react';

const PropertyForm = ({ property, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: property.name,
    address: property.address,
    units: property.units.map(unit => ({
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
    }))
  });

  const handleChange = (e, index = null) => {
    const { name, value, type, checked } = e.target;
    // Handling unit specific changes
    if (index !== null) {
      const updatedUnits = formData.units.map((unit, idx) => {
        if (idx === index) {
          // For checkboxes, use checked value; otherwise, use value
          const newValue = type === 'checkbox' ? checked : value;
          return {
            ...unit,
            [name]: newValue
          };
        }
        return unit;
      });
      setFormData(prevFormData => ({
        ...prevFormData,
        units: updatedUnits
      }));
    } else {
      // Handling changes for non-unit specific fields
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Property Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="address">Property Address:</label>
      <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

      {formData.units.map((unit, index) => (
        <div key={unit.id}>
          <label htmlFor={`unitNumber${index}`}>Unit Number:</label>
          <input type="text" id={`unitNumber${index}`} name={`unitNumber${index}`} value={unit.unitNumber} onChange={(e) => handleChange(e, index)} />

          <label htmlFor={`size${index}`}>Size:</label>
          <input type="text" id={`size${index}`} name={`size${index}`} value={unit.size} onChange={(e) => handleChange(e, index)} />

          <label htmlFor={`bedrooms${index}`}>Bedrooms:</label>
          <input type="number" id={`bedrooms${index}`} name={`bedrooms${index}`} value={unit.bedrooms} onChange={(e) => handleChange(e, index)} />

          <label htmlFor={`bathrooms${index}`}>Bathrooms:</label>
          <input type="number" id={`bathrooms${index}`} name={`bathrooms${index}`} value={unit.bathrooms} onChange={(e) => handleChange(e, index)} />

          <label htmlFor={`occupied${index}`}>Occupied:</label>
          <input type="checkbox" id={`occupied${index}`} name={`occupied${index}`} checked={unit.occupied} onChange={(e) => handleChange(e, index)} />
          {unit.occupied && (
            <>
              <label htmlFor={`tenantName${index}`}>Tenant Name:</label>
              <input type="text" id={`tenantName${index}`} name={`tenantName${index}`} value={unit.tenant.name} onChange={(e) => handleChange(e, index)} />

              <label htmlFor={`tenantEmail${index}`}>Tenant Email:</label>
              <input type="email" id={`tenantEmail${index}`} name={`tenantEmail${index}`} value={unit.tenant.email} onChange={(e) => handleChange(e, index)} />

              <label htmlFor={`tenantPhone${index}`}>Tenant Phone:</label>
              <input type="tel" id={`tenantPhone${index}`} name={`tenantPhone${index}`} value={unit.tenant.phone} onChange={(e) => handleChange(e, index)} />
            </>
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default PropertyForm;

