import * as React from 'react';
import { Calendar, defaultCalendarStrings, ICalendarStrings } from '@fluentui/react';

export interface ICalendarProps {
    showGoToToday : boolean;
}

export const MyCalendar: React.FC<ICalendarProps> = ({
    showGoToToday,
    
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  return (
    <div style={{ height: '360px' }}>
      <div>Selected date: {selectedDate?.toLocaleString() || 'Not set'}</div>
      <Calendar
        showGoToToday={showGoToToday}
        onSelectDate={setSelectedDate}
        value={selectedDate}
        // Calendar uses English strings by default. For localized apps, you must override this prop.
        strings={defaultCalendarStrings}
      />
    </div>
  );
};
