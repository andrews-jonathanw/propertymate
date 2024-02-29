import React, { useState, useEffect } from 'react';
import Alert from './Alert';

export default function OwnerAlerts({ alerts }) {
  const [sortedAlerts, setSortedAlerts] = useState([...alerts]);
  const [filterType, setFilterType] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [locations, setLocations] = useState([]);
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    const locations = alerts.map(alert => alert.location);
    const uniqueLocations = [...new Set(locations)];
    setLocations(uniqueLocations);
    sortAlerts('desc');
  }, [alerts]);

  const handleFilterChange = (event, setter) => {
    const value = event.target.value;
    setter(value);
  };

  const clearFilters = () => {
    setFilterType('');
    setFilterLocation('');
    setFilterStatus('');
    setSortDirection('desc');
    sortAlerts('desc');
  };

  const sortAlerts = (direction) => {
    const sorted = [...sortedAlerts].sort((a, b) => {
      if (direction === 'asc') {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setSortedAlerts(sorted);
  };

  const toggleSortDirection = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    sortAlerts(newDirection);
  };

  const sortedArrow = sortDirection === 'asc' ? '↑' : '↓';

  const filteredAlerts = sortedAlerts.filter(alert =>
    (!filterType || alert.type === filterType) &&
    (!filterLocation || alert.location === filterLocation) &&
    (!filterStatus || alert.status === filterStatus)
  );

  return (
    <div className='owner-alerts-container'>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <select value={filterType} onChange={(e) => handleFilterChange(e, setFilterType)}>
            <option value="">All Types</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Payment">Payment</option>
            <option value="Lease">Lease</option>
          </select>
          <select value={filterLocation} onChange={(e) => handleFilterChange(e, setFilterLocation)}>
            <option value="">All Locations</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
          <select value={filterStatus} onChange={(e) => handleFilterChange(e, setFilterStatus)}>
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Working">Working</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded" onClick={toggleSortDirection}>
            Date {sortedArrow}
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded" onClick={clearFilters}>Clear Filters</button>
        </div>
      </div>
      <div className='max-h-48 overflow-y-auto p-4'>
        {filteredAlerts.map((alert, index) => (
          <Alert key={index} alert={alert} />
        ))}
      </div>
    </div>
  );
}
