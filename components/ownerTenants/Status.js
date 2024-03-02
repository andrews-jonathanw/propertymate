import React from 'react';

function getStatusMessage(status, paymentDate) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  const lastMonthIndex = currentMonth === 0 ? 11 : currentMonth - 1;

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  switch (status) {
    case 'Paid':
      if (currentDay <= paymentDate) {
        return 'Tenant is up to date with payments';
      } else {
        return 'Tenant has paid for the current month.';
      }
    case 'Unpaid':
      if (currentDay + 7 >= paymentDate) {
        return `Awaiting payment. Next payment due on ${formatDate(paymentDate)} in ${months[currentMonth]}.`;
      } else {
        return 'Tenant has not paid for the current month.';
      }
    case 'Missed Payment':
      if (today.getMonth() !== lastMonthIndex) {
        return `Tenant missed a payment in ${months[lastMonthIndex]}.`;
      } else {
        return `Tenant has missed a payment on ${formatDate(paymentDate)} in ${months[currentMonth]}.`;
      }
    default:
      return 'No status available.';
  }
}



function formatDate(paymentDate) {
  const day = parseInt(paymentDate);
  const suffix = getOrdinalSuffix(day);
  return `${day}${suffix}`;
}

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function Status({ status, paymentDate }) {
  const colorClass = {
    'Paid': 'text-green-600',
    'Unpaid': 'text-yellow-600',
    'Missed Payment': 'text-red-600',
    'default': 'text-red-600',
  }[status] || 'text-red-600';

  const message = getStatusMessage(status, paymentDate);

  return (
    <div>
      <p className={`text-sm font-semibold ${colorClass}`}>Status:</p>
      <p className={`text-sm font-bold ${colorClass}`}>{status}</p>
      <p className={`text-sm ${colorClass}`}>{message}</p>
    </div>
  );
}

export default Status;
