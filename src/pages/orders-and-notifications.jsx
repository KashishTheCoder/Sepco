import React from 'react';
import '../../src/styles/KeyStatistics.css';

// Only import files that exist in src/assets
import file4 from '../assets/SEPCO_1686290689_Financial Statement 2020.pdf';
import file5 from '../assets/SEPCO_1737962031_JD CS.pdf';

const ordersData = [
  { title: 'Junior Clerks TSU BPS-09 to BPS-11', name: 'SEPCO_1686081725_Junior Clerks TSU BPS-09 to BPS-11.pdf', file: null, date: '07-06-2023', time: '01:02 AM' },
  { title: 'Promotion Stenographer Grade-II to APS', name: 'SEPCO_1686081760_Promotion Stenographer Grade-II to APS.pdf', file: null, date: '07-06-2023', time: '01:02 AM' },
  { title: 'Promotion of Electric Helper BPS-07 to Meter Mechanic BPS-09', name: 'SEPCO_1709286470_Promotion of Electric Helper (BPS-07) to Meter Mechanic (BPS-09).jpeg', file: null, date: '01-03-2024', time: '02:47 PM' },
  { title: 'Promotion of Electric Helper BPS-07 to Fitter-II BPS-09', name: 'SEPCO_1709286549_Prpmotion of Electric Helper(BPS-07) to Fitter-II (BPS-09).jpeg', file: null, date: '01-03-2024', time: '02:49 PM' },
  { title: 'Promotion of Asstt: Draftsman (BPS-13) to Div: Head Draftsman (BPS-14)', name: 'SEPCO_1709720805_Promotion of Asstt Draftman (BPS-13) to Div Head Draftman (BPS-14).pdf', file: null, date: '06-03-2024', time: '03:26 PM' },
  { title: 'Grievance Redressal Committee of SEPCO', name: 'SEPCO_1711521253_GRC LETER & FORMAT .pdf', file: null, date: '27-03-2024', time: '11:34 AM' },
  { title: 'promotion of sub-station operator Grade-II to Sub-station Operator Grade-II (BPS-14 to BPS-15)', name: 'SEPCO_1713171507_Promtion of sub-station operator grade-II to sub-station operator grade-I (bps-14 to bps-15).pdf', file: null, date: '15-04-2024', time: '01:58 PM' },
  { title: 'PROMTION OF FITTER BPS-11 TO ASSISTANT FOREMAN BPS-14', name: 'SEPCO_1713171567_Promotion of fitter bps-11 To Assistant foreman bps-14.pdf', file: null, date: '15-04-2024', time: '01:59 PM' },
  { title: 'TSU OF SENIOR CLERKS BPS-11 TO BPS-13', name: 'SEPCO_1714030325_TSU OF SENIOR CLERKS BPS-11 TO BPS-13.pdf', file: null, date: '25-04-2024', time: '12:32 PM' },
  { title: 'PROMOTION OF ASSISTANT/HC TO OFFICE SUPERINTENDENT BPS-16', name: 'SEPCO_1714030430_Promotion of office superintendent BPS_16.pdf', file: null, date: '25-04-2024', time: '12:33 PM' },
  { title: 'Promotion JC Commercial (Graduate) To Commercial Assistant (BPS-09 To BPS-15)', name: 'SEPCO_1714807505_Promotion of JC Commercial(Gfaduate) to Commercial Assistant (BPS-09 to BPS-15).pdf', file: null, date: '04-05-2024', time: '12:25 PM' },
  { title: 'TENDER No 1185/23 SCRAPPED (M.M)', name: 'SEPCO_1717255040_TENDER No 1185-23 SCRAPPED.jpeg', file: null, date: '01-06-2024', time: '08:17 PM' },
  { title: 'Result Notification Meter Reader to MS-II', name: 'SEPCO_1717671122_Result Notification Meter Reader to MS-II.pdf', file: null, date: '06-06-2024', time: '03:52 PM' },
  { title: 'Result Notification Junior Clerk to Senior Clerk', name: 'SEPCO_1717671191_Result Notification Junior Clerks to Senior Clerks.pdf', file: null, date: '06-06-2024', time: '03:53 PM' },
  { title: 'Promotion of upper Technical sub-ordinate staff B-Tech (Honors) To junior Engineer/SDO (BPS-17)', name: 'SEPCO_1721641812_Promotion of upper Technical sub-ordinate staff B-Tech (Honours) to LE-SDO (BPS-17).jpeg', file: null, date: '22-07-2024', time: '02:50 PM' },
  { title: 'Promotion of upper Technical Sub-ordinate staff (Diploma Holder) To Junior Engineer/SDO (BPS-17)', name: 'SEPCO_1721641941_Promotion of upper Technical sub-ordinate staff (Diploma Holder) To JE-SDO (BPS-17).jpeg', file: null, date: '22-07-2024', time: '02:52 PM' },
  { title: 'PROMOTION TRAINING LM-1 TO LS-II (T-500)', name: 'SEPCO_1721991993_CamScanner_07-26-2024_14.57-1[1].pdf', file: null, date: '26-07-2024', time: '04:06 PM' },
  { title: 'PROMOTION FRON SUB STATION ATTENDENT TO SUB-STATION OPERATOR', name: 'SEPCO_1721992041_CamScanner_07-26-2024_14.57-2[1].pdf', file: null, date: '26-07-2024', time: '04:07 PM' },
  { title: 'PROMOTION FROM LINEMAN GRADE-I (MATICULATION) TO LINE SUPERITENDENT', name: 'SEPCO_1721992128_CamScanner_07-26-2024_14.57-3[1].pdf', file: null, date: '26-07-2024', time: '04:08 PM' },
  { title: 'PROMOTION FROM LINE SUPRITENDENT GRADE-II TO LINE SUPRITENDENT', name: 'SEPCO_1721992184_CamScanner_07-26-2024_14.57-4[1].pdf', file: null, date: '26-07-2024', time: '04:09 PM' },
  { title: 'PROMOTION FROM FITTER-I (BPS-11) TO ASSISTANT FOREMAN GSO SIDE', name: 'SEPCO_1721992258_CamScanner_07-26-2024_14.57-5[1].pdf', file: null, date: '26-07-2024', time: '04:10 PM' },
  { title: 'PROMOTION FROM LINEMAN GRADE-I (MATRICULATE) TO LINE SUPERITENDENT', name: 'SEPCO_1721992325_CamScanner_07-26-2024_14.57-6[1].pdf', file: null, date: '26-07-2024', time: '04:12 PM' },
  { title: 'PROMOTION FROM LINEMAN GRADE-I (NON-MATRICULATE/ILLITRATE) TO LINEMAN SUPERITENDENT )', name: 'SEPCO_1721992390_CamScanner_07-26-2024_14.57-7[1].pdf', file: null, date: '26-07-2024', time: '04:13 PM' },
  { title: 'APPOINTED EMPLOYEES CHILDREN DECEASED QUOTA', name: 'SEPCO_1721992476_CamScanner_07-26-2024_14.57-8[1].pdf', file: null, date: '26-07-2024', time: '04:14 PM' },
  { title: 'APPOINTED EMPLOYEES CHILDREN DECEASED QUOTA', name: 'SEPCO_1722336436_WhatsApp Image 2024-07-30 at 3.34.29 PM.jpeg', file: null, date: '30-07-2024', time: '03:47 PM' },
  { title: 'REVISED SENIORITY LIST OF LINEMAN GRADE-I', name: 'SEPCO_1722336498_WhatsApp Image 2024-07-30 at 3.34.30 PM.jpeg', file: null, date: '30-07-2024', time: '03:48 PM' },
  { title: 'RESULT NOTIFICATION OF FITTER', name: 'SEPCO_1728374343_RESULT NOTIFICATION FITTER-II TO FITTER-I (GSO).pdf', file: null, date: '08-10-2024', time: '12:59 PM' },
  { title: 'Application for suggestion', name: 'SEPCO_1730179563_Application for Suggestion.pdf', file: null, date: '29-10-2024', time: '10:26 AM' },
  { title: 'PROMOTION FROM TRACER BPS-09 TO ASSISTANT DRAFTSMAN BPS-13', name: 'SEPCO_1730282915_PROMOTION FROM TRACER (BPS-09) TO ASSISTANT DRAFTSMAN (BPS-13).jpeg', file: null, date: '30-10-2024', time: '03:08 PM' },
  { title: 'NOTIFICATION TRAINING BILL DISTRIBUTOR TO METER READER', name: 'SEPCO_1733392640_NOTIFICATION PROMOTION TRAINING BILL-DISTRIBUTOR TO METER READER.pdf', file: null, date: '05-12-2024', time: '02:57 PM' },
  { title: 'RESULT NOTIFICATION OF ALM-II TO LM-II (T-200)', name: 'SEPCO_1734329185_RESULT NOTIFICATION ALM-II TO LM-II (T-200).jpeg', file: null, date: '16-12-2024', time: '11:06 AM' },
  { title: 'RESULT NOTIFICATION LM-II TO LM-I (07-WEEK)', name: 'SEPCO_1740740782_RESULT NOTIFICATION LM-II TO LM-I (07-WEEK).jpeg', file: null, date: '28-02-2025', time: '04:06 PM' },
  { title: 'NOTIFICATION PROMOTION TRAINING LM-I TO LS-II', name: 'SEPCO_1743053795_NOTIFICATION PROMOTION TRAINING LM-I TO LS-II.pdf', file: null, date: '27-03-2025', time: '10:36 AM' },
  { title: 'PROMOTION CE (BPS-20) TO GM (OP) BASHIR AHMAD SHAIKH', name: 'SEPCO_1744282648_PROMOTION CHIEF ENGINEER BPS-20 TO GENERAL MANAGER (OP) MR BASHIR AHMAD SHAIKH.jpeg', file: null, date: '10-04-2025', time: '03:57 PM' },
  { title: 'PROMOTION SE TO CHIEF ENGINEER (BPS-20) MR MIR AZHAR ALI TALPUR', name: 'SEPCO_1744282728_PROMOTION SE TO CHIEF ENGINEER (BPS-20) (MR MIR AZHAR ALI TALPUR).jpeg', file: null, date: '10-04-2025', time: '03:58 PM' },
  { title: 'PROMOTION SE TO CHIEF ENGINEER (BPS-20) MR MUSHTAQUE AHMAD ABBASI', name: 'SEPCO_1744282805_PROMOTION SE TO CHIEF ENGINEER(BPS-20) (MR MUSHTAQ AHMED ABBASI).jpeg', file: null, date: '10-04-2025', time: '04:00 PM' },
  { title: 'PROMOTION SE TO CHIEF ENGINEER (BPS-20) MR AIJAZ ALI CHANNA', name: 'SEPCO_1744282876_PROMOTION SE TO CHEIF ENG (BPS-20) (MR AIJAZ AHMED CHANNA).jpeg', file: null, date: '10-04-2025', time: '04:01 PM' },
  { title: 'PROMOTION FROM SENIOR CLERK / UDC TO ASSISTANT (BPS-11 TO BPS-15)', name: 'SEPCO_1745304519_OFFICE ORDER.jpeg', file: null, date: '22-04-2025', time: '11:48 AM' },
  { title: 'PROMOTION OF UPPER TECHNICAL SUB-ORDINATE STAFF (LS-I) TO JUNIOR ENGINEER / SDO (BPS-17)', name: 'SEPCO_1745304605_WhatsApp Image 2025-04-22 at 11.03.29 AM.jpeg', file: null, date: '22-04-2025', time: '11:50 AM' },
  { title: 'SCRAP TENDER # 339/2024', name: 'SEPCO_1745905896_order.jpeg', file: null, date: '29-04-2025', time: '10:51 AM' },
  { title: 'Financial Statement 2020', name: 'SEPCO_1686290689_Financial Statement 2020.pdf', file: file4, date: '2020', time: '' },
  { title: 'JD CS', name: 'SEPCO_1737962031_JD CS.pdf', file: file5, date: '2023', time: '' },
];

const OrdersAndNotifications = () => {
  return (
    <div className="ks-bg">
      <div className="ks-container">
        <div className="ks-title">Orders and Notifications</div>
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
              {ordersData.map((order, idx) => (
                <tr key={idx}>
                  <td>{order.title}</td>
                  <td>
                    {order.file ? (
                      <a href={order.file} target="_blank" rel="noopener noreferrer">
                        {order.name}
                      </a>
                    ) : (
                      <span>{order.name}</span>
                    )}
                  </td>
                  <td>{order.date}</td>
                  <td>{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersAndNotifications; 