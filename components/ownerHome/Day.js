import React, { useState, useEffect } from 'react';
import CalendarIcons from './CalendarIcons';

export default function Day({ day, alerts, currentDate, isCurrentDay }) {

  return (
    <div className={`relative flex items-center justify-center bg-customLight-accent h-10 ${isCurrentDay(day) ? 'bg-customLight-secondary text-customDark-text font-extrabold' : ''}`}>
      {day !== '' && (
        <>
          <div className="flex items-center justify-center">
            {day}
          </div>
          <CalendarIcons alerts={alerts} day={day} currentDate={currentDate}/>
        </>
      )}
    </div>
  );
}
