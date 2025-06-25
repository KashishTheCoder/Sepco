import React from 'react';
import './ChairmanMessage.css';
import chairmanImg from '../assets/chairman.jpg'; // Update the path accordingly

const ChairmanMessage = () => {
    return (
        <section className="chairman-container">
            <div className="chairman-image">
                <img src={chairmanImg} alt="Chairman BoD" />
            </div>
            <div className="chairman-content">
                <h2 className="chairman-title">From the Desk of the Chairman</h2>
                <p className="chairman-text">
                    <em>
                        People ardently aspire for change but vehemently resist it at the same time.
                        We at SEPCO need to understand the basis of our aspiration and reasons for our resistance to change.
                        Only then we’ll be able to grow, to progress and achieve the highest levels of personal as well as professional excellence.
                        Change in the way we work is what that is required for meeting stakeholders’ expectations. Let’s make a pledge for transformation
                        and changing our behaviour to win over the loyalty of our employees as well as our customers. Our customers pay whatever we earn as
                        an employee or as a company. Our survival depends on the satisfaction of our customers which should stand at the top of our endeavor.
                        This objective could be achieved only through “CARE” of our customers and employees.
                    </em>
                </p>
                <p className="chairman-name">Agha Lalbux Khan – Chairman BoD</p>
            </div>
        </section>
    );
};

export default ChairmanMessage;
