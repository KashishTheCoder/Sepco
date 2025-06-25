import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; 
import InfoCardsSection from './Components/InfoCardsSection';
// Reusable page component
const Page = ({ title }) => (
  <div style={{ padding: '2rem', minHeight: '70vh' }}>
    <h2>{title}</h2>
    <p>This is the {title} page content.</p>
  </div>
);

// Dynamic page for dropdown links
const DynamicPage = () => {
  const { pageId } = useParams();
  const formattedTitle = pageId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return <Page title={formattedTitle} />;
};

// Main App
function App() {
  return (
    <Router>
      <Navbar />
      <InfoCardsSection/>


      {/* Page content */}
      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/pages/:pageId" element={<DynamicPage />} />
        <Route path="/tenders" element={<Page title="Tenders" />} />
        <Route path="/careers" element={<Page title="Careers" />} />
      </Routes>

      <Footer /> {/* ✅ Footer added here */}
    </Router>
  );
}

export default App;
