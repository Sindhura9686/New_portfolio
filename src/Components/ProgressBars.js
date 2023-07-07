import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBars = () => {
    const progressData = [
      { id: 1, percentage: 65 },
      { id: 2, percentage: 75 },
      { id: 3, percentage: 80 },
      { id: 4, percentage: 50},
    ];
  
    return (
      <div>
        {progressData.map(item => (
          <div key={item.id}>
            <CircularProgressbar
              value={item.percentage}
              text={`${item.percentage}%`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${item.percentage / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
        ))}
      </div>
    );
  };
  