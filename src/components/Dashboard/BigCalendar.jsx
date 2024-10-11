// Import the necessary dependencies
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaWindowMinimize } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';


// Localizer to use moment.js for date handling
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const currentDate = new Date(); // Getting the current date

  return (
    <div className="relative bg-green-500 p-4 rounded-lg shadow-lg">
      {/* Header with Minimize and Close Icons */}
      <div className="flex justify-between items-center mb-2 text-white">
        <h2 className="text-left text-lg font-semibold">Calendar</h2>
        <div className="flex space-x-2">
          <FaWindowMinimize size={15} className="cursor-pointer" />
          <ImCross size={15} className="cursor-pointer" />
        </div>
      </div>

      {/* Calendar Component */}
      <div className="bg-[Green] text-white rounded-lg p-3 shadow">
        <Calendar 
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 180 }}
          defaultView="month"
          defaultDate={currentDate}
          views={['month']}
          popup
          dayPropGetter={(date) => {
            const isToday =
              moment(date).isSame(new Date(), 'day') && moment(date).isSame(new Date(), 'month');
            return {
              style: {

                backgroundColor: isToday ? '#34D399' : undefined, // Highlight the current day in green
                color: isToday ? '#34D399' : undefined,
              },
            };
          }}
        />
      </div>
    </div>
  );
};

export default BigCalendar;
