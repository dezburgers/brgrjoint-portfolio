// MouseGlow.js

import React, { useState, useEffect } from 'react';
import styles from './mouseglow.module.css';

const MouseGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        setPosition({ x: clientX, y: clientY });
    };

    const handleMouseDown = () => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            // Removed the navigation code
        }, 300);
    };

    useEffect(() => {
        const updateTrailPosition = () => {
            setTrailPosition((prevPosition) => ({
                x: prevPosition.x + (position.x - prevPosition.x) * 0.2,
                y: prevPosition.y + (position.y - prevPosition.y) * 0.2,
            }));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        const trailUpdateInterval = setInterval(updateTrailPosition, 7);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            clearInterval(trailUpdateInterval);
        };
    }, [position]);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.cursorGlow} ${isClicked ? styles.clicked : ''}`}
                style={{ left: position.x, top: position.y }}
            >
                <div className="font-mono p-4">
                    <div className={styles.centerText}>GET TO KNOW US</div>
                </div>
            </div>
            <div
                className={`${styles.cursorGlow} ${styles.secondRing}`}
                style={{ left: trailPosition.x, top: trailPosition.y }}
            ></div>
            <div className={styles.brandText} style={{ left: position.x, top: position.y + 60 }}>
                BRGR JOINT ™
            </div>
        </div>
    );
};

export default MouseGlow;