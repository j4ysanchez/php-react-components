import React from 'react';

const DateTable = () => {
  const today = new Date();
  const day = today.toLocaleString('default', { weekday: 'long' });
  const date = today.toLocaleDateString();

  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{day}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DateTable;