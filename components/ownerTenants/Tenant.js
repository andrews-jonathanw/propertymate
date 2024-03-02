import React from 'react';
import Button from '../ui/Button';
import { FiMail, FiMessageCircle, FiFileText, FiEdit } from 'react-icons/fi';

export default function Tenant({ tenant }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-customLight-accent p-4 mb-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <div className="md:mr-4">
          <h2 className="text-xl font-bold">{tenant.name}</h2>
          <p className="text-sm text-customLight-text">{tenant.unit}</p>
          <p className="text-sm text-customLight-text">{tenant.location}</p>
        </div>
        <div className="flex flex-wrap justify-between md:justify-start md:flex-nowrap md:space-x-2">
          <Button className="px-1 py-1 mb-2 md:mb-0">
            <div className='flex flex-row items-center'>
              <FiMail className="mr-1" size={18} />
              Email
            </div>
          </Button>
          <Button className="px-1 py-1 mb-2 md:mb-0">
            <div className='flex flex-row items-center'>
              <FiMessageCircle className="mr-1" size={18} />
              Messages
            </div>
          </Button>
          <Button className="px-1 py-1 mb-2 md:mb-0">
            <div className='flex flex-row items-center'>
              <FiFileText className="mr-1" size={18} />
              Documents
            </div>
          </Button>
          <Button className="px-1 py-1 mb-2 md:mb-0">
            <div className='flex flex-row items-center'>
              <FiEdit className="mr-1" size={18} />
              Edit
            </div>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-semibold">Lease Start:</p>
          <p className="text-sm">{tenant.leaseStart}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Lease End:</p>
          <p className="text-sm">{tenant.leaseEnd}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Rent:</p>
          <p className="text-sm">${tenant.rent}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Status:</p>
          <p className="text-sm">{tenant.status}</p>
        </div>
      </div>
    </div>
  );
}
