import React from 'react';
import '../styles/VisionMissionValues.css';

const VisionMissionValues = () => (
  <div className="vmv-bg">
    <div className="vmv-container">
      <h1 className="vmv-title">Vision Mission and Values</h1>
      <div className="vmv-section">
        <div className="vmv-subtitle">Mission Statement</div>
        <div className="vmv-card">
          To distribute electricity for the progress and prosperity of the people in SEPCO area. To excel customer expectations with reliable and stable services by ensuring high order in maintenance of all its technical facilities. To provide safe and secure working environment of its employees. To develop growth opportunities for employees, and stackholders. To ensure customer satisfaction with high statndards of customer's services in friendly environment. To be ethical in compliance of all applicable laws and corporate practices in letter and spirit.
        </div>
        <div className="vmv-subtitle" style={{marginTop: '2rem'}}>Our Vision</div>
        <div className="vmv-card">
          To ensure convenient availability of high quality power in area of responsibility, in order to alleviate the poverty, improve quality of life and make Industrial and Agriculture Sector competitive in the World Market.
        </div>
      </div>
    </div>
  </div>
);

export default VisionMissionValues; 