import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

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

const originalImages = [
    sepco1, sepco2, sepco3, sepco4, sepco5, sepco6,
    sepco7, sepco8, sepco9, sepco10, sepco11,
];

const images = [...originalImages, originalImages[0]];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const slideRef = useRef(null);
    const intervalRef = useRef(null);

    const totalSlides = originalImages.length;

    const goTo = (index) => {
        setCurrent((index + images.length) % images.length);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            goTo(current + 1);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, [current]);

    useEffect(() => {
        const handleTransitionEnd = () => {
            if (current === totalSlides) {
                slideRef.current.style.transition = 'none';
                setCurrent(0);
                slideRef.current.style.transform = `translateX(0%)`;
            }
        };

        const slider = slideRef.current;
        slider.addEventListener('transitionend', handleTransitionEnd);
        return () => slider.removeEventListener('transitionend', handleTransitionEnd);
    }, [current]);

    useEffect(() => {
        slideRef.current.style.transition = 'transform 0.6s ease-in-out';
        slideRef.current.style.transform = `translateX(-${current * 100}%)`;
    }, [current]);

    return (
        <div className="slider">
            <div className="slides-container" ref={slideRef}>
                {images.map((src, idx) => (
                    <div className="slide" key={idx}>
                        <img src={src} alt={`slide-${idx}`} />
                    </div>
                ))}
            </div>

            {/* Overlay Content */}
            <div className="slider-overlay">
                <h2 className="slider-title">Welcome to SEPCO</h2>
                <p className="slider-subtitle">Sukkur Electric Power Company</p>
                <a
                    href="https://ibs.pitc.com.pk/dashboard/user/auth/sign-in"
                    className="slider-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Go to MIS Portal
                </a>
            </div>

            <button className="arrow prev" onClick={() => goTo(current - 1)}>‹</button>
            <button className="arrow next" onClick={() => goTo(current + 1)}>›</button>
        </div>
    );
};

export default Slider;
