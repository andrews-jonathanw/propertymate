import {NextResponse} from 'next/server';

const tenants = [
  {
    id: 101,
    name: 'John Smith',
    unit: 'Apt 101',
    location: 'City Heights Apartments',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    rent: 1200,
    status: 'Active'
  },
  {
    id: 102,
    name: 'Emily Johnson',
    unit: 'Apt 103',
    location: 'City Heights Apartments',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    rent: 1500,
    status: 'Active'
  },
  {
    id: 102,
    name: 'Emily Johnson',
    unit: 'Unit A',
    location: 'Sunnyvale Duplex',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    rent: 1800,
    status: 'Active'
  },
  {
    id: 103,
    name: 'Michael Davis',
    unit: null,
    location: 'Grand Victorian Mansion',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    rent: 5000,
    status: 'Active'
  }
];

export async function GET() {
  return NextResponse.json({tenants});
}