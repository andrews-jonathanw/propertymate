import { NextResponse } from 'next/server';

const tenants = [
  {
    id: 101,
    name: 'John Smith',
    phone: '555-555-5555',
    email: 'johnsmith@propertymate.com',
    unit: 'Apt 101',
    location: 'City Heights Apartments',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    leaseTerm: 12,
    rent: 1200,
    paymentDay: '3',
    status: 'Paid',
  },
  {
    id: 102,
    name: 'Amy Farley',
    phone: '555-555-5555',
    email: 'amyfarley@propertymate.com',
    unit: 'Apt 103',
    location: 'City Heights Apartments',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    leaseTerm: 12,
    rent: 1500,
    paymentDay: '14',
    status: 'Missed Payment'
  },
  {
    id: 103,
    name: 'Emily Johnson',
    phone: '555-555-5555',
    email: 'emilyjohnson@propertymate.com',
    unit: 'Unit A',
    location: 'Sunnyvale Duplex',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    rent: 1800,
    paymentDay: '18',
    status: 'Unpaid'
  },
  {
    id: 104,
    name: 'Michael Davis',
    phone: '555-555-5555',
    email: 'michaeldavis@propertymate.com',
    unit: null,
    location: 'Grand Victorian Mansion',
    leaseStart: '2023-01-01',
    leaseEnd: '2025-12-31',
    leaseTerm: 12,
    rent: 5000,
    paymentDay: '6',
    status: 'Unpaid'
  },
  {
    id: 105,
    name: 'Sarah Wilson',
    phone: '555-555-5555',
    email: 'sarahwilson@propertymate.com',
    unit: 'B',
    location: 'Sunnyvale Duplex',
    leaseStart: '2023-01-01',
    leaseEnd: '2024-12-31',
    leaseTerm: 12,
    rent: 1100,
    paymentDay: '9',
    status: 'Unpaid'
  }
];

export async function GET() {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;

  tenants.forEach(tenant => {
    const paymentDay = parseInt(tenant.paymentDay);
    const status = getStatus(currentDay, currentMonth, paymentDay, tenant.status);
    tenant.status = status;
  });

  return NextResponse.json({ tenants });
}

function getStatus(currentDay, currentMonth, paymentDay, currentStatus) {
  if (currentStatus === 'Paid') {
    if (currentDay <= paymentDay) {
      return 'Paid';
    } else {
      return 'Missed Payment';
    }
  } else if (currentStatus === 'Unpaid') {
    if (currentDay > paymentDay) {
      return 'Missed Payment';
    } else if (currentDay >= paymentDay - 7) {
      return 'Unpaid';
    } else {
      return 'Paid';
    }
  } else {
    return currentStatus;
  }
}
