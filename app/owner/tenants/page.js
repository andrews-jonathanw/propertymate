'use client';
import React, { useState, useEffect } from 'react';
import TenantSearch from '@/components/ownerTenants/TenantSearch';
import TenantsContainer from '@/components/ownerTenants/TenantsContainer';

export default function Page() {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [errorTenants, setErrorTenants] = useState([]);
  const [validTenants, setValidTenants] = useState([]);

  useEffect(() => {
    async function fetchTenants() {
      try {
        const response = await fetch('/api/tenants', {
          headers: {
            Accept: 'application/json',
            Method: 'GET'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setTenants(data.tenants);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch tenants');
        }
      } catch (error) {
        console.error('An error occurred while fetching Tenants:', error);
        setLoading(false);
      }
    }

    fetchTenants();
  }, []);

  useEffect(() => {
    const uniqueTenantIds = new Set(); // Set to store unique tenant IDs encountered
    const valid = [];
    const error = [];

    tenants.forEach(tenant => {
      if (uniqueTenantIds.has(tenant.id)) {
        error.push({
          message: `Duplicate tenant ID found: ${tenant.name}`,
          tenant
        });
      } else {
        uniqueTenantIds.add(tenant.id);

        const name = tenant.name.toLowerCase();
        const unit = tenant.unit ? tenant.unit.toLowerCase() : '';
        const location = tenant.location.toLowerCase();
        if (
          name.includes(search.toLowerCase()) ||
          unit.includes(search.toLowerCase()) ||
          location.includes(search.toLowerCase())
        ) {
          valid.push(tenant);
        }
      }
    });

    setValidTenants(valid);
    setErrorTenants(error);
  }, [tenants, search]);

  return (
    <div className='flex flex-col items-center justify-center p-4 px-10 space-y-4'>
      <TenantSearch setSearch={setSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TenantsContainer tenants={validTenants} errorTenants={errorTenants} />
        </>
      )}
    </div>
  );
}