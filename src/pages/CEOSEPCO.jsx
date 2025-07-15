import React from 'react';
import '../styles/ChairmanMessage.css';
import '../styles/About.css';
import ceoImg from '../assets/ceo.jpg';

const ceoMessage = `People ardently aspire for change but vehemently resist it at the same time. We at SEPCO need to understand the basis of our aspiration and reasons for our resistance to change. Only then we'll be able to grow, to progress and achieve the highest levels of personal as well as professional excellence. Change in the way we work is what that is required for meeting stakeholders' expectations. Let's make a pledge for transformation and changing our behaviour to win over the loyalty of our employees as well as our customers. Our customers pay whatever we earn as an employee or as a company. Our survival depends on the satisfaction of our customers which should stand at the top of our endeavor. This objective could be achieved only through "CARE" of our customers and employees.`;

const CEOSEPCO = () => (
  <div className="about-bg">
    <section className="chairman-container">
      <div className="chairman-image">
        <img src={ceoImg} alt="Aijaz Ahmed Channa - CEO" />
      </div>
      <div className="chairman-content">
        <h2 className="chairman-title">From the Desk of the CEO</h2>
        <p className="chairman-text"><em>{ceoMessage}</em></p>
        <p className="chairman-name">Aijaz Ahmed Channa – CEO</p>
      </div>
    </section>
  </div>
);

export default CEOSEPCO; 