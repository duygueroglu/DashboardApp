import React from 'react'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Agenda, Day, DragAndDrop, Inject, ScheduleComponent, ViewsDirective, ViewDirective, Week, WorkWeek, Month, Resize } from '@syncfusion/ej2-react-schedule';

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };
  return (
    <div>Calendar</div>
  )
}

export default Calendar
