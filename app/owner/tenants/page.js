import React from 'react'
import TenantsContainer from '@/components/ownerTenants/tenantsContainer'
import TenantSearch from '@/components/ownerTenants/TenantSearch'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center pt-4 px-10'>
      <TenantSearch />
      <TenantsContainer />
    </div>
  )
}
