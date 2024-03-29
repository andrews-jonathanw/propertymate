const Home = ({ property }) => {
  return (
    <div key={property.id} className="border border-gray-300 p-4 rounded-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
      <p className="text-gray-700">{property.address}</p>
      {/* {property.occupied && (
        <div>
          <h3 className="text-lg font-semibold mt-4">Tenant</h3>
          <p className="text-gray-700">{property.tenant.name}</p>
          <p className="text-gray-700">{property.tenant.email}</p>
          <p className="text-gray-700">{property.tenant.phone}</p>
        </div>
      )} */}
    </div>
  );
};

export default Home;