import React from 'react';
import '../styles/Consumers.css';

const data = [
  { trf: 'DOM', active: 537722, disconnected: 124040, total: 661762 },
  { trf: 'COM', active: 89867, disconnected: 38547, total: 128414 },
  { trf: 'IND', active: 8582, disconnected: 5215, total: 13797 },
  { trf: 'TUBE WELS (AGRICUTURE)', active: 3409, disconnected: 5933, total: 9342 },
  { trf: 'OTHER', active: 12180, disconnected: 2256, total: 14436 },
];

const totals = data.reduce(
  (acc, row) => {
    acc.active += row.active;
    acc.disconnected += row.disconnected;
    acc.total += row.total;
    return acc;
  },
  { active: 0, disconnected: 0, total: 0 }
);

const Consumers = () => (
  <div className="consumers-bg">
    <div className="consumers-container">
      <h1 className="consumers-title">TARIFFWISE CONSUMERS 05-2025</h1>
      <div className="consumers-table-wrapper">
        <table className="consumers-table">
          <thead>
            <tr>
              <th>TRF</th>
              <th>ACTIVE</th>
              <th>DISCONNECTED</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.trf}>
                <td>{row.trf}</td>
                <td>{row.active.toLocaleString()}</td>
                <td>{row.disconnected.toLocaleString()}</td>
                <td>{row.total.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="consumers-total-row">
              <td>TOTAL</td>
              <td><b>{totals.active.toLocaleString()}</b></td>
              <td><b>{totals.disconnected.toLocaleString()}</b></td>
              <td><b>{totals.total.toLocaleString()}</b></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Consumers; 