import React, {useState, useEffect} from 'react';
import MaintenanceIcon from './MaintenanceIcon';
import PaymentIcons from './PaymentIcons';
import LeaseIcons from './LeaseIcons';

export default function CalendarIcons({ alerts, day, currentDate }) {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  return (
    <div className="absolute top-0 right-0 mt-1 md:mr-1 flex flex-col items-center justify-center md:text-base text-xs">
      {alerts.map((alert, index) => {
        if (alert.type === 'Maintenance') {
          return <MaintenanceIcon alert={alert} index={index} currentYear={currentYear} currentMonth={currentMonth} day={day}/>;
        }
        if (alert.type === 'Payment') {
          return <PaymentIcons alert={alert} index={index} currentYear={currentYear} currentMonth={currentMonth} day={day} />;
        }
        if (alert.type === 'Lease') {
          return <LeaseIcons alert={alert} index={index} currentYear={currentYear} currentMonth={currentMonth} day={day} />;
        }
        return null;
      })}
    </div>
  );
}
