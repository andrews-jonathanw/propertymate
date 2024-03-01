import React from 'react'
import { FaDollarSign } from 'react-icons/fa';
export default function CalendarIcons({ alerts, day}) {
  return (
    <div className="absolute top-0 right-0 mt-1 md:mr-1 flex flex-col items-center justify-center md:text-base text-xs">
      {alerts.map((alert, index) => (
        alert.date.split('-')[2] === String(day) && alert.type === 'Payment' && alert.status === 'Unpaid' && (
          <FaDollarSign key={index} className="text-red-500" />
        )
      ))}
    </div>
  )
}
