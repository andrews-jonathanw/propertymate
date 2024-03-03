import React, { useState } from 'react';
import Button from '../ui/Button';
import Status from './Status';
import { FiMail, FiMessageCircle, FiFileText, FiEdit } from 'react-icons/fi';
import MobileMenu from './MobileMenu'; // Import MobileMenu component

export default function Tenant({ tenant }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Stop click event propagation
  };

  return (
    <div className="relative rounded-lg border border-gray-300 bg-white p-6 mb-6 shadow-lg hover:shadow-xl transition duration-300 hover:cursor-pointer" onClick={toggleExpanded}>
      <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-6 ">
        {/* Tenant Details */}
        <div>
          <h2 className="text-xl font-bold mb-2">{tenant.name}</h2>
          <div className="space-y-2">
            {expanded && (
              <>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">Contact Details</p>
                  <p className="text-sm">{tenant.phone}</p>
                  <p className="text-sm">{tenant.email}</p>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">Emergency Contact</p>
                  <p className="text-sm">{tenant.emergencyContact}</p>
                </div>
              </>
            )}
            <Status status={tenant.status} paymentDate={tenant.paymentDay} />
          </div>
        </div>
        {/* Lease Information */}
        <div className="flex items-start">
          <div className="flex flex-col md:flex-row items-start md:space-x-4">
            {expanded && (
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">Lease Details</p>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm"><span className="font-semibold">Start:</span> {tenant.leaseStart}</p>
                    <p className="text-sm"><span className="font-semibold">End:</span> {tenant.leaseEnd}</p>
                    <p className="text-sm"><span className="font-semibold">Term:</span> {tenant.leaseTerm} months</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold">Rent Details</p>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm"><span className="font-semibold">Rent:</span> ${tenant.rent}</p>
                    <p className="text-sm"><span className="font-semibold">Payment Day:</span> {tenant.paymentDay}</p>
                  </div>
                </div>
                {tenant.animals && (
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold">Animals</p>
                    <p className="text-sm">{tenant.animals}</p>
                  </div>
                )}
              </div>
            )}
            {/* Status */}
            <div className="flex flex-col space-y-2">
              {expanded && (
                <>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold">Maintenance Requests:</p>
                    <p className="text-sm">{tenant.maintenanceRequests}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Mobile Menu */}
          <MobileMenu tenant={tenant} />
        </div>
      </div>
      {/* Action Buttons */}
      {expanded && (
        <div className="hidden md:flex justify-end mt-4">
          <div className="flex flex-wrap gap-2">
            <Button className="px-3 py-2 flex items-center space-x-2" onClick={handleButtonClick}>
              <FiMail size={18} />
              <span>Email</span>
            </Button>
            <Button className="px-3 py-2 flex items-center space-x-2" onClick={handleButtonClick}>
              <FiMessageCircle size={18} />
              <span>Messages</span>
            </Button>
            <Button className="px-3 py-2 flex items-center space-x-2" onClick={handleButtonClick}>
              <FiFileText size={18} />
              <span>Documents</span>
            </Button>
            <Button className="px-3 py-2 flex items-center space-x-2" onClick={handleButtonClick}>
              <FiEdit size={18} />
              <span>Edit</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
