import React from 'react';
import Tenant from './Tenant';

export default function TenantsContainer({ tenants, errorTenants }) {
  return (
    <div className='w-full border-2 p-2 overflow-hidden bg-customLight-primary bg-opacity-15 border-customLight-secondary border-opacity-25 rounded-lg'>
      <div className="h-[600px] overflow-y-auto"> {/* Set a fixed height and enable overflow-y */}
        {errorTenants.map((errorTenant, index) => (
          <div key={`error-${index}`} className='bg-red-200 p-2'>
            <p>Error: {errorTenant.message}</p>
            <Tenant key={errorTenant.tenant.id} tenant={errorTenant.tenant} />
          </div>
        ))}
        {tenants.length === 0 && errorTenants.length === 0 && (
          <p>No tenants found</p>
        )}
        {tenants.map((tenant) => (
          <Tenant key={tenant.id} tenant={tenant} />
        ))}
      </div>
    </div>
  );
}
