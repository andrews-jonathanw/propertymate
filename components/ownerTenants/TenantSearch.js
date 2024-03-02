import React from 'react'

export default function TenantSearch({setSearch}) {


  return (
    <div className='w-full flex flex-row gap-2'>
        <input
          type='text'
          placeholder='Search for tenant'
          className='w-1/2 p-2 border-2 border-gray-400'
          onChange={(e) => setSearch(e.target.value)}
        />

      <button className='bg-blue-500 text-white p-2'>Search</button>
    </div>
  )
}
