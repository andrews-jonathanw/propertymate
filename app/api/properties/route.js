import {NextResponse} from 'next/server';

const properties = [
  {
    id: 1,
    type: 'Apartment Building',
    name: 'City Heights Apartments',
    address: '789 Park Avenue, Springfield, CA',
    imageUrl: '/assets/apartments.jpg',
    units: [
      {
        id: 1,
        unitNumber: 'Apt 101',
        bedrooms: 1,
        bathrooms: 1,
        size: '600 sqft',
        rent: 1200,
        occupied: true,
        tenant: {
          id: 101,
          name: 'John Smith',
          email: 'john@example.com',
          phone: '123-456-7890'
        },
        imageUrl: '/assets/apt101.jpg'
      },
      {
        id: 2,
        unitNumber: 'Apt 102',
        bedrooms: 2,
        bathrooms: 1,
        size: '800 sqft',
        rent: 1500,
        occupied: false,
        tenant: null,
        imageUrl: '/assets/apt102.jpg'
      },
      {
        id: 3,
        unitNumber: 'Apt 103',
        bedrooms: 2,
        bathrooms: 1,
        size: '800 sqft',
        rent: 1500,
        occupied: true,
        tenant: {
          id: 102,
          name: 'Emily Johnson',
          email: 'emilyJohnson@example.com',
          phone: '987-654-3210'
        },
        imageUrl: '/assets/apt103.jpg'
      }
    ]
  },
  {
    id: 2,
    type: 'Duplex',
    name: 'Sunnyvale Duplex',
    address: '456 Maple Street, Springfield, CA',
    imageUrl: '/assets/duplex1.jpg',
    units: [
      {
        id: 1,
        unitNumber: 'Unit A',
        bedrooms: 2,
        bathrooms: 1,
        size: '1,000 sqft',
        rent: 1800,
        occupied: true,
        tenant: {
          id: 102,
          name: 'Emily Johnson',
          email: 'emily@example.com',
          phone: '987-654-3210'
        },
        imageUrl: '/assets/unitA.jpg'
      },
      {
        id: 2,
        unitNumber: 'Unit B',
        bedrooms: 2,
        bathrooms: 1,
        size: '1,000 sqft',
        rent: 1800,
        occupied: false,
        tenant: null,
        imageUrl: '/assets/unitB.jpg'
      }
    ]
  },
  {
    id: 3,
    type: 'Home',
    name: 'Cozy Cottage',
    address: '123 Oak Lane, Springfield, CA',
    bedrooms: 3,
    bathrooms: 2,
    size: '1,200 sqft',
    rent: 2000,
    description: 'Charming cottage with a spacious backyard, perfect for a small family.',
    occupied: false,
    tenant: null,
    imageUrl: '/assets/home1.jpg'
  },
  {
    id: 4,
    type: 'Home',
    name: 'Grand Victorian Mansion',
    address: '789 Elm Street, Springfield, CA',
    bedrooms: 6,
    bathrooms: 4,
    size: '5,000 sqft',
    rent: 5000,
    description: 'Stunning Victorian mansion with historical charm and modern amenities.',
    amenities: [
      'Spacious backyard with garden area',
      'Large outdoor patio for entertaining',
      'Formal dining room with seating for ten',
      'Private home office or study room',
      'Finished basement with recreational area',
      'Cozy fireplace in the living room',
      'Central air conditioning and heating system',
      'Attached three-car garage with ample storage space',
      'Luxurious master suite with ensuite bathroom',
      'Modern kitchen with high-end appliances',
      'Large windows offering plenty of natural light',
      'Energy-efficient solar panels for reduced energy costs'
    ],
    occupied: true,
    tenant: {
      id: 103,
      name: 'Michael Davis',
      email: 'michael@example.com',
      phone: '555-123-4567'
    },
    imageUrl: '/assets/home2.jpg',
    images: [
      '/assets/homePictures/masterBedroom.jpg',
      '/assets/homePictures/kitchen.jpg',
      '/assets/homePictures/livingRoom.jpg',
      '/assets/homePictures/bathroom1.jpg',
      '/assets/homePictures/bedroom2.jpg',
      '/assets/homePictures/outsideBathhouse.jpg'
    ]
  },
  {
    id: 5,
    type: 'Condo',
    name: 'Luxury Waterfront Condo',
    address: '321 Bayview Drive, Springfield, CA',
    bedrooms: 2,
    bathrooms: 2,
    size: '1,500 sqft',
    rent: 3000,
    description: 'Elegant waterfront condo with breathtaking views of the bay.',
    occupied: false,
    tenant: null,
    imageUrl: '/assets/condos.jpg'
  }
];



export async function GET() {
  return NextResponse.json({properties});
}