import React from 'react';
import '../styles/KeyStatistics.css';

const tenders = [
    {
        title: 'INVITATION FOR BIDS PID(H) 452/24 (THE NEWS)',
        name: 'SEPCO_1749708935_WhatsApp Image 2025-06-12 at 5.29.49 AM452.jpeg',
        nameLink: 'SEPCO_1749708935_WhatsApp Image 2025-06-12 at 5.29.49 AM452.jpeg',
        date: '12-06-2025',
        time: '11:15 AM',
        closing: '29-07-2025',
    },
    {
        title: 'INVITATION FOR BID (PID-H-433/24) PD GSC SEPCO SUKKUR',
        name: 'SEPCO_1747817045_INVITATION FOR BID (PID-H-433-24) PD GSC SEPCO SUKKUR.jpeg',
        nameLink: 'SEPCO_1747817045_INVITATION FOR BID (PID-H-433-24) PD GSC SEPCO SUKKUR.jpeg',
        date: '21-05-2025',
        time: '01:44 PM',
        closing: '09-06-2025',
    },
    {
        title: 'INVITATION FOR BID PID(H)433/24',
        name: 'SEPCO_1747814496_WhatsApp Image 2025-05-21 at 12.52.08 PM.jpeg',
        nameLink: 'SEPCO_1747814496_WhatsApp Image 2025-05-21 at 12.52.08 PM.jpeg',
        date: '21-05-2025',
        time: '01:01 PM',
        closing: '09-06-2025',
    },
    {
        title: 'BID EVL (PID-H-422/2024) CE (DEV) PMU SEPCO SUKKUR',
        name: 'SEPCO_1747381359_INVITATION TO BID (PID-H-422-2024) CE(DEV) PMU SEPCO SUKKUR.jpeg',
        nameLink: 'SEPCO_1747381359_INVITATION TO BID (PID-H-422-2024) CE(DEV) PMU SEPCO SUKKUR.jpeg',
        date: '16-05-2025',
        time: '12:42 PM',
        closing: '14-07-2025',
    },
    {
        title: 'EVL REPORT (1289-12964) MANAGER (MM)',
        name: 'SEPCO_1747381286_EVL-REPORT (1289 to 1296.24) M(MM).pdf',
        nameLink: 'SEPCO_1747381286_EVL-REPORT (1289 to 1296.24) M(MM).pdf',
        date: '16-05-2025',
        time: '12:41 PM',
        closing: '09-05-2025',
    },
    {
        title: 'TENDER NO CWD-09(2024-25)',
        name: 'SEPCO_1746618110_WhatsApp Image 2025-05-07 at 4.20.48 PM.jpeg',
        nameLink: 'SEPCO_1746618110_WhatsApp Image 2025-05-07 at 4.20.48 PM.jpeg',
        date: '07-05-2025',
        time: '04:41 PM',
        closing: '02-06-2025',
    },
    {
        title: 'Tender # gsc-28/2024-25',
        name: 'SEPCO_1746528999_WhatsApp Image 2025-05-06 at 3.11.43 PM.jpeg',
        nameLink: 'SEPCO_1746528999_WhatsApp Image 2025-05-06 at 3.11.43 PM.jpeg',
        date: '06-05-2025',
        time: '03:56 PM',
        closing: '22-05-2025',
    },
    {
        title: 'SCRAP TENDER # 339/2024',
        name: 'SEPCO_1745906265_order.jpeg',
        nameLink: 'SEPCO_1745906265_order.jpeg',
        date: '29-04-2025',
        time: '10:57 AM',
        closing: '27-04-2025',
    },
];

const Tenders = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e6f0ff 0%, #f8fafc 100%)' }}>
        <div className="ks-bg">
            <div className="ks-container">
                <h1 className="ks-title">Tenders</h1>
                <div className="tenders-table-wrapper">
                    <table className="tenders-table">
                        <thead>
                            <tr>
                                <th>TITLE</th>
                                <th>NAME</th>
                                <th>DATE</th>
                                <th>TIME</th>
                                <th>CLOSING</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tenders.map((tender, idx) => (
                                <tr key={idx}>
                                    <td>{tender.title}</td>
                                    <td><a href={tender.nameLink} target="_blank" rel="noopener noreferrer">{tender.name}</a></td>
                                    <td>{tender.date}</td>
                                    <td>{tender.time}</td>
                                    <td>{tender.closing}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

export default Tenders; 