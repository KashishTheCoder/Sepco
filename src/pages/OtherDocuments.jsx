import React from 'react';
import '../../src/styles/KeyStatistics.css';

// No files from the screenshot exist in src/assets, so all links will be plain text for now
const docsData = [
  { title: 'Consumer Service Manual', name: 'SEPCO_1698663232_Consumer Service Manual.pdf', file: null, date: '30-10-2023', time: '03:53 PM' },
  { title: 'SOE,s Act-2023', name: 'SEPCO_1714988131_SOEs Act 2023.pdf', file: null, date: '06-05-2024', time: '02:35 PM' },
  { title: 'Consumer Service Manual (Amendment)', name: 'SEPCO_1721637237_AMENDMENT IN CONSUMER SERVICE MANUAL (CSM)-2021.jpeg', file: null, date: '22-07-2024', time: '01:33 PM' },
  { title: 'QUOTATION FOR REPAIR VEHICLE NO-BUS-724', name: 'SEPCO_1728374662_INVITATION QUOTATION FOR REPAIR OF VEHICLE NO-BUS-724.pdf', file: null, date: '08-10-2024', time: '01:04 PM' },
  { title: 'QUOTATION FOR REPAIR VEHICLE NO-BEQ-721', name: 'SEPCO_1728374717_INVITATION QUOTATION FOR REPAIR VEHICLE NO-BEQ-721.pdf', file: null, date: '08-10-2024', time: '01:05 PM' },
  { title: 'QUOTATION FOR REPAIR VEHICLE NO-GP-7544', name: 'SEPCO_1728374778_INVITATION QUOTATION FOR REPAIR OF VEHICLE NO-GP-7544.pdf', file: null, date: '08-10-2024', time: '01:06 PM' },
  { title: 'PUBLICATION TO HIRE THE SERVICES OF CONSULTING FIRMS', name: 'SEPCO_1728374838_PUBLICATION TO HIRE THE SERVICES OF CONSULTING FIRMS.pdf', file: null, date: '08-10-2024', time: '01:07 PM' },
  { title: 'PROCUREMENT PLAN DISTRIBUTION AND T&P 2024-25 (MM SEPCO)', name: 'SEPCO_1729141432_PROCUREMENT PLAN DISTRIBUTION & LINE T&P 2024-25 (MM SEPCO).pdf', file: null, date: '17-10-2024', time: '10:03 AM' },
];

const OtherDocuments = () => (
  <div className="ks-bg">
    <div className="ks-container">
      <div className="ks-title">Other Documents</div>
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
          <tbody>
            {docsData.map((doc, idx) => (
              <tr key={idx}>
                <td>{doc.title}</td>
                <td>{doc.file ? <a href={doc.file} target="_blank" rel="noopener noreferrer">{doc.name}</a> : <span>{doc.name}</span>}</td>
                <td>{doc.date}</td>
                <td>{doc.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default OtherDocuments; 