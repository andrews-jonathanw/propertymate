import OwnerAlerts from '@/components/ownerHome/OwnerAlerts'
import OwnerCalendar from '@/components/ownerHome/OwnerCalendar'
import React from 'react'

export default function page() {
  return (
    <div className='p-28'>
      <h1>
        Currently viewing the Owner Home Page
      </h1>
      <div className="flex flex-col items-center justify-between mx-auto my-8 gap-6">
        <OwnerAlerts />
        <OwnerCalendar />
      </div>
    </div>
  )
}
