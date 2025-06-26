import React from "react";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import '../styles/ComplaintCell.css';

const ComplaintCell = () => {
    const cards = [
        {
            title: "Register Complaint",
            description: "Submit your complaint online to Wafaqi Mohtasib.",
            icon: <FaRegEdit size={40} className="text-blue-600" />,
            link: "https://complaints.mohtasib.gov.pk/complaints/precomplaintRegistration.aspx?mohtasib=WMS&agency=732",
        },
        {
            title: "Check Complaint Status",
            description: "Track the status of your submitted complaint.",
            icon: <FaSearch size={40} className="text-green-600" />,
            link: "https://complaints.mohtasib.gov.pk/complaints/precomplaintstatus.aspx",
        },
    ];

    return (
        <div className="complaint-bg">
            <div className="complaint-container">
                <h2 className="complaint-title">Complaint Management Cell</h2>
                <div className="complaint-card-grid">
                    {cards.map((card, idx) => (
                        <a
                            key={idx}
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="complaint-card"
                        >
                            <div className="icon-wrapper">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComplaintCell;
