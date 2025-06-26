import React from 'react';
import '../styles/CEOSEPCO.css';
import ceoImg from '../assets/chairman.jpg'; // Replace with actual CEO image if available

const ceoMessage = `People ardently aspire for change but vehemently resist it at the same time. We at SEPCO need to understand the basis of our aspiration and reasons for our resistance to change. Only then we'll be able to grow, to progress and achieve the highest levels of personal as well as professional excellence. Change in the way we work is what that is required for meeting stakeholders' expectations. Let's make a pledge for transformation and changing our behaviour to win over the loyalty of our employees as well as our customers. Our customers pay whatever we earn as an employee or as a company. Our survival depends on the satisfaction of our customers which should stand at the top of our endeavor. This objective could be achieved only through "CARE" of our customers and employees.`;

const CEOSEPCO = () => (
  <div className="ceo-bg">
    <div className="ceo-container">
      <div className="ceo-quote-mark top">&ldquo;</div>
      <div className="ceo-card">
        <img src={ceoImg} alt="Aijaz Ahmed Channa - CEO" className="ceo-img" />
        <h2 className="ceo-name">Aijaz Ahmed Channa <span>- CEO</span></h2>
        <p className="ceo-message"><em>{ceoMessage}</em></p>
      </div>
      <div className="ceo-quote-mark bottom">&rdquo;</div>
    </div>
  </div>
);

export default CEOSEPCO; 