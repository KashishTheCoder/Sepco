import React from 'react';
import '../styles/KeyStatistics.css';

const KeyStatistics = () => (
  <div className="ks-bg">
    <div className="ks-container">
      <h1 className="ks-title">Key Statistics</h1>
      <div className="ks-table-wrapper">
        <table className="ks-table">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>NAME</th>
              <th>DATE</th>
              <th>TIME</th>
            </tr>
          </thead>
        </table>
        <div className="ks-empty">No Key Statistics</div>
      </div>
    </div>
  </div>
);

export default KeyStatistics; 