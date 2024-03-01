import React, { useState } from 'react';
import CalendarDay from './CalendarDay';

export default function OwnerCalendar({alerts}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the current month and year
  const getCurrentMonthYear = () => {
    return currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  // Function to get the number of days in the current month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  // Function to get the first day of the month
  const getFirstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1).getDay();
  };

  // Function to generate an array of days in the current month
  const generateDaysArray = () => {
    const daysInMonth = getDaysInMonth();
    const firstDayOfMonth = getFirstDayOfMonth();

    // Generate an array of days in the month
    const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    // Add empty placeholders for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.unshift('');
    }

    return daysArray;
  };

  // Function to handle navigation to previous month
  const goToPreviousMonth = () => {
    const previousMonth = new Date(currentDate);
    previousMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(previousMonth);
  };

  // Function to handle navigation to next month
  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  // Function to handle navigation to previous year
  const goToPreviousYear = () => {
    const previousYear = new Date(currentDate);
    previousYear.setFullYear(currentDate.getFullYear() - 1);
    setCurrentDate(previousYear);
  };

  // Function to handle navigation to next year
  const goToNextYear = () => {
    const nextYear = new Date(currentDate);
    nextYear.setFullYear(currentDate.getFullYear() + 1);
    setCurrentDate(nextYear);
  };

  // Function to check if a given day is the current day
  const isCurrentDay = (day) => {
    const today = new Date();
    return currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear() && day === today.getDate();
  };

  return (
    <div className='w-full p-4 bg-customLight-primary bg-opacity-15 rounded-lg mb-1'>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex flex-col items-start'>
          <button onClick={goToPreviousMonth} className='text-customLight-text'>Previous Month</button>
          <button onClick={goToPreviousYear} className='text-sm ml-4 text-customLight-text'>Previous Year</button>
        </div>
        <h1 className='text-lg text-center font-semibold text-customLight-text'>{getCurrentMonthYear()}</h1>
        <div className='flex flex-col items-end'>
          <button onClick={goToNextMonth} className='text-customLight-text'>Next Month</button>
          <button onClick={goToNextYear} className='text-sm mr-4 text-customLight-text'>Next Year</button>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-2'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className='text-center text-sm font-semibold text-customLight-text'>{day}</div>
        ))}
        <CalendarDay generateDaysArray={generateDaysArray} currentDate={currentDate} isCurrentDay={isCurrentDay} alerts={alerts} />
      </div>
    </div>
  );
}
