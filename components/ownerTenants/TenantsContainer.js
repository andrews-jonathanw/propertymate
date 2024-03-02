import React from 'react'
import Tenant from './Tenant'

export default function TenantsContainer({tenants}) {

  return (
    <div className='w-full border-4 flex flex-col gap-2'>
      {tenants.length === 0 && <p>No tenants found</p>}
      {tenants.map((tenant) => (
        <Tenant key={tenant.id} tenant={tenant} />
      ))}
    </div>
  )
}
