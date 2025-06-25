import { FaNewspaper, FaFileContract, FaExclamationTriangle } from "react-icons/fa";
import "./InfoCardsSection.css";
import news1Image from "../assets/news1.jpeg";
import news2Image from "../assets/news2.jpg";
import news3Image from "../assets/news3.jpeg";
import news4Image from "../assets/news4.jpeg";
import news5Image from "../assets/news5.jpg";
import tender1Image from "../assets/tender1.jpeg";
import tender2Image from "../assets/tender2.jpeg";
import tender3Image from "../assets/tender3.jpeg";
import tender4Image from "../assets/tender4.jpeg";
import evlReportPdf from "../assets/evl-report.pdf";

// Example data arrays (replace with your real data)
const newsData = [
  { title: "C-LEVEL JOBS", date: "25-05-2025 02:57 PM", link: "#", image: news1Image },
  { title: "C-LEVEL CAREER OPPORTUNITY IN SEPCO", date: "27-01-2025 12:40 PM", link: "#", image: news2Image },
  { title: "Application for suggestion", date: "29-10-2024 10:22 AM", link: "#", image: news3Image },
  { title: "CORRIGENDUM", date: "14-10-2024 02:42 PM", link: "#", image: news4Image },
  { title: "Declaration form for the post of CEO SEPCO", date: "13-10-2024 10:15 PM", link: "#", image: news5Image },
];

const tendersData = [
  {
    title: "INVITATION FOR BIDS PID(H) 452/24 (THE NEWS)",
    document: {
      name: "SEPCO_1749708935_WhatsApp Image 2025-06-12 at 5.29.49 AM452.jpeg",
      url: tender1Image
    },
    date: "Closing Date: 29-07-2025"
  },
  {
    title: "INVITATION FOR BID (PID-H-433/24) PD GSC SEPCO SUKKUR",
    document: {
      name: "SEPCO_1747817045_INVITATION FOR BID (PID-H-433-24) PD GSC SE.jpeg",
      url: tender2Image
    },
    date: "Closing Date: 09-06-2025"
  },
  {
    title: "INVITATION FOR BID PID(H)433/24",
    document: {
      name: "SEPCO_1747814496_WhatsApp Image 2025-05-21 at 12.52.08 PM.jpeg",
      url: tender3Image
    },
    date: "Closing Date: 09-06-2025"
  },
  {
    title: "BID EVL (PID-H-422/2024) CE (DEV) PMU SEPCO SUKKUR",
    document: {
      name: "SEPCO_1747381359_INVITATION TO BID (PID-H-422-2024) CE(DEV).jpeg",
      url: tender4Image
    },
    date: "Closing Date: 14-07-2025"
  },
  {
    title: "EVL REPORT (1289-12964) MANAGER (MM)",
    document: {
      name: "SEPCO_1747381286_EVL-REPORT (1289 to 1296.24) M(MM).pdf",
      url: evlReportPdf
    },
    date: "Closing Date: 09-05-2025"
  }
];

const firsData = [];

const InfoCard = ({ icon, title, items, seeMoreLink, emptyText, color, accent, isTender }) => (
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
              {isTender ? (
                <div>
                  <a
                    href={item.document.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-card-tender-title"
                    title="Click to download document"
                    download
                  >
                    {item.title}
                  </a>
                  <a
                    href={item.document.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-card-link"
                    title="Click to download document"
                    download
                    style={{ color: '#0B1E3F', fontWeight: 600 }}
                  >
                    {item.document.name}
                  </a>
                  <div className="info-card-date">{item.date}</div>
                </div>
              ) : (
                <>
                  {item.image && (
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-card-thumb-link"
                      title="Click to download"
                      download
                    >
                      <img src={item.image} alt="" className="info-card-thumb" />
                    </a>
                  )}
                  <div>
                    {item.image ? (
                      <a
                        href={item.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="info-card-link"
                        title="Click to download image"
                        download
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a href={item.link} className="info-card-link">{item.title}</a>
                    )}
                    <div className="info-card-date">{item.date}</div>
                    {item.extra && <div className="info-card-extra">{item.extra}</div>}
                  </div>
                </>
              )}
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
        color="#1a2f5a"
        accent="#FFD600"
        seeMoreLink="/tenders"
        items={tendersData}
        emptyText="No tenders found"
        isTender={true}
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