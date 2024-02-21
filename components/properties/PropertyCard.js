// PropertyCard.js
import React from 'react'
import Image from "next/image"
import CardToolBar from './CardToolBar' // Adjust the import path as necessary
import PropertyAlerts from './PropertyAlerts'

export default function PropertyCard({ property, onView }) {
  return (
    <div className={`propertyCard relative w-full min-h-[280px] min-w-[280px] overflow-hidden my-4`}>
      <div className="relative z-20"> {/* Ensure the alert has a higher z-index */}
        <PropertyAlerts property={property} />
      </div>
      <Image
        src={property.imageUrl}
        className='rounded-2xl'
        alt={property.name}
        priority={true}
        fill
        sizes='(min-width: 640px) 50vw, 100vw'
        style={{
          objectFit: "cover"
        }} />

      <div className=" absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-2xl">
        <h2 className="text-slate-100 text-lg font-bold">{property.name}</h2>
        <p className="text-slate-100">{property.address}</p>
      </div>
      <CardToolBar property={property} onView={onView}/>
    </div>
  );
}


