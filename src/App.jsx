import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Example dummy components for pages
const Page = ({ title }) => (
  <div style={{ padding: '2rem' }}>
    <h2>{title}</h2>
    <p>This is the {title} page content.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />

      {/* All routes go here */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Page title="Home" />} />

        {/* Dynamic pages - all your dropdown links */}
        <Route path="/pages/:pageId" element={<DynamicPage />} />

        {/* Tenders and Careers */}
        <Route path="/tenders" element={<Page title="Tenders" />} />
        <Route path="/careers" element={<Page title="Careers" />} />
      </Routes>
    </Router>
  );
}

// Dynamic page to handle any page from the dropdowns
import { useParams } from 'react-router-dom';
const DynamicPage = () => {
  const { pageId } = useParams();
  const formattedTitle = pageId.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return <Page title={formattedTitle} />;
};

export default App;
