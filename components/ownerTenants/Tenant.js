import React, { useState } from 'react';
import Button from '../ui/Button';
import Status from './Status';
import { FiMail, FiMessageCircle, FiFileText, FiEdit } from 'react-icons/fi';

export default function Tenant({ tenant }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="rounded-lg border border-gray-300 bg-customLight-accent p-4 mb-4 cursor-pointer " onClick={toggleExpanded}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start md:space-x-4">
        <div className="md:mr-4 mb-2 md:mb-0">
          <h2 className="text-xl font-bold">{tenant.name}</h2>
          <div  className="">
            {expanded && (
              <>
                <p className="text-sm text-customLight-text mb-1">{tenant.unit}</p>
                <p className="text-sm text-customLight-text mb-1">{tenant.location}</p>
              </>
            )}
            <Status status={tenant.status} paymentDate={tenant.paymentDay}/>
            {expanded && (
              <div className="flex flex-wrap justify-between md:flex-nowrap md:space-x-2">
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
            )}
          </div>
        </div>
      </div>
      {expanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-sm font-semibold">Lease Start:</p>
            <p className="text-sm">{tenant.leaseStart}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Lease End:</p>
            <p className="text-sm">{tenant.leaseEnd}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Lease Term:</p>
            <p className="text-sm">{tenant.leaseTerm} months</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Rent:</p>
            <p className="text-sm">${tenant.rent}</p>
            <p className="text-sm">Payment Day: {tenant.paymentDay}</p>
          </div>
        </div>
      )}
    </div>
  );
}
