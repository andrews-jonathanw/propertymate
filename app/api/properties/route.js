import {NextResponse} from 'next/server';

const properties = [
  {
    id: 1,
    type: 'House',
    name: 'Spacious Family Home',
    address: '123 Main Street, Springfield, CA',
    bedrooms: 4,
    bathrooms: 3,
    size: '2,500 sqft',
    description: 'Beautiful family home with ample space for a large family. Features a spacious living room, modern kitchen, and backyard patio.',
    occupied: true,
    tenant: {
      id: 101,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '123-456-7890'
    },
    imageUrl: '/images/property1.jpg'
  },
  {
    id: 2,
    type: 'Apartment',
    name: 'Luxury Downtown Apartment',
    address: '456 Elm Street, Springfield, CA',
    bedrooms: 2,
    bathrooms: 2,
    size: '1,200 sqft',
    description: 'Stunning apartment located in the heart of downtown. Features high-end finishes, panoramic views, and access to building amenities.',
    occupied: false,
    tenant: null,
    imageUrl: '/images/property2.jpg'
  },
  {
    id: 3,
    type: 'Condo',
    name: 'Modern Waterfront Condo',
    address: '789 Oak Street, Springfield, CA',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,800 sqft',
    description: 'Contemporary condo with breathtaking waterfront views. Enjoy luxury living with access to amenities like a pool, gym, and private dock.',
    occupied: true,
    tenant: {
      id: 102,
      name: 'Emily Johnson',
      email: 'emily@example.com',
      phone: '987-654-3210'
    },
    imageUrl: '/images/property3.jpg'
  }
];

export default properties;


export async function GET() {
  return NextResponse.json({properties});
}