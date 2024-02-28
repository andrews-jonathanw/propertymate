import React from 'react'

export default function OwnerAlerts({alerts}) {
  console.log(alerts)
  return (
    <div className='w-full m-4 p-4 flex items-center justify-center'>
      {alerts.map((alert) => (
        <div key={alert.id} className='bg-gray-100 p-4 m-4 rounded-md'>
          <h3 className='text-xl font-bold'>{alert.type}</h3>
          <p>{alert.message}</p>
          <p className='text-sm text-gray-500'>{alert.date}</p>
        </div>
      ))}
    </div>
  )
}
