import React from 'react'
import Button from '../ui/Button'

export default function TenantSearch({setSearch}) {


  return (
    <div className='w-full flex flex-row gap-2 items-center justify-center'>
        <input
          type='text'
          placeholder='Search for tenant'
          className='w-1/2 p-2 border-2 border-gray-400'
          onChange={(e) => setSearch(e.target.value)}
        />
    </div>
  )
}
