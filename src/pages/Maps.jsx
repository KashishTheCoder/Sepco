import React from 'react';
import '../styles/Maps.css';
import geoMap from '../assets/SEPCO_1684404675_geographic_area_of_sepco.jpg';
import linesMap from '../assets/SEPCO_1684404747_length_of_lines.jpg';

const Maps = () => (
  <div className="maps-bg">
    <div className="maps-container">
      <h1 className="maps-title">Maps</h1>
      <div className="maps-grid">
        <div className="maps-card">
          <h2 className="maps-card-title">Geographic Area Of SEPCO</h2>
          <img src={geoMap} alt="Geographic Area Of SEPCO" className="maps-img" />
        </div>
        <div className="maps-card">
          <h2 className="maps-card-title">Length Of Lines In SEPCO</h2>
          <img src={linesMap} alt="Length Of Lines In SEPCO" className="maps-img" />
        </div>
      </div>
    </div>
  </div>
);

export default Maps; 