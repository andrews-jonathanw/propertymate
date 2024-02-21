import React, { useState } from 'react';
import Image from "next/legacy/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const PropertyViewer = ({ property, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === property.images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? property.images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative bg-white rounded-lg p-8 flex flex-col gap-2">
      <span className="absolute top-0 right-0 p-4 cursor-pointer text-gray-500 hover:text-gray-700" onClick={onClose}>
        &times;
      </span>
      {property.images && (
        <div className='flex items-center justify-center'>
          <div className='w-full'>
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={true}
              showDots={true}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              >
              {property.images.map((image, index) => (
                <div key={index} className="relative h-96">
                  <Image
                    src={image}
                    alt={property.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    sizes='(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw'
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
      <div className="mb-4">
        <p className="text-gray-600">{property.address}</p>
        <p className="text-gray-600">{property.type}</p>
        <p className="text-gray-600">{property.bedrooms} bedrooms</p>
        <p className="text-gray-600">{property.bathrooms} bathrooms</p>
        <p className="text-gray-600">Rent: ${property.rent}/month</p>
      </div>
      {property.amenities && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Amenities:</h3>
          <p className="text-gray-600">{property.amenities.join(', ')}</p>
        </div>
      )}
      {property.occupied && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Tenant:</h3>
          <p className="text-gray-600 mb-2">{property.tenant.name}</p>
          <p className="text-gray-600 mb-2">{property.tenant.email}</p>
          <p className="text-gray-600 mb-2">{property.tenant.phone}</p>
        </div>
      )}
    </div>
  );
};

export default PropertyViewer;