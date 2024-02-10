const PropertySearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by name, address, or type"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md mb-4"
    />
  );
};

export default PropertySearch;

