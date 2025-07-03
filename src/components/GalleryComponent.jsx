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

const GalleryComponent = () => {
    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Image Gallery</h2>
            <div className="gallery-grid">
                {[sepco1, sepco2, sepco3, sepco4, sepco5, sepco6, sepco7, sepco8, sepco9, sepco10, sepco11].map((img, idx) => (
                    <div className="gallery-card" key={idx}>
                        <img src={img} alt={`SEPCO Event Photo ${idx + 1}`} className="gallery-img" />
                        <p className="gallery-caption">SEPCO Event Photo</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GalleryComponent;
