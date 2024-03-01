import CalendarIcons from './CalendarIcons';

export default function CalendarDay({ generateDaysArray, isCurrentDay, alerts, currentDate }) {
  const hasAlerts = (day) => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    return alerts.some(alert => {
      const alertYear = parseInt(alert.date.split('-')[0]);
      const alertMonth = parseInt(alert.date.split('-')[1]);
      const alertDay = parseInt(alert.date.split('-')[2]);
      return alertYear === currentYear && alertMonth === currentMonth && alertDay === day;
    });
  };

  return (
    <>
      {generateDaysArray().map((day, index) => (
        <div key={index} className="relative flex items-center justify-center">
          <div className={`flex flex-row items-center justify-center w-full h-10 bg-customLight-accent ${isCurrentDay(day) ? 'bg-customLight-secondary text-customDark-text font-extrabold' : ''}`}>
            <div className="text-center">
              {day !== '' ? day : null}
            </div>
            {day !== '' && (
              <CalendarIcons alerts={alerts} day={day} currentDate={currentDate} />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
