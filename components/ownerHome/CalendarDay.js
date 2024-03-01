import { FaDollarSign } from 'react-icons/fa';

export default function CalendarDay({ generateDaysArray, isCurrentDay, alerts, currentDate }) {
  // Logic to determine if the day has alerts
  const hasAlerts = (day) => {
    // Get the current year and month
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1

    // Implement your logic to check if there are alerts for the given day, month, and year
    return alerts.some(alert => {
      const alertYear = parseInt(alert.date.split('-')[0]); // Extract the year part from the alert date
      const alertMonth = parseInt(alert.date.split('-')[1]); // Extract the month part from the alert date
      const alertDay = parseInt(alert.date.split('-')[2]); // Extract the day part from the alert date
      return alertYear === currentYear && alertMonth === currentMonth && alertDay === day;
    });
  };

  return (
    <>
      {generateDaysArray().map((day, index) => (
        <div key={index} className="relative flex items-center justify-center">
          <div className={`flex flex-row items-center justify-center w-full h-10 bg-customLight-accent ${isCurrentDay(day) ? 'bg-customLight-primary bg-opacity-70 font-extrabold' : ''}`}>
            <div className="text-center">
              {day !== '' ? day : null}
            </div>
            {day !== '' && hasAlerts(day) && (
              <div className="absolute top-0 right-0 mt-1 md:mr-1 flex flex-col items-center justify-center md:text-base text-xs">
                {alerts.map((alert, index) => (
                  alert.date.split('-')[2] === String(day) && alert.type === 'Payment' && alert.status === 'Unpaid' && (
                    <FaDollarSign key={index} className="text-red-500" />
                  )
                ))}
                {/* Add other alert icons here */}
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
