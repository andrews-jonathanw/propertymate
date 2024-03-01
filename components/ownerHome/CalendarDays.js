import React from 'react';
import Day from './Day';

export default function CalendarDays({ generateDaysArray, isCurrentDay, alerts, currentDate }) {
  return (
    <>
      {generateDaysArray().map((day, index) => (
        <Day
          key={index}
          day={day}
          alerts={alerts}
          currentDate={currentDate}
          isCurrentDay={isCurrentDay}
        />
      ))}
    </>
  );
}
