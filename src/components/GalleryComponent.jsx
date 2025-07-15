import React from 'react';
import '../styles/GalleryComponent.css';
import sepco1 from '../assets/sepco1.jpg';
import sepco2 from '../assets/sepco2.jpg';
import sepco3 from '../assets/sepco3.jpg';
import sepco4 from '../assets/sepco4.jpg';
import sepco5 from '../assets/sepco5.jpg';
import sepco6 from '../assets/sepco6.jpg';
import sepco7 from '../assets/sepco7.jpg';
import sepco8 from '../assets/sepco8.jpg';
import sepco9 from '../assets/sepco9.jpg';
import sepco10 from '../assets/sepco10.jpg';
import sepco11 from '../assets/sepco11.jpg';

const galleryImages = [
    { img: sepco1, desc: 'The Lansdowne bridge' },
    { img: sepco2, desc: 'SEPCO Power Plant' },
    { img: sepco3, desc: 'SEPCO Headquarters' },
    { img: sepco4, desc: 'LESCO Headquarters' },
    { img: sepco5, desc: 'CSR Activity: Tree Plantation Drive' },
    { img: sepco6, desc: 'Sukkur Barrage' },
    { img: sepco7, desc: 'SEPCO Solar System' },
    { img: sepco8, desc: 'Community Outreach Program' },
    { img: sepco9, desc: 'Safety Drill Exercise' },
    { img: sepco10, desc: 'New Project Launch Event' },
    { img: sepco11, desc: 'Employee Wellness Initiative' },
];

const GalleryComponent = () => {
    return (
        <div className="gallery-bg">
            <section className="gallery-section">
                <h2 className="gallery-title">Image Gallery</h2>
                <div className="gallery-grid">
                    {galleryImages.map((item, idx) => (
                        <div className="gallery-card" key={idx}>
                            <img src={item.img} alt={`SEPCO Event Photo ${idx + 1}`} className="gallery-img" />
                            <div className="gallery-desc">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default GalleryComponent;
