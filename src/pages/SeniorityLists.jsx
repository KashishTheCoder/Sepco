import React from 'react';
import '../../src/styles/KeyStatistics.css';

// No files from the screenshot exist in src/assets, so all links will be plain text for now
const seniorityData = [
  { title: 'REVISED SENIORITY LIST OF UPPER TECH SUB-ORDINATE STAFF (DAE)AS ON 05.01.2024', name: 'SEPCO_1705487489_CamScanner 01-17-2024 15.15.pdf', file: null, date: '17-01-2024', time: '03:31 PM' },
  { title: 'REVISED SENIORITY LIST OF UPPER TECH SUB-ORDINATE STAFF (B.E) GRADUATE AS ON 05.01.2024', name: 'SEPCO_1705487673_CamScanner 01-17-2024 15.25.pdf', file: null, date: '17-01-2024', time: '03:34 PM' },
  { title: 'REVISED SENIORITY OF LINE SUPRITENDENT GRADE-II (BPS-14)OPERATION / CONSTRUCTION SIDE AS ON 10.01.2024', name: 'SEPCO_1705490128_CamScanner 01-17-2024 16.03.pdf', file: null, date: '17-01-2024', time: '04:15 PM' },
  { title: 'REVISED SENIORITY OF LIST OF METER SUPERVISOR GRADE-II (BPS-11) AS ON 11.01.2024', name: 'SEPCO_1705490353_CamScanner 01-17-2024 16.11.pdf', file: null, date: '17-01-2024', time: '04:19 PM' },
  { title: 'REVISED SENIORITY LIAST OF METER SUPERVISOR GRADE-I (BPS-14) AS ON 11-01-2024', name: 'SEPCO_1706077780_New Doc 01-24-2024 11.16.pdf', file: null, date: '24-01-2024', time: '11:29 AM' },
  { title: 'REVISED SENIORITY LIST OF LINEMAN GRADE-I (NON-MATRICULATE / ILLITRATE) AS ON 11-01-202', name: 'SEPCO_1706077948_New Doc 01-24-2024 11.23.pdf', file: null, date: '24-01-2024', time: '11:32 AM' },
  { title: 'REVISED SENIORITY LIST OF LINEMAN GRADE-I (MATRICULATE /) AS ON 11-01-202', name: 'SEPCO_1706078535_New Doc 01-24-2024 11.25.pdf', file: null, date: '24-01-2024', time: '11:42 AM' },
  { title: 'REVISED SENIORITY LIST OF METER READERs (BPS-09)IN REWSPECT OF SEPCO SUKKUR AS ON 11.01.2024', name: 'SEPCO_1706525317_New Doc 01-24-2024 11.35_compressed.pdf', file: null, date: '29-01-2024', time: '03:48 PM' },
  { title: 'Seniority list of Fitter (Bps-09) as on 31-01-2024', name: 'SEPCO_1706869728_Seniority list fitter grade-I GSO (BPS-11) AS ON 31-01-2024.pdf', file: null, date: '02-02-2024', time: '03:28 PM' },
  { title: 'Seniority list of Realy Mechanic (BPS-09) as on 31-01-2024', name: 'SEPCO_1706869792_SENIORITY LIST OF REALY MECHANIC (BPS-09) SIDE AS ON 31-01-2024.pdf', file: null, date: '02-02-2024', time: '03:29 PM' },
  { title: 'Revised Seniority list of Stenographer Grade-II (BPS-14)', name: 'SEPCO_1718178143_Revised Seniority of Stenogra-II BPS-14 .pdf', file: null, date: '12-06-2024', time: '12:42 PM' },
  { title: 'Revised Seniority list of Audit Assistant (BPS-14)', name: 'SEPCO_1718178207_Revised Seniority of Audit Assistant BPS-15.pdf', file: null, date: '12-06-2024', time: '12:43 PM' },
  { title: 'REVISED SENIORITY LIST OF ELECTRIC HELPER (M&T)', name: 'SEPCO_1725348119_Revised Seniority List of Electric Helper (M&T) as on 23-08-2024.pdf', file: null, date: '03-09-2024', time: '12:22 PM' },
  { title: 'Revised Seniority List of Audit Officer BPS-16 as on 02.09.2024.', name: 'SEPCO_1726642150_Revised Seniority List of Audit Officer BPS-16 as on 02.09.2024..pdf', file: null, date: '18-09-2024', time: '11:49 AM' },
  { title: 'Revised Seniority List of Fitter-II as on 23.02.2024', name: 'SEPCO_1726642168_Revised Seniority List of Fitter-II as on 23.02.2024.pdf', file: null, date: '18-09-2024', time: '11:49 AM' },
  { title: 'Tentative Seniority List of Junior Clerk as on 22.08.2024', name: 'SEPCO_1726642187_Tentative Seniority List of Junior Clerk as on 22.08.2024.pdf', file: null, date: '18-09-2024', time: '11:49 AM' },
  { title: 'Tentative Seniority List of Junior Clerk LDC as on 22.02.2024', name: 'SEPCO_1726642204_Tentative Seniority List of Junior Clerk LDC as on 22.02.2024.pdf', file: null, date: '18-09-2024', time: '11:50 AM' },
  { title: 'Tentative Seniority List of Line Sup. Grade-II BPS-14 as on 22.08.2024', name: 'SEPCO_1726642216_Tentative Seniority List of Line Sup. Grade-II BPS-14 as on 22.08.2024.pdf', file: null, date: '18-09-2024', time: '11:50 AM' },
  { title: 'Tentative Seniority List of Meter Reader BPS-09 as on 30.08.2024', name: 'SEPCO_1726642269_Tentative Seniority List of Meter Reader BPS-09 as on 30.08.2024.pdf', file: null, date: '18-09-2024', time: '11:51 AM' },
  { title: 'SENIORITY LIST OF ALM DIPLOMA HOLDER IN ASSOCIATE ENGINEERING', name: 'SEPCO_1740119501_SENIORITY LIST OF ALM DIPLOMA HOLDER IN ASSOCIATE ENGINEERING.pdf', file: null, date: '21-02-2025', time: '11:31 AM' },
  { title: 'TENTATIVE SENIORITY LIST LINEMAN GRADE-I (LM-I) DIPLOMA HOLDER', name: 'SEPCO_1740478078_TENTATIVE SENIORITY LIST OF LINEMAN GRADE-I (LM-I) DIPLOMA HOLDER IN ASSOCIATE ENGINEERING.pdf', file: null, date: '25-02-2025', time: '03:07 PM' },
  { title: 'TENTATIVE SENIORITY LIST OF LINEMAN GRADE-II (LM-II) DIPLOMA HOLDER', name: 'SEPCO_1740478149_TENTATIVE SENIORITY LIST OF LINEMAN GRADE-II(LM-II) DIPLOMA HOLDER IN ACCOCIATE ENGINEERING.pdf', file: null, date: '25-02-2025', time: '03:09 PM' },
  { title: 'REVISED SENIORITY LIST OF ASSISTANTHEAD CLERK IN RESPECT OF SEPCO SUKKUR AS ON 22.04.2025', name: 'SEPCO_1745906088_REVISED SENIORITY LIST OF ASSISTANTHEAD CLERK IN RESPECT OF SEPCO SUKKUR AS ON 22.04.2025.pdf', file: null, date: '29-04-2025', time: '10:54 AM' },
  { title: 'REVISED SENIORITY LIST METER SUPERISOR GRADE-II', name: 'SEPCO_1747381423_SENIORITY METER SUPERVISOR.pdf', file: null, date: '16-05-2025', time: '12:43 PM' },
  { title: 'PROMOTION FROM JUNIOR CLERK TO AUDIT ASSISTANT', name: 'SEPCO_1747808228_PROMOTION FROM JUNIOR CLERK TO AUDIT ASSISTANT.pdf', file: null, date: '21-05-2025', time: '11:17 AM' },
  { title: 'SENIORITY LIST OF CHIEF ENGINEERS', name: 'SEPCO_1747808243_SENIORITY LIST OF CHIEF ENGINEERS.pdf', file: null, date: '21-05-2025', time: '11:17 AM' },
  { title: 'SENIORITY LIST OF SUPERITENDING ENGINEERS', name: 'SEPCO_1747808259_SENIORITY LIST OF SUPERITENDING ENGINEERS.pdf', file: null, date: '21-05-2025', time: '11:17 AM' },
];

const SeniorityLists = () => (
  <div className="ks-bg">
    <div className="ks-container">
      <div className="ks-title">Seniority Lists</div>
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
            {seniorityData.map((doc, idx) => (
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

export default SeniorityLists; 