import React from 'react';
import Image from 'next/image';
import CardToolBar from './CardToolBar';
import PropertyAlerts from './PropertyAlerts';

export default function PropertyCard({ property, onView, setScrollPosition }) {
  return (
    <div className={`propertyCard relative w-full overflow-hidden my-4`}>
      <div className="relative z-20">
        <PropertyAlerts property={property} />
      </div>
      <div style={{ position: 'relative', height: '280px' }}>
        <Image
          src={property.imageUrl}
          className='rounded-2xl'
          alt={property.name}
          fill
          sizes='(min-width: 640px) 50vw, 100vw'
          style={{
            objectFit: 'cover'
          }}
          fetchpriority="high"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full rounded-b-2xl">
        <h2 className="text-slate-100 text-lg font-bold">{property.name}</h2>
        <p className="text-slate-100">{property.address}</p>
      </div>
      <CardToolBar property={property} onView={onView} setScrollPosition={setScrollPosition} />
    </div>
  );
}
