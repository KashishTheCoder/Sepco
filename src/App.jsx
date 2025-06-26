import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ChairmanMessage from './components/ChairmanMessage';
import InfoCardsSection from './components/InfoCardsSection';
import HomePageCards from './components/HomePageCards';
import Gallery from './components/Gallery';
import BoardOfDirectors from './pages/BoardOfDirectors';

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
      <Slider />
      <InfoCardsSection />
      <ChairmanMessage />
      <Gallery />
      <HomePageCards />
      

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/pages/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/pages/:pageId" element={<DynamicPage />} />
        <Route path="/tenders" element={<Page title="Tenders" />} />
        <Route path="/careers" element={<Page title="Careers" />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
