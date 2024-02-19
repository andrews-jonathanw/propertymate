import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { BsPersonXFill,BsPersonFillCheck } from "react-icons/bs";

export default function PropertyAlerts({ property }) {
  const hasUnits = property.units && property.units.length > 0;
  const vacantUnitsCount = hasUnits ? property.units.filter(unit => !unit.occupied).length : 0;

  return (
    <div className='absolute top-0 bg-black bg-opacity-60 rounded-t-xl rounded-br-xl left-0 p-2'>
      {hasUnits ? (
        <div className='flex items-center justify-center'>
          {vacantUnitsCount > 0 ? (
            <>
              <BsPersonXFill className='text-yellow-500' />
              <span className='ml-1 text-md text-white'>{`${vacantUnitsCount} Vacancies`}</span>
            </>
          ) : (
            <>
              <BsPersonFillCheck className='text-green-600' />
              <span className='ml-1 text-md text-white'>No Vacancy</span>
            </>
          )}
        </div>
      ) : (
        <div className={`flex items-center justify-center text-${property.occupied ? 'green' : 'yellow'}-600`}>
          {property.occupied ? <BsPersonFillCheck className='text-green-600' /> : <BsPersonXFill className='text-yellow-600' />}
          <span className='ml-1 text-md text-white'>{property.occupied ? 'Occupied' : 'Vacant'}</span>
        </div>
      )}
    </div>
  );
}



