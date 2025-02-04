import { useState, useEffect } from 'react';

export default function LoadingScreen({ progress: actualProgress }) {
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
        // Smoothly animate to the new progress value
        const animateProgress = () => {
            if (displayProgress < actualProgress) {
                setDisplayProgress(prev => {
                    const increment = Math.min(1, actualProgress - prev);
                    return prev + increment;
                });
            }
        };

        const timer = setInterval(animateProgress, 20); // Update every 20ms

        return () => clearInterval(timer);
    }, [actualProgress, displayProgress]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4E1 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF69B4',
            zIndex: 1000,
            fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{ 
                marginBottom: '25px', 
                fontSize: '24px',
                fontWeight: '500',
                letterSpacing: '0.5px'
            }}>
                Loading...
            </div>
            <div style={{ 
                width: '200px', 
                height: '3px', 
                background: 'rgba(255, 182, 193, 0.3)',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(255, 105, 180, 0.1)'
            }}>
                <div style={{
                    width: `${displayProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #FF69B4, #FFB6C1)',
                    transition: 'width 0.2s ease-out',
                    borderRadius: '6px'
                }} />
            </div>
            <div style={{ 
                marginTop: '12px', 
                fontSize: '14px',
                opacity: 0.8,
                color: '#FF69B4',
                fontWeight: '400'
            }}>
                {Math.round(displayProgress)}%
            </div>
        </div>
    );
} 