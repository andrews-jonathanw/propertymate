import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

export default function PaymentIcon({ alert, index, currentYear, currentMonth, day}) {
  if (alert.date) {
    const alertYear = parseInt(alert.date.split('-')[0]);
    const alertMonth = parseInt(alert.date.split('-')[1]);
    const alertDay = parseInt(alert.date.split('-')[2]);
    if (
      alertYear === currentYear &&
      alertMonth === currentMonth &&
      alertDay === day &&
      alert.status === 'Unpaid'
    ) {
      return <FaDollarSign key={index} className="text-red-600 w-[1rem] h-3" />;
    }
  }
  return null;
}
