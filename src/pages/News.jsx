import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/KeyStatistics.css';
import imgAd from '../assets/SEPCO_1728839620_advertisement for the post of CEO SEPCO.jpg';
import imgApp1 from '../assets/SEPCO_1728839672_Application Form for the post of CEO SEPCO  page-0001.jpg';
import imgApp2 from '../assets/SEPCO_1728839705_Application Form for the post of CEO SEPCO page-0002.jpg';
import imgNews5 from '../assets/news5.jpg';
import imgNews4 from '../assets/news4.jpeg';

// Example news data (replace with real data as needed)
const news = [
  {
    title: 'Advertisement for the post of CEO SEPCO',
    date: '13-10-2024 10:13 PM',
    image: imgAd,
    link: '',
  },
  {
    title: 'Application form for the post of CEO SEPCO',
    date: '13-10-2024 10:14 PM',
    image: imgApp1,
    link: '',
  },
  {
    title: 'Application form for the post of CEO SEPCO',
    date: '13-10-2024 10:15 PM',
    image: imgApp2,
    link: '#',
  },
  {
    title: 'Declaration form for the post of CEO SEPCO',
    date: '13-10-2024 10:15 PM',
    image: imgNews5,
    link: '',
  },
  {
    title: 'CORRIGENDUM',
    date: '14-10-2024 02:42 PM',
    image: imgNews4,
    link: '',
  },
  {
    title: 'Application for suggestion',
    date: '29-10-2024 10:22 AM',
    image: imgApp2,
    link: '',
  },
  {
    title: 'C-LEVEL CAREER OPPORTUNITY IN SEPCO',
    date: '27-01-2025 12:40 PM',
    image: imgApp1,
    link: '',
  },
  {
    title: 'C-LEVEL JOBS',
    date: '25-05-2025 02:57 PM',
    image: imgAd,
    link: '',
  },
];

const News = () => {
  const [hovered, setHovered] = useState(-1);
  return (
    <div className="ks-bg">
      <div className="ks-container" style={{ maxWidth: 900 }}>
        <h1 className="ks-title">News</h1>
        {/* Data and Statistics Card/Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem' }}>
          <Link to="/pages/press-releases" style={{
            background: '#2471c8',
            color: '#fff',
            padding: '0.7rem 1.6rem',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '1.05rem',
            textDecoration: 'none',
            boxShadow: '0 2px 8px #e3e8ee',
            transition: 'background 0.18s',
            letterSpacing: '0.5px',
          }}>
            Data and Statistics
          </Link>
        </div>
        {/* News List */}
        <div style={{ width: '100%' }}>
          {news.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.5rem',
                padding: '1.2rem 0',
                borderBottom: '1px solid #e3e8ee',
                background: hovered === idx ? '#f3f8fd' : 'transparent',
                cursor: hovered === idx ? 'pointer' : 'default',
                transition: 'background 0.18s',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(-1)}
            >
              {item.image && (
                <a
                  href={item.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  style={{ display: 'inline-block' }}
                  title="Click to open/download image"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: 90, height: 60, objectFit: 'cover', borderRadius: 6, background: '#f3f6fa', boxShadow: hovered === idx ? '0 2px 8px #b3c6e0' : 'none', transition: 'box-shadow 0.18s' }}
                  />
                </a>
              )}
              <div style={{ flex: 1 }}>
                {item.link ? (
                  <a href={item.link} style={{ fontWeight: 600, color: '#1a2f5a', fontSize: '1.08rem', textDecoration: 'underline', display: 'block' }}>
                    {item.title}
                  </a>
                ) : (
                  <span style={{ fontWeight: 600, color: '#1a2f5a', fontSize: '1.08rem', display: 'block' }}>{item.title}</span>
                )}
                <div style={{ color: '#2471c8', fontSize: '0.98rem', marginTop: 2 }}>{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News; 