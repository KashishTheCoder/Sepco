import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/About.css';

const aboutContent = `The distribution company SEPCO (Sukkur Electric Power Company) has been formed by bifurcating HESCO (modified) so that the areas of operation that were entirely under the jurisdiction of HESCO have now been divided between the two DISCOs. SEPCO is a newly created company via notification No. MDP / GM /HR /Dir/ (O&M) /PEPCO /1632-99 Dated: 26.07.2010 and started functioning with effect from 16.08.2010. HESCO has surrendered its historical limits which now fall under the jurisdiction of SEPCO and a NOC was issued in this regard. The new company has been incorporated under the companies' ordinance with the S.E.C.P on 23.11.2010. NEPRA has admitted SEPCO's application for consideration of grant of a Distribution License and published it in the news papers on 07.04.2011, for Public Hearings. NEPRA has allotted Registration No. LAD-35 to SEPCO and issued it the Distribution Licence No. 21 / DL/ 2011 dated 18.08.2011. The areas that are now under the distribution system of the SEPCO consist of three operation circles namely: SUKKUR, LARKANA, DADU The new distribution system of the HESCO (modified) also retains three operation circles, namely: HYDERABAD-I, HYDERABAD-II, NAWABSHAH`;

const operationCircles = [
  {
    title: 'SEPCO Operation Circles',
    circles: ['SUKKUR', 'LARKANA', 'DADU'],
  },
  {
    title: 'HESCO (Modified) Operation Circles',
    circles: ['HYDERABAD-I', 'HYDERABAD-II', 'NAWABSHAH'],
  },
];

const About = () => (
  <>
    <div className="about-bg">
      <div className="about-container">
        <div className="about-accent" />
        <h1 className="about-title">Sukkur Electric Power Company <span>(SEPCO)</span></h1>
        <div className="about-content">
          <p>{aboutContent}</p>
          <div className="about-circles">
            {operationCircles.map((group, idx) => (
              <div className="about-circle-group" key={idx}>
                <h3>{group.title}</h3>
                <ul>
                  {group.circles.map((circle) => (
                    <li key={circle}>{circle}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About; 