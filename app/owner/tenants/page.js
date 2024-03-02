'use client';
import React, { useState, useEffect } from 'react'
import TenantsContainer from '@/components/ownerTenants/tenantsContainer'
import TenantSearch from '@/components/ownerTenants/TenantSearch'

export default function page() {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTenants() {
      try {
        const response = await fetch('/api/tenants', {
          headers: {
            Accept: 'application/json',
            Method: 'GET'
          }
        });
        if (response) {
          const data = await response.json();
          setTenants(data.tenants);
        }
      } catch (error) {
        console.error('An error occurred while fetching Tenants:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchTenants();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center pt-4 px-10'>
      <TenantSearch />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TenantsContainer tenants={tenants} />
      )}
    </div>
  )
}
