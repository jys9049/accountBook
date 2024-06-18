'use client';

import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import styles from './Calendar.module.scss';

const Calendar = () => {
  const [today, setToday] = useState(dayjs());
  const [date, setDate] = useState<string[]>([]);

  const handlePreMonth = () => {
    setToday(today.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setToday(today.add(1, 'month'));
  };

  useEffect(() => {
    const days = [];
    for (let i = 0; i < today.daysInMonth(); i++) {
      days.push(`${i + 1}`);
    }

    setDate(days);
  }, [today]);

  return (
    <div>
      <div className={styles.calendarCurrentDateContainer}>
        <button onClick={handlePreMonth} className={styles.calendarChangeBtn}>
          {'<'}
        </button>
        <p className={styles.calendarDateTitle}>{today.format('YYYY-MM')}</p>
        <button onClick={handleNextMonth} className={styles.calendarChangeBtn}>
          {'>'}
        </button>
      </div>
      <div className={styles.calendarGrid}>
        {date.map((day) => (
          <div key={day} className={styles.calendarContainer}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
