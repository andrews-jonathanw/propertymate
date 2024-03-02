import React from 'react'
import TenantsContainer from '@/components/ownerTenants/tenantsContainer'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center pt-4 px-8'>
      <TenantsContainer />
    </div>
  )
}
