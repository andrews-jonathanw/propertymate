const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 text-gray-950 bg-primary rounded-md border border-primary hover:bg-primary/90 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-300 ease-in-out text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

