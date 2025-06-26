import React from 'react';
import '../styles/KeyStatistics.css';

const Defaulters = () => (
  <div className="ks-bg">
    <div className="ks-container">
      <h1 className="ks-title">Defaulters</h1>
      <div className="ks-table-wrapper">
        <table className="ks-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem' }}>TITLE</th>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem' }}>NAME</th>
              <th style={{ textAlign: 'center', padding: '0.85rem 0.7rem' }}>DATE</th>
              <th style={{ textAlign: 'center', padding: '0.85rem 0.7rem' }}>TIME</th>
            </tr>
          </thead>
        </table>
        <div className="ks-empty">No defaulters</div>
      </div>
    </div>
  </div>
);

export default Defaulters; 