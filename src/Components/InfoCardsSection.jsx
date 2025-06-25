import { FaNewspaper, FaFileContract, FaExclamationTriangle } from "react-icons/fa";
import "./InfoCardsSection.css";

// Example data arrays (replace with your real data)
const newsData = [
  { title: "C-LEVEL JOBS", date: "25-05-2025 02:57 PM", link: "#", image: "/news1.png" },
  { title: "C-LEVEL CAREER OPPORTUNITY IN SEPCO", date: "27-01-2025 12:40 PM", link: "#", image: "/news2.png" },
  { title: "Application for suggestion", date: "29-10-2024 10:22 AM", link: "#", image: "/news3.png" },
  { title: "CORRIGENDUM", date: "14-10-2024 02:42 PM", link: "#", image: "/news4.png" },
  // ...add all your news items here
];

const tendersData = [
  { title: "INVITATION FOR BIDS PID(H) 452/24 (THE NEWS)", date: "Closing: 29-07-2025", link: "#" },
  { title: "INVITATION FOR BID (PID-H-433/24) PD GSC SEPCO SUKKUR", date: "Closing: 09-06-2025", link: "#" },
  { title: "INVITATION FOR BID PID(H)433/24", date: "Closing: 09-06-2025", link: "#" },
  // ...add all your tenders here
];

const firsData = []; // or your FIRs data

const InfoCard = ({ icon, title, items, seeMoreLink, emptyText, color, accent }) => (
  <div className="info-card" style={{ borderTop: `4px solid ${accent}` }}>
    <div className="info-card-header" style={{ background: color }}>
      <span className="info-card-icon">{icon}</span>
      <span className="info-card-title">{title}</span>
      <a href={seeMoreLink} className="info-card-more">See more</a>
    </div>
    <div className="info-card-body">
      {items.length === 0 ? (
        <div className="info-card-empty">{emptyText}</div>
      ) : (
        <ul>
          {items.map((item, idx) => (
            <li key={idx} className="info-card-item">
              {item.image && <img src={item.image} alt="" className="info-card-thumb" />}
              <div>
                <a href={item.link} className="info-card-link">{item.title}</a>
                <div className="info-card-date">{item.date}</div>
                {item.extra && <div className="info-card-extra">{item.extra}</div>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default function InfoCardsSection() {
  return (
    <div className="info-cards-section">
      <InfoCard
        icon={<FaNewspaper />}
        title="Latest News"
        color="#0B1E3F"
        accent="#FFD600"
        seeMoreLink="/news"
        items={newsData}
        emptyText="No news found"
      />
      <InfoCard
        icon={<FaFileContract />}
        title="Tenders"
        color="#FFD600"
        accent="#0B1E3F"
        seeMoreLink="/tenders"
        items={tendersData}
        emptyText="No tenders found"
      />
      <InfoCard
        icon={<FaExclamationTriangle />}
        title="Theft FIRs"
        color="#0B1E3F"
        accent="#FFD600"
        seeMoreLink="/firs"
        items={firsData}
        emptyText="No FIRs found"
      />
    </div>
  );
}