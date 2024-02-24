import React from 'react';
import { MdVisibility, MdEdit, MdPictureAsPdf, MdShare } from 'react-icons/md';

export default function CardToolBar({ property, onView, setScrollPosition }) {

  const handleView = () => {
    onView(property);
    setScrollPosition(window.scrollY);
    window.scrollTo(0, 0);
  };

  return (
    <div className='cardToolBar relative rounded-tr-2xl rounded-br-2xl flex items-center justify-center bg-black bg-opacity-50 p-2'>
      <div className='icons-container absolute right-0 flex flex-col items-center justify-center space-y-4 mr-[.2rem]'>
        <button className='text-white' onClick={handleView}>
          <MdVisibility />
        </button>
        <button className='text-white' onClick={() => console.log('Edit button clicked')}>
          <MdEdit />
        </button>
        <button className='text-white' onClick={() => console.log('PDF button clicked')}>
          <MdPictureAsPdf />
        </button>
        <button className='text-white' onClick={() => console.log('Share button clicked')}>
          <MdShare />
        </button>
      </div>
    </div>
  );
}






