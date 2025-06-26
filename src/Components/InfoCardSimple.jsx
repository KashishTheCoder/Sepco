import { FaBriefcase, FaBell } from "react-icons/fa";
import "./InfoCardSimple.css";

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

const InfoCardSimple = ({ title, seeMoreLink, items, highlightIndex = 0, icon }) => (
  <div className="info-card-simple wide">
    <div className="info-card-simple-header">
      {icon && <span className="info-card-simple-icon">{icon}</span>}
      <span>{title}</span>
      <a href={seeMoreLink} className="info-card-simple-more">see more</a>
    </div>
    <div className="info-card-simple-body" style={items.length < 3 ? {justifyContent: 'center'} : {}}>
      <ul>
        {items.map((item, idx) => (
          <li
            key={idx}
            className={idx === highlightIndex ? "info-card-simple-highlight" : ""}
            title={item.title}
          >
            <div>
              {item.image ? (
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="info-card-simple-title"
                >
                  {item.title}
                </a>
              ) : (
                <div className="info-card-simple-title">{item.title}</div>
              )}
              {item.date && (
                <div className="info-card-simple-date">{item.date}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export function HomePageCards() {
  return (
    <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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

export default InfoCardSimple;