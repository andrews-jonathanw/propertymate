const Container = ({ children }) => {
  return (
    <div className="w-full mx-auto xl:px-20 p-4 fixed z-50 top-0 bg-customLight-primary">
      {children}
    </div>
  );
};

export default Container;