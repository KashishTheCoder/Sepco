import React from 'react';
import '../styles/KeyStatistics.css';
// For production, move files to public/assets and use '/assets/filename' as the URL

const careers = [
  {
    title: 'SOEs ACT 2023',
    attachment: { name: 'SEPCO_1715063683_SOEs Act 2023.pdf', url: '/src/assets/SEPCO_1715063683_SOEs Act 2023.pdf' },
    date: '07-05-2024', time: '11:34 AM', closing: '07-05-2024',
  },
  {
    title: 'Advertisement for the post of CEO SEPCO',
    attachment: { name: 'SEPCO_1728839316_advertisement for the post of CEO SEPCO.jpg', url: '/src/assets/SEPCO_1728839316_advertisement for the post of CEO SEPCO.jpg' },
    date: '13-10-2024', time: '10:08 PM', closing: '28-10-2024',
  },
  {
    title: 'Application form for the post of CEO SEPCO',
    attachment: { name: 'SEPCO_1728839398_Application Form for the post of CEO SEPCO page-0001.jpg', url: '/src/assets/SEPCO_1728839398_Application Form for the post of CEO SEPCO page-0001.jpg' },
    date: '13-10-2024', time: '10:09 PM', closing: '28-10-2024',
  },
  {
    title: 'Application form for the post of CEO SEPCO',
    attachment: { name: 'SEPCO_1728839449_Application Form for the post of CEO SEPCO page-0002.jpg', url: '/src/assets/SEPCO_1728839449_Application Form for the post of CEO SEPCO page-0002.jpg' },
    date: '13-10-2024', time: '10:10 PM', closing: '28-10-2024',
  },
  {
    title: 'Declaration form for the post of CEO SEPCO',
    attachment: { name: 'SEPCO_1728839507_Declaration form for the post of CEO SEPCO.jpg', url: '/src/assets/SEPCO_1728839507_Declaration form for the post of CEO SEPCO.jpg' },
    date: '13-10-2024', time: '10:11 PM', closing: '28-10-2024',
  },
  {
    title: 'CORRIGENDUM',
    attachment: { name: 'SEPCO_1728899173_CORRIGENDUM.jpeg', url: '/src/assets/SEPCO_1728899173_CORRIGENDUM.jpeg' },
    date: '14-10-2024', time: '02:46 PM', closing: '28-10-2024',
  },
  {
    title: 'C-Level Appointments',
    attachment: { name: 'SEPCO_1737813316_PID H 266 24 35x4 copy.pdf', url: '/src/assets/SEPCO_1737813316_PID H 266 24 35x4 copy.pdf' },
    date: '25-01-2025', time: '06:55 PM', closing: '11-02-2025',
  },
  {
    title: 'C_Level_Appointment Guidlelines 2024',
    attachment: { name: 'SEPCO_1737961321_C_Level_Appointment Guidlelines 2024.pdf', url: '/src/assets/SEPCO_1737961321_C_Level_Appointment Guidlelines 2024.pdf' },
    date: '27-01-2025', time: '12:02 PM', closing: '11-02-2025',
  },
  {
    title: 'SOEs_Act_2023',
    attachment: { name: 'SEPCO_1737961344_SOEs_Act_2023.pdf', url: '/src/assets/SEPCO_1737961344_SOEs_Act_2023.pdf' },
    date: '27-01-2025', time: '12:02 PM', closing: '11-02-2025',
  },
  {
    title: 'SOEs_Policy_Report_2023',
    attachment: { name: 'SEPCO_1737961393_SOEs_Policy_Report_2023.pdf', url: '/src/assets/SEPCO_1737961393_SOEs_Policy_Report_2023.pdf' },
    date: '27-01-2025', time: '12:03 PM', closing: '11-02-2025',
  },
  {
    title: 'Job Description: Chief Internal Audit Officer (CIAO)',
    attachment: { name: 'SEPCO_1737961858_JD CIAO.pdf', url: '/src/assets/SEPCO_1737961858_JD CIAO.pdf' },
    date: '27-01-2025', time: '12:10 PM', closing: '11-02-2025',
  },
  {
    title: 'Job Description: Chief Information Technology Officer (CITO)',
    attachment: { name: 'SEPCO_1737961922_JD CICTO.pdf', url: '/src/assets/SEPCO_1737961922_JD CICTO.pdf' },
    date: '27-01-2025', time: '12:12 PM', closing: '11-02-2025',
  },
  {
    title: 'Job Description: Chief Legal Officer (CLO)',
    attachment: { name: 'SEPCO_1737961975_JD CLO.pdf', url: '/src/assets/SEPCO_1737961975_JD CLO.pdf' },
    date: '27-01-2025', time: '12:12 PM', closing: '11-02-2025',
  },
  {
    title: 'Job Description: Company Secretary',
    attachment: { name: 'SEPCO_1737962031_JD CS.pdf', url: '/src/assets/SEPCO_1737962031_JD CS.pdf' },
    date: '27-01-2025', time: '12:13 PM', closing: '11-02-2025',
  },
  {
    title: 'PAID INTERNESHIP PROGRAM FOR FINANCIAL YEAR 2024-25 FOR STUDENTS',
    attachment: { name: 'SEPCO_1739350677_CAREER.jpeg', url: '/src/assets/SEPCO_1739350677_CAREER.jpeg' },
    date: '12-02-2025', time: '01:57 PM', closing: '28-02-2025',
  },
  {
    title: 'JUNIOR ENGINEER AND ASSISTANT MANAGER (COMMERCIAL)REVENUE OFFIVER',
    attachment: { name: 'SEPCO_1745157653_carrer.jpeg', url: '/src/assets/SEPCO_1745157653_carrer.jpeg' },
    date: '20-04-2025', time: '07:00 PM', closing: '20-05-2025',
  },
  {
    title: 'C-LEVEL JOBS',
    attachment: { name: 'SEPCO_1748163577_c level jobs.jpeg', url: '/src/assets/SEPCO_1748163577_c level jobs.jpeg' },
    date: '25-05-2025', time: '01:59 PM', closing: '11-06-2025',
  },
];

const cellStyleLeft = { textAlign: 'left', padding: '0.85rem 0.7rem', verticalAlign: 'middle', fontSize: '1.08rem', minHeight: '48px', color: '#222' };
const cellStyleCenter = { textAlign: 'center', padding: '0.85rem 0.7rem', verticalAlign: 'middle', fontSize: '1.08rem', minHeight: '48px', color: '#222' };
const nowrapStyle = { whiteSpace: 'nowrap', textAlign: 'center', padding: '0.85rem 0.7rem', verticalAlign: 'middle', fontSize: '1.08rem', minHeight: '48px', color: '#222' };

const Careers = () => (
  <div className="ks-bg">
    <div className="ks-container" style={{ position: 'relative', maxWidth: 1100 }}>
      <h1 className="ks-title" style={{ marginBottom: 0 }}>Careers</h1>
      <a
        href="#"
        style={{
          position: 'absolute',
          top: 24,
          right: 0,
          background: 'linear-gradient(90deg, #43c465 0%, #1e9c3c 100%)',
          color: '#fff',
          padding: '0.7rem 1.6rem',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '1.08rem',
          textDecoration: 'none',
          boxShadow: '0 2px 8px #e3e8ee',
          transition: 'background 0.18s',
          letterSpacing: '0.5px',
          zIndex: 2,
        }}
      >
        Apply for Internship Post Online
      </a>
      <div className="ks-table-wrapper" style={{ marginTop: 32 }}>
        <table className="ks-table" style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px #e3e8ee' }}>
          <thead>
            <tr style={{ background: '#f3f8fd' }}>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem', color: '#607080', fontWeight: 700 }}>JOB TITLE</th>
              <th style={{ textAlign: 'left', padding: '0.85rem 0.7rem', color: '#607080', fontWeight: 700 }}>ATTACHMENT</th>
              <th style={{ ...nowrapStyle, color: '#607080', fontWeight: 700 }}>DATE</th>
              <th style={{ ...nowrapStyle, color: '#607080', fontWeight: 700 }}>TIME</th>
              <th style={{ ...nowrapStyle, color: '#607080', fontWeight: 700 }}>CLOSING</th>
            </tr>
          </thead>
          <tbody>
            {careers.map((job, idx) => (
              <tr key={idx} style={{ minHeight: '48px', transition: 'background 0.18s' }}>
                <td style={cellStyleLeft}>{job.title}</td>
                <td style={cellStyleLeft}>
                  <a
                    href={job.attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    style={{ color: '#2471c8', textDecoration: 'underline', wordBreak: 'break-all', display: 'inline-block', verticalAlign: 'middle', fontWeight: 600 }}
                  >
                    {job.attachment.name}
                  </a>
                </td>
                <td style={nowrapStyle}>{job.date}</td>
                <td style={nowrapStyle}>{job.time}</td>
                <td style={nowrapStyle}>{job.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Careers; 