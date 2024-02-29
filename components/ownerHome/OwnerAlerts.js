import React, { useState, useEffect } from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'; // Import icons
import Alert from './Alert';
import AlertFilters from './AlertFilters';

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

  const sortedArrow = sortDirection === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />; // Icon for sorting direction

  const filteredAlerts = sortedAlerts.filter(alert =>
    (!filterType || alert.type === filterType) &&
    (!filterLocation || alert.location === filterLocation) &&
    (!filterStatus || alert.status === filterStatus)
  );

  return (
    <div className='w-full bg-customLight-primary bg-opacity-40 rounded-xl p-4'>
      <AlertFilters
        filterType={filterType}
        setFilterType={setFilterType}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        locations={locations}
        handleFilterChange={handleFilterChange}
        clearFilters={clearFilters}
        toggleSortDirection={toggleSortDirection}
        sortedArrow={sortedArrow}
      />
      <div className='max-h-48 overflow-y-auto mt-4 bg-white bg-opacity-50 rounded-md'>
        {filteredAlerts.map((alert, index) => (
          <Alert key={index} alert={alert} />
        ))}
      </div>
    </div>
  );
}
