import React from 'react';
import '../styles/KeyStatistics.css';

const AMI = () => (
  <div className="ks-bg">
    <div className="ks-container">
      <h1 className="ks-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>AMI</h1>
      <div className="ks-table-wrapper">
        <table className="ks-table" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem' }}>DATE</th>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem' }}>TITLE</th>
            </tr>
          </thead>
        </table>
        <div className="ks-empty" style={{ textAlign: 'center', marginTop: '2rem', color: '#1a2f5a', fontWeight: 400 }}>
          No AMI Data
        </div>
      </div>
    </div>
  </div>
);

export default AMI; 