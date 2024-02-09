const Container = ({ children }) => {
  return (
    <div className="max-w-[1920px] w-full mx-auto xl:px-20 p-4 fixed z-50 top-0 border border-b-primary/10 bg-secondary">
      {children}
    </div>
  );
};

export default Container;


