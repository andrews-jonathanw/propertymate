import React from 'react';

export default function Alert({ alert }) {
  return (
    <div className='max-w-full py-2 px-2 mb-2 mt-2 border bg-customLight-accent border-customLight-secondary rounded-xl mx-2 shadow-xl hover:cursor-pointer'>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-auto sm:mb-0 sm:mr-4 md:w-1/3">
          <p className='font-semibold'>{alert.type}</p>
          <p className={`text-customLight-text overflow-hidden whitespace-nowrap overflow-ellipsis`}>{alert.location}</p>
        </div>
        <div className="w-full sm:w-auto sm:mb-0 flex md:w-1/3 md:justify-center">
          <div className="overflow-hidden whitespace-nowrap overflow-ellipsis sm:text-left">
            <p className={`text-customLight-text`}>{alert.message}</p>
          </div>
        </div>
        <div className="w-full sm:w-auto flex justify-between sm:justify-end md:w-1/3">
          <div className="flex flex-col items-start">
            <p className={`text-customLight-text overflow-hidden whitespace-nowrap overflow-ellipsis mr-4`}>{alert.date}</p>
            <p>{alert.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

