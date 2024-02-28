import {NextResponse} from 'next/server';

const ownerAlerts = [
  {
    id: 1,
    type: 'Maintenance',
    message: 'City Heights Apartments: Apt 101 has a leaky faucet',
    date: '2024-02-04'
  },
  {
    id: 2,
    type: 'Payment',
    message: 'Sunnyvale Duplex: Rent payment for Apt 1 is overdue',
    date: '2024-02-03'
  },
  {
    id: 3,
    type: 'Maintenance',
    message: 'City Heights Apartments: Apt 103 has a broken window',
    date: '2024-02-18'
  },
  {
    id: 4,
    type: 'Payment',
    message: 'Sunnyvale Duplex: Rent payment for Apt 2 is overdue',
    date: '2024-02-03'
  },
  {
    id: 5,
    type: 'Lease',
    message: 'City Heights Apartments: Lease for Apt 101 is expiring soon',
    date: '2024-02-28'
  },
  {
    id: 6,
    type: 'Lease',
    message: 'City Heights Apartments: Lease for Apt 103 is expiring soon',
    date: '2024-02-28'
  }

];

export async function GET() {
  return NextResponse.json({ownerAlerts});
}