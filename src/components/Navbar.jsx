import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import sepcoLogo from '../assets/sepco_logo.png';

const menuItems = {
  Organization: ['About SEPCO', 'Board of Directors', 'CEO SEPCO', 'Senior Management', 'Area of Responsibility', 'Key Statistics', 'Maps', 'Organogram', 'Customers', 'What We Do', 'The Ministry', 'Vision Mission and Values', 'Image Gallery'],
  Services: ['Load Management Schedule', 'Tariff-Wise Billing/Collection', 'Daily, Monthly, and Quarterly Reports', 'Tariff Guide', 'Complaint Management Cell', 'Bill Estimator', 'Duplicate Bill', 'New Connection Cost Calculator', 'New Connection Application'],
  Downloads: ['Load Shedding Schedule', 'Tariff Guide', 'Orders & Notifications', 'Others', 'Seniority Lists', 'Pocket Book USAID For Power Distribution System'],
  News: ['News', 'Press Releases', 'Global SDGS', 'Top 500 Defaulters', 'Data and Statistics'],
  Additional: ['AMI', 'MIRAD', 'ERP (User Manuals)', 'NET Metering', 'Tax Deduction Certificate', 'Consumer CNIC Registration', 'Consumer Mobile Number Registration'],
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const buildLink = (label) => {
    if (label === 'About SEPCO') return '/about';
    if (label === 'Board of Directors') return '/pages/board-of-directors';
    if (label === 'Senior Management') return '/senior-management';
    if (label === 'CEO SEPCO') return '/pages/ceo-sepco';
    if (label === 'Area of Responsibility') return '/pages/area-of-responsibility';
    if (label === 'Key Statistics') return '/pages/key-statistics';
    if (label === 'Maps') return '/pages/maps';
    if (label === 'Consumers' || label === 'Customers') return '/pages/consumers';
    if (label === 'Image Gallery') return '/image-gallery';
    if (label === 'What We Do') return '/pages/what-we-do';
    if (label === 'The Ministry') return 'http://www.mowp.gov.pk/';
    if (label === 'Vision Mission and Values') return '/pages/vision-mission-values';
    if (label === 'Load Management Schedule') return '/pages/load-management-schedule';
    if (label === 'Daily, Monthly, and Quarterly Reports') return '/pages/reports';
    if (label === 'Tariff Guide') return 'https://nepra.org.pk/tariff/Distribution%20SEPCO.php';
    if (label === 'Duplicate Bill') return 'https://bill.pitc.com.pk/';
    if (label === 'New Connection Cost Calculator') return 'https://www.pitc.com.pk/index.php/new-connection-estimator';
    if (label === 'New Connection Application') return 'https://www.enc.com.pk/'
    if (label === 'Load Shedding Schedule') return '/pages/load-management-schedule';
    if (label === 'Pocket Book USAID For Power Distribution System') return '/pages/pocket-book-usaid-for-power-distribution-system';
    if (label === 'News') return '/news';
    if (label === 'Press Releases') return '/pages/press-releases';
    if (label === 'Global SDGS') return '/pages/global-sdgs-program';
    if (label === 'Top 500 Defaulters') return '/pages/defaulters';
    if (label === 'Data and Statistics') return '/pages/data-and-statistics';
    
    return `/pages/${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Title */}
        <div className="navbar-logo">
          <img src={sepcoLogo} alt="SEPCO Logo" />
          <div>
            <h1>Sukkur Electric Power Company</h1>
            <p>سکھر الیکٹرک پاور کمپنی</p>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </div>

        {/* Main Menu */}
        <ul className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <li className='navbar-item'>
            <Link to="/">Home</Link>
          </li>
          {Object.entries(menuItems).map(([menu, items]) => (
            <li
              className="navbar-item"
              key={menu}
              onClick={() => toggleDropdown(menu)}
              onMouseEnter={() => setActiveMenu(menu)}
            >
              <span className="dropdown-title">
                {menu} <span className="caret">▼</span>
              </span>
              <ul className={`dropdown-menu ${activeMenu === menu ? 'show' : ''}`}>
                {items.map((item) => (
                  <li key={item}>
                    {buildLink(item).startsWith('http') ? (
                      <a href={buildLink(item)} target="_blank" rel="noopener noreferrer">{item}</a>
                    ) : (
                      <Link to={buildLink(item)}>{item}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="navbar-item"><Link to="/tenders">Tenders</Link></li>
          <li className="navbar-item"><Link to="/careers">Careers</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
