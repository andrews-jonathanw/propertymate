import React, {useState} from 'react';
import Button from '../ui/Button';
import { FiMail, FiMessageCircle, FiFileText, FiEdit, FiMenu } from 'react-icons/fi';

export default function MobileMenu({ tenant}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = (e) => {
    // You can handle the click events for menu items here
    // For example, close the menu after clicking on a menu item
    e.stopPropagation();
    setMobileMenuOpen(false);
  };

  return (
    <div className="md:hidden absolute top-0 right-0">
      <button className="text-gray-500 p-2" onClick={(e)=>toggleMobileMenu(e)}>
        <FiMenu size={24} />
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-0 right-0 mt-8 bg-white border border-gray-300 rounded shadow-md z-50">
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => {handleMenuItemClick(e)}}>
            <div className="flex flex-row items-center">
              <FiMail className="mr-1" size={18} />
              Email
            </div>
          </Button>
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => {handleMenuItemClick(e)}}>
            <div className="flex flex-row items-center">
              <FiMessageCircle className="mr-1" size={18} />
              Messages
            </div>
          </Button>
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => {handleMenuItemClick(e)}}>
            <div className="flex flex-row items-center">
              <FiFileText className="mr-1" size={18} />
              Documents
            </div>
          </Button>
          <Button className="block w-full text-left px-4 py-2" onClick={(e) => {handleMenuItemClick(e)}}>
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
