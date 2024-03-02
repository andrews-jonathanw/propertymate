import React from 'react';

const Button = ({ children, className = '', icon, ...props }) => {
  // Determine the background color from the className
  const bgColor = className.includes('bg-primary') ? 'bg-primary' : 'bg-white';

  // Determine the text color based on the background color
  const textColor = bgColor === 'bg-primary' ? 'text-white' : 'text-black';

  return (
    <button
      className={`flex items-center px-4 py-2 ${textColor} ${bgColor} rounded-md border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300 ease-in-out text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:bg-customLight-secondary hover:text-customLight-accent ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export default Button;



