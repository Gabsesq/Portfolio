import { useState, useEffect } from 'react';

export default function LoadingScreen({ progress: actualProgress }) {
    const [displayProgress, setDisplayProgress] = useState(0);

    useEffect(() => {
        // Start with a minimum progress of 5%
        const startingProgress = Math.max(5, actualProgress);
        
        // Create a smooth animation to target progress
        const animateProgress = () => {
            setDisplayProgress(prev => {
                // Calculate the next progress value
                const target = startingProgress;
                const increment = (target - prev) * 0.1; // Smooth easing
                
                // If we're very close to target, just set it
                if (Math.abs(target - prev) < 0.1) return target;
                
                return prev + increment;
            });
        };

        // Run animation every 30ms
        const timer = setInterval(animateProgress, 30);

        // When actualProgress hits 100, ensure we complete loading
        if (actualProgress >= 100) {
            const completeLoading = setTimeout(() => {
                setDisplayProgress(100);
            }, 500); // Half second delay before completing

            return () => {
                clearInterval(timer);
                clearTimeout(completeLoading);
            };
        }

        return () => clearInterval(timer);
    }, [actualProgress]);

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
                    transition: 'width 0.3s ease-out',
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