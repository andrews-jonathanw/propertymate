import React from 'react';

export default function Alert({ alert }) {
  return (
    <div className='overflow-hidden text-ellipsis max-w-full py-2 px-4 mb-2 border border-gray-300 rounded'>
      <p className=''>{`${alert.type} ${alert.location} ${alert.message} ${alert.date} ${alert.status}`}</p>
    </div>
  );
}
