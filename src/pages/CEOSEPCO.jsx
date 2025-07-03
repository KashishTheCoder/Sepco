import React from 'react';
import '../styles/CEOSEPCO.css';
import ceoImg from '../assets/ceo.jpg';

const ceoMessage = `People ardently aspire for change but vehemently resist it at the same time. We at SEPCO need to understand the basis of our aspiration and reasons for our resistance to change. Only then we'll be able to grow, to progress and achieve the highest levels of personal as well as professional excellence. Change in the way we work is what that is required for meeting stakeholders' expectations. Let's make a pledge for transformation and changing our behaviour to win over the loyalty of our employees as well as our customers. Our customers pay whatever we earn as an employee or as a company. Our survival depends on the satisfaction of our customers which should stand at the top of our endeavor. This objective could be achieved only through "CARE" of our customers and employees.`;

const CEOSEPCO = () => (
  <div className="ceo-bg">
    <div className="ceo-flex-row">
      <div className="ceo-img-col">
        <img src={ceoImg} alt="Aijaz Ahmed Channa - CEO" className="ceo-img-portrait" />
      </div>
      <div className="ceo-text-col">
        <h1 className="ceo-heading">From the Desk of the CEO</h1>
        <div className="ceo-message-block">
          <p className="ceo-message-text"><em>{ceoMessage}</em></p>
          <div className="ceo-signature"><b>Aijaz Ahmed Channa - CEO</b></div>
        </div>
      </div>
    </div>
  </div>
);

export default CEOSEPCO; 