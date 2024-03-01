import {NextResponse} from 'next/server';

const ownerAlerts = [
  {
    id: 1,
    type: 'Maintenance',
    location: 'City Heights Apartments',
    unit: 'Apt 101',
    message: 'Has a leaky kitchen faucet',
    date: '2024-01-19',
    status: 'Pending',
    scheduled: '2024-01-25',
  },
  {
    id: 2,
    type: 'Payment',
    location: 'City Heights Apartments',
    unit: 'Apt 103',
    message: 'Rent has been paid',
    date: '2024-01-22',
    status: 'Completed'
  },
  {
    id: 3,
    type: 'Lease',
    location: 'Sunnyvale Duplex',
    unit: 'Unit A',
    message: 'Lease is up for renewal',
    date: '2024-02-04',
    status: 'Pending'
  },
  {
    id: 4,
    type: 'Maintenance',
    location: 'Sunnyvale Duplex',
    unit: 'Unit B',
    message: 'Needs plumbing repairs',
    date: '2024-02-04',
    status: 'Working'
  },
  {
    id: 5,
    type: 'Payment',
    location: 'Cozy Cottage',
    unit: '',
    message: 'Rent overdue',
    date: '2024-02-21',
    status: 'Unpaid'
  },
  {
    id: 6,
    type: 'Maintenance',
    location: 'Grand Victorian Mansion',
    unit: '',
    message: 'Roof repair needed',
    date: '2024-03-01',
    status: 'Pending'
  },
  {
    id: 7,
    type: 'Maintenance',
    location: 'Luxury Waterfront Condo',
    unit: '',
    message: 'Elevator maintenance scheduled',
    date: '2024-02-04',
    status: 'Working'
  },
  {
    id: 8,
    type: 'Lease',
    location: 'City Heights Apartments',
    unit: 'Apt 102',
    message: 'New tenant moving in next month',
    date: '2024-01-04',
    status: 'Pending'
  },
  {
    id: 9,
    type: 'Payment',
    location: 'Grand Victorian Mansion',
    unit: '',
    message: 'Rent payment received',
    date: '2024-02-14',
    status: 'Completed'
  },
  {
    id: 10,
    type: 'Maintenance',
    location: 'Sunnyvale Duplex',
    unit: 'Unit B',
    message: 'HVAC system needs repair',
    date: '2024-02-24',
    status: 'Working'
  }
];


export async function GET() {
  return NextResponse.json({ownerAlerts});
}