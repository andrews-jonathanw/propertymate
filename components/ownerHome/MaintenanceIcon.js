import React from 'react';
import { FaWrench } from 'react-icons/fa';

export default function MaintenanceIcon({ alert, index, currentYear, currentMonth, day }) {
  if (alert.scheduled) {
    const alertYear = parseInt(alert.scheduled.split('-')[0]);
    const alertMonth = parseInt(alert.scheduled.split('-')[1]);
    const alertDay = parseInt(alert.scheduled.split('-')[2]);
    if (
      alertYear === currentYear &&
      alertMonth === currentMonth &&
      alertDay === day &&
      alert.type === 'Maintenance'
    ) {
      return <FaWrench key={index} className="text-red-600" />;
    }
  }
  return null;
}
