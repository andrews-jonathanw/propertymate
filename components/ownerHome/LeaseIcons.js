import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

export default function LeaseIcons({ alert, index, currentYear, currentMonth, day }) {
  if (alert.leaseExpiration || alert.leaseStart) {
    if (alert.leaseExpiration) {
      const expirationYear = parseInt(alert.leaseExpiration.split('-')[0]);
      const expirationMonth = parseInt(alert.leaseExpiration.split('-')[1]);
      const expirationDay = parseInt(alert.leaseExpiration.split('-')[2]);
      if (
        expirationYear === currentYear &&
        expirationMonth === currentMonth &&
        expirationDay === day
      ) {
        return <FaCalendarAlt key={index} className="text-yellow-500" />;
      }
    }
    if (alert.leaseStart) {
      const startYear = parseInt(alert.leaseStart.split('-')[0]);
      const startMonth = parseInt(alert.leaseStart.split('-')[1]);
      const startDay = parseInt(alert.leaseStart.split('-')[2]);
      if (
        startYear === currentYear &&
        startMonth === currentMonth &&
        startDay === day
      ) {
        return <FaCalendarAlt key={index} className="text-blue-500" />;
      }
    }
  }
  return null;
}
