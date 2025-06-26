import React from 'react';
import '../styles/SeniorManagement.css';

// Import images
import ChairmanImg from '../assets/chairman.jpg';
import CEOImg from '../assets/ceo.jpg';
import CICTOImg from '../assets/cicto.jpeg';
import CSDImg from '../assets/csd.png';
import CTOImg from '../assets/cto.jpeg';

const seniorTeam = [
    {
        name: 'Agha Lal Bux Khan',
        title: 'Chairman BoD',
        image: ChairmanImg,
    },
    {
        name: 'Mr. Aijaz Ahmed Channa',
        title: 'CEO',
        image: CEOImg,
    },
    {
        name: 'Mr. Suhail Khan',
        title: 'CICTO',
        image: CICTOImg,
    },
    {
        name: 'Mr. Mushtaque Abbasi',
        title: 'CSD',
        image: CSDImg,
    },
    {
        name: 'Mr. Raza Aziz Rid',
        title: 'CTO (OPERATION)',
        image: CTOImg,
    },
];

const SeniorManagement = () => {
    return (
        <div className="sm-bg">
            <div className="sm-container">
                <div className="sm-accent" />
                <h2 className="sm-title">Senior Management</h2>
                <div className="card-grid">
                    {seniorTeam.map((member, index) => (
                        <div key={index} className="profile-card">
                            <img src={member.image} alt={member.name} />
                            <div className="info">
                                <p className="name">{member.name}</p>
                                <p className="designation">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeniorManagement;
