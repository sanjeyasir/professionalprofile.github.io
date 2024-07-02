import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DonutChart = ({ percentage }) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: '#4caf50',
          textColor: '#4caf50',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export {DonutChart};
