import React from 'react';
import '../styles/KeyStatistics.css';
import financialStatement2020 from '../assets/SEPCO_1686290689_Financial Statement 2020.pdf';

const reports = [
  {
    title: 'Financial Statement 2020',
    name: 'SEPCO_1686290689_Financial Statement 2020.pdf',
    url: financialStatement2020,
    date: '09-06-2023',
    time: '11:04 AM',
  },
];

const cellStyleLeft = { textAlign: 'left', padding: '0.85rem 0.7rem', verticalAlign: 'middle', fontSize: '1.08rem', minHeight: '48px', color: '#222' };
const cellStyleCenter = { textAlign: 'center', padding: '0.85rem 0.7rem', verticalAlign: 'middle', fontSize: '1.08rem', minHeight: '48px', color: '#222' };

const Reports = () => (
  <div className="ks-bg">
    <div className="ks-container">
      <h1 className="ks-title">Reports</h1>
      <div className="ks-table-wrapper">
        <table className="ks-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem', color: '#607080' }}>TITLE</th>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem', color: '#607080' }}>NAME</th>
              <th style={{ textAlign: 'center', padding: '0.85rem 0.7rem', color: '#607080' }}>DATE</th>
              <th style={{ textAlign: 'center', padding: '0.85rem 0.7rem', color: '#607080' }}>TIME</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr key={idx} style={{ minHeight: '48px' }}>
                <td style={cellStyleLeft}>{report.title}</td>
                <td style={cellStyleLeft}>
                  <a
                    href={report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={{ color: '#2471c8', textDecoration: 'underline', wordBreak: 'break-all', display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    {report.name}
                  </a>
                </td>
                <td style={cellStyleCenter}>{report.date}</td>
                <td style={cellStyleCenter}>{report.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Reports; 