import React from 'react';

export default function AlertFilters({ filterType, setFilterType, filterLocation, setFilterLocation, filterStatus, setFilterStatus, locations, handleFilterChange, clearFilters, toggleSortDirection, sortedArrow }) {
  return (
    <div className="flex flex-col md:flex-row justify-between m-4 max-w-full">
      <div className="flex flex-wrap md:flex-nowrap space-y-2 md:space-x-4 md:space-y-0 flex-grow items-center">
        <select
          value={filterType}
          onChange={(e) => handleFilterChange(e, setFilterType)}
          className="w-full md:w-auto text-sm md:text-base border border-gray-300 rounded-md py-2 px-4 bg-customLight-background focus:outline-none focus:border-customLight-primary focus:ring focus:ring-customLight-primary focus:ring-opacity-50"
        >
          <option value="">All Types</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Payment">Payment</option>
          <option value="Lease">Lease</option>
        </select>
        <select
          value={filterLocation}
          onChange={(e) => handleFilterChange(e, setFilterLocation)}
          className="w-full md:w-auto text-sm md:text-base border border-gray-300 rounded-md py-2 px-4 bg-customLight-background focus:outline-none focus:border-customLight-primary focus:ring focus:ring-customLight-primary focus:ring-opacity-50"
        >
          <option value="">All Locations</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>{location}</option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => handleFilterChange(e, setFilterStatus)}
          className="w-full md:w-auto text-sm md:text-base border border-gray-300 rounded-md py-2 px-4 bg-customLight-background focus:outline-none focus:border-customLight-primary focus:ring focus:ring-customLight-primary focus:ring-opacity-50"
        >
          <option value="">All Statuses</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Working">Working</option>
        </select>
        <button className="bg-customLight-accent border border-customLight-secondary py-2 px-4 rounded-md text-sm md:text-base text-customLight-text hover:bg-customLight-secondary hover:text-customLight-accent focus:outline-none focus:border-customLight-primary focus:ring focus:ring-customLight-primary focus:ring-opacity-50 flex flex-row items-center justify-center gap-2" onClick={toggleSortDirection}>
          <div>
            Date
          </div>
          <div>
            {sortedArrow}
          </div>
        </button>
        <button className="bg-customLight-accent border border-customLight-secondary py-2 px-4 rounded-md text-sm md:text-base text-customLight-text hover:bg-customLight-secondary hover:text-customLight-accent focus:outline-none focus:border-customLight-primary focus:ring focus:ring-customLight-primary focus:ring-opacity-50 ml-2" onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
}
