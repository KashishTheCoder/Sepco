import InfoCardSimple from './InfoCardSimple';
import { FaBriefcase, FaBell } from "react-icons/fa";

const careersData = [
  { title: "C-LEVEL JOBS", date: "Closing Date: 11-06-2025", image: "/assets/clevel_jobs.jpeg" },
  { title: "JUNIOR ENGINEER AND ASSISTANT MANAGER (COMMERCIAL)REVENUE OF...", date: "Closing Date: 20-05-2025" },
  { title: "PAID INTERNSHIP PROGRAM FOR FINANCIAL YEAR 2024-25 FOR STUD...", date: "Closing Date: 28-02-2025" },
  { title: "Job Description: Company Secretary", date: "Closing Date: 11-02-2025" },
  { title: "Job Description: Chief Legal Officer (CLO)", date: "Closing Date: 11-02-2025" }
];

const ordersData = [
  { title: "SCRAP TENDER # 339/2024" },
  { title: "PROMOTION OF UPPER TECHNICAL SUB-ORDINATE STAFF (LS-I) TO JUNIOR ENGINEER" },
  { title: "PROMOTION FROM SENIOR CLERK / UDC TO ASSISTANT (BPS-11 TO BPS-15)" },
  { title: "PROMOTION SE TO CHIEF ENGINEER (BPS-20) MR AIJAZ ALI CHANNA" },
  { title: "PROMOTION SE TO CHIEF ENGINEER (BPS-20) MR MUSHTAQUE AHMAD A..." }
];

<InfoCardSimple
  title="Careers"
  seeMoreLink="/careers"
  items={careersData}
  highlightIndex={0}
  icon={<FaBriefcase />}
/>

function HomePageCards() {
  return (
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
      <InfoCardSimple
        title="Careers"
        seeMoreLink="/careers"
        items={careersData}
        highlightIndex={0}
        icon={<FaBriefcase />}
      />
      <InfoCardSimple
        title="Orders & Notifications"
        seeMoreLink="/orders"
        items={ordersData}
        highlightIndex={0}
        icon={<FaBell />}
      />
    </div>
  );
}

export default HomePageCards;