import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ChairmanMessage from './components/ChairmanMessage';
import InfoCardsSection from './components/InfoCardsSection';
import HomePageCards from './components/HomePageCards';
import GalleryComponent from './components/GalleryComponent';
import BoardOfDirectors from './pages/BoardOfDirectors';
import About from './pages/About';
import SeniorManagement from './pages/SeniorManagement';
import CEOSEPCO from './pages/CEOSEPCO';
import AreaOfResponsibility from './pages/AreaOfResponsibility';
import KeyStatistics from './pages/KeyStatistics';
import Maps from './pages/Maps';
import Consumers from './pages/Consumers';
import GalleryPage from './pages/GalleryPage';
import WhatWeDo from './pages/WhatWeDo';
import VisionMissionValues from './pages/VisionMissionValues';
import Organogram from './pages/Organogram';
import LoadManagementSchedule from './pages/LoadManagementSchedule';
import Reports from './pages/Reports';
import PocketBookUSAID from './pages/PocketBookUSAID';
import News from './pages/News';
import PressReleases from './pages/PressReleases';
import GlobalSDGS from './pages/GlobalSDGS';
import Defaulters from './pages/Defaulters';
import ComplaintCell from './pages/ComplaintCell';
import CNICRegistration from './pages/CNICRegistration';
import AMI from './pages/AMI';
import MIRAD from './pages/MIRAD';
import ERPUserManuals from './pages/ERPUserManuals';
import NETMetering from './pages/NETMetering';
import TaxDeductionCertificate from './pages/TaxDeductionCertificate';
import MobileRegistration from './pages/MobileRegistration';
import Careers from './pages/Careers';

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

// Home page content
const Home = () => (
  <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e6f0ff 0%, #f8fafc 100%)' }}>
    {/* <Slider /> */}
    <InfoCardsSection />
    {/* <ChairmanMessage /> */}
    <GalleryComponent />
    <HomePageCards />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/senior-management" element={<SeniorManagement />} />
        <Route path="/image-gallery" element={<GalleryPage />} />
        <Route path="/pages/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/pages/ceo-sepco" element={<CEOSEPCO />} />
        <Route path="/pages/area-of-responsibility" element={<AreaOfResponsibility />} />
        <Route path="/pages/key-statistics" element={<KeyStatistics />} />
        <Route path="/pages/maps" element={<Maps />} />
        <Route path="/organogram" element={<Organogram />} />
        <Route path="/pages/consumers" element={<Consumers />} />
        <Route path="/pages/what-we-do" element={<WhatWeDo />} />
        <Route path="/pages/vision-mission-values" element={<VisionMissionValues />} />
        <Route path="/pages/load-management-schedule" element={<LoadManagementSchedule />} />
        <Route path="/pages/reports" element={<Reports />} />
        <Route path="/pages/pocket-book-usaid-for-power-distribution-system" element={<PocketBookUSAID />} />
        <Route path="/pages/press-releases" element={<PressReleases />} />
        <Route path="/pages/global-sdgs-program" element={<GlobalSDGS />} />
        <Route path="/pages/defaulters" element={<Defaulters />} />
        <Route path="/pages/complaint-management-cell" element={<ComplaintCell />} />
        <Route path="/pages/cnic-registration" element={<CNICRegistration />} />
        <Route path="/pages/ami" element={<AMI />} />
        <Route path="/pages/mirad" element={<MIRAD />} />
        <Route path="/pages/erp-(user-manuals)" element={<ERPUserManuals />} />
        <Route path="/pages/net-metering" element={<NETMetering />} />
        <Route path="/pages/tax-deduction-certificate" element={<TaxDeductionCertificate />} />
        <Route path="/pages/mobile-registration" element={<MobileRegistration />} />
        <Route path="/pages/:pageId" element={<DynamicPage />} />
        <Route path="/tenders" element={<Page title="Tenders" />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
