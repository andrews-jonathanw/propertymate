import React from 'react'
import Image from 'next/image'

export default function PropertyCard({ property }) {
  return (
    <div>
      <div className="w-full relative pt-[100%]">
        <Image
          src={property.imageUrl}
          alt={property.name}
          objectFit="cover"
          layout="fill"
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
        />
      </div>
      <h2>{property.name}</h2>
      <p>{property.address}</p>
    </div>
  )
}
