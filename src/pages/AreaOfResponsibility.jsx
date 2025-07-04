import React from 'react';
import '../styles/AreaOfResponsibility.css';

const jurisdiction = `Districts Sukkur, Ghotki, Khairpur, Kashmore / Kandhkot, and some portion of Rahimyar Khan District, Jacobabad, Shikarpur, Larkana, Kamber / Shahdadkot, Dadu some portion of Jamshoro District, Naushehro Feroze portion of Shaheed Benazirabad District.`;

const AreaOfResponsibility = () => (
  <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e6f0ff 0%, #f8fafc 100%)' }}>
    <div className="aor-bg">
      <div className="aor-container">
        <h1 className="aor-title">Load Management Schedule</h1>
        <div className="aor-section">
          <h2 className="aor-subtitle">Jurisdiction</h2>
          <div className="aor-jurisdiction-card">
            {jurisdiction}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AreaOfResponsibility; 