import React, { useState, useEffect, useRef } from 'react';
import '../styles/Slider.css';

import sliderbg from '../assets/sliderbg.jpg';

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
    const [taglineIdx, setTaglineIdx] = useState(0);
    const [lightningAnim, setLightningAnim] = useState(false);
    const taglineInterval = useRef(null);

    useEffect(() => {
        taglineInterval.current = setInterval(() => {
            setTaglineIdx((prev) => (prev + 1) % taglines.length);
            setLightningAnim(true);
            setTimeout(() => setLightningAnim(false), 800);
        }, 3500);
        return () => clearInterval(taglineInterval.current);
    }, []);

    return (
        <div className="slider enhanced-slider" style={{ backgroundImage: `url(${sliderbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Animated Glowing Border */}
            <div className="slider-glow-border"></div>

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
        </div>
    );
};

export default Slider;
