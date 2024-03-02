import React from 'react'

export default function Tenant({tenant}) {
  return (
    <div>
      <div className='flex flex-row justify-between border-2 p-2 bg-customLight-accent'>
        <div>
          <p>{tenant.name}</p>
          <p>{tenant.unit}</p>
          <p>{tenant.location}</p>
        </div>
        <div>
          <p>Lease Start: {tenant.leaseStart}</p>
          <p>Lease End: {tenant.leaseEnd}</p>
          <p>Rent: ${tenant.rent}</p>
          <p>Status: {tenant.status}</p>
        </div>
      </div>
    </div>
  )
}
