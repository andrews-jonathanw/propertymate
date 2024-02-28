'use client';
import React, { useState, useEffect } from 'react';
import OwnerAlerts from '@/components/ownerHome/OwnerAlerts';
import OwnerCalendar from '@/components/ownerHome/OwnerCalendar';

export default function Page() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await fetch('/api/owneralerts', {
          headers: {
            Accept: 'application/json',
            method: 'GET'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setAlerts(data.ownerAlerts);
        }
      } catch (error) {
        console.error('An error occurred while fetching properties:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAlerts();
  }, []);


  return (
    <div className='p-28'>
      <h1 className='text-center'>
        Currently viewing the Owner Home Page
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col items-center justify-between mx-auto my-8 gap-6">
          <OwnerAlerts alerts={alerts}/>
          <OwnerCalendar />
        </div>
      )}
    </div>
  )
}