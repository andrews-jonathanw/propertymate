import React from 'react';
// Importing icons from React Icons
import { MdVisibility, MdEdit, MdPictureAsPdf, MdShare } from 'react-icons/md';

export default function CardToolBar({ property, onView }) {
  return (
    <div className='cardToolBar relative rounded-tr-2xl rounded-br-2xl flex items-center justify-center bg-black bg-opacity-50 p-2'>
      {/* Container for the icons */}
      <div className='icons-container absolute right-0 flex flex-col items-center justify-center space-y-4 mr-[.2rem]'>
        <button className='text-white' onClick={() => onView(property)}>
          <MdVisibility /> {/* View Icon */}
        </button>
        <button className='text-white' onClick={() => console.log('Edit button clicked')}>
          <MdEdit /> {/* Edit Icon */}
        </button>
        <button className='text-white' onClick={() => console.log('PDF button clicked')}>
          <MdPictureAsPdf /> {/* PDF Icon */}
        </button>
        <button className='text-white' onClick={() => console.log('Share button clicked')}>
          <MdShare /> {/* Share Icon */}
        </button>
      </div>
    </div>
  );
}





