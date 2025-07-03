import React from 'react';
import '../styles/GalleryComponent.css';
import sepco10 from '../assets/sepco10.jpg';
import sepco11 from '../assets/sepco11.jpg';

const GalleryComponent = () => {
    return (
        <section className="gallery-section">
            <h2 className="gallery-title">Image Gallery</h2>
            <div className="gallery-grid">
                <div className="gallery-card">
                    <img src={sepco10} alt="BoD SEPCO - Android App Launch" className="gallery-img" />
                    <p className="gallery-caption">Inauguration of android app by BoD SEPCO</p>
                </div>
                <div className="gallery-card">
                    <img src={sepco11} alt="BoD SEPCO - Android App Launch" className="gallery-img" />
                    <p className="gallery-caption">Inauguration of android app by BoD SEPCO</p>
                </div>
            </div>
        </section>
    );
};

export default GalleryComponent;
