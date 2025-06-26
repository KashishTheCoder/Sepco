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
    if (label === 'Board of Directors') return '/pages/board-of-directors';
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
                    <Link to={buildLink(item)}>{item}</Link>
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
