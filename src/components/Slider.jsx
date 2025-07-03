import React, { useState, useEffect, useRef } from 'react';
import '../styles/Slider.css';

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

const taglines = [
    'Reliable. Efficient. Empowering.',
    'Lighting Up Lives, Powering Progress.',
    '24/7 Power Supply for You.',
    'Your Energy, Our Commitment.',
    'Innovating for a Brighter Tomorrow.'
];

const funFacts = [
    'Did you know? SEPCO serves over 1.5 million customers!',
    'Electricity travels at the speed of light: 299,792 km per second!',
    'Turning off unused lights saves energy and money.',
    'SEPCO is committed to renewable energy initiatives.',
    'A single lightning bolt can power 56 houses for a day!'
];

const quickActions = [
    { label: 'Pay Bill', icon: '💳', link: 'https://bill.pitc.com.pk/' },
    { label: 'Report Outage', icon: '⚡', link: 'https://ccms.pitc.com.pk/' },
    { label: 'New Connection', icon: '🔌', link: 'https://www.enc.com.pk/' },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const [taglineIdx, setTaglineIdx] = useState(0);
    const [showFact, setShowFact] = useState(false);
    const [factIdx, setFactIdx] = useState(0);
    const [lightningAnim, setLightningAnim] = useState(false);
    const slideRef = useRef(null);
    const intervalRef = useRef(null);
    const taglineInterval = useRef(null);
    const totalSlides = originalImages.length;

    const goTo = (index) => {
        setCurrent((index + images.length) % images.length);
        setLightningAnim(true);
        setTimeout(() => setLightningAnim(false), 800);
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            goTo(current + 1);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, [current]);

    useEffect(() => {
        taglineInterval.current = setInterval(() => {
            setTaglineIdx((prev) => (prev + 1) % taglines.length);
        }, 3500);
        return () => clearInterval(taglineInterval.current);
    }, []);

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
        slideRef.current.style.transition = 'transform 0.6s cubic-bezier(.77,0,.18,1)';
        slideRef.current.style.transform = `translateX(-${current * 100}%)`;
    }, [current]);

    const handleShowFact = () => {
        setFactIdx((prev) => (prev + 1) % funFacts.length);
        setShowFact(true);
        setTimeout(() => setShowFact(false), 3500);
    };

    return (
        <div className="slider enhanced-slider">
            {/* Animated Glowing Border */}
            <div className="slider-glow-border"></div>

            {/* Slides */}
            <div className="slides-container" ref={slideRef}>
                {images.map((src, idx) => (
                    <div className="slide" key={idx}>
                        <img src={src} alt={`slide-${idx}`} />
                    </div>
                ))}
            </div>

            {/* Lightning SVG Overlay */}
            <svg className={`slider-lightning-svg${lightningAnim ? ' animate' : ''}`} width="120" height="120" viewBox="0 0 120 120">
                <polyline points="60,10 80,50 65,50 85,110 45,65 60,65 40,10" fill="none" stroke="#FFD600" strokeWidth="7" strokeLinejoin="round" filter="url(#glow)" />
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* Overlay Content */}
            <div className="slider-overlay">
                <h2 className="slider-title slider-glow-text">Welcome to SEPCO</h2>
                <p className="slider-subtitle">Sukkur Electric Power Company</p>
                <div className="slider-tagline">{taglines[taglineIdx]}</div>
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
