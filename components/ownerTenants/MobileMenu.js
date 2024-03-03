import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { FiMail, FiMessageCircle, FiFileText, FiEdit, FiChevronUp, FiChevronDown } from 'react-icons/fi';

export default function MobileMenu({ tenant }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(false);
  };

  return (
    <div className="md:hidden absolute top-0 right-0" ref={menuRef}>
      <button className="text-gray-500 p-2" onClick={(e) => toggleMobileMenu(e)}>
        {mobileMenuOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-0 right-0 mt-8 bg-customLight-accent z-50 mr-2 flex flex-col gap-1">
          <Button className="block w-full text-left px-2 py-2" onClick={(e) => handleMenuItemClick(e)}>
            <div className="flex flex-row items-center">
              <FiMail className="mr-1" size={18} />
              Email
            </div>
          </Button>
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => handleMenuItemClick(e)}>
            <div className="flex flex-row items-center">
              <FiMessageCircle className="mr-1" size={18} />
              Messages
            </div>
          </Button>
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => handleMenuItemClick(e)}>
            <div className="flex flex-row items-center">
              <FiFileText className="mr-1" size={18} />
              Documents
            </div>
          </Button>
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => handleMenuItemClick(e)}>
            <div className="flex flex-row items-center">
              <FiEdit className="mr-1" size={18} />
              Edit
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
