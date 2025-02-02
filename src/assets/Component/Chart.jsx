import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Dashboard = ({ tasks }) => {
  const events = tasks.map(task => ({
    title: task.title,
    start: new Date(task.startDate),
    end: new Date(task.endDate),
  }));

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Dashboard;