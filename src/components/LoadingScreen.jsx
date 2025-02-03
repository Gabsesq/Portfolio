import { useState, useEffect } from 'react';

export default function LoadingScreen({ progress }) {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, #1a1a1a, #2c3e50)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            color: 'white',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                fontSize: '24px',
                marginBottom: '20px',
                fontWeight: 'bold'
            }}>
                Loading{dots}
            </div>
            <div style={{
                width: '200px',
                height: '4px',
                background: '#444',
                borderRadius: '2px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: '#0084ff',
                    transition: 'width 0.3s ease-out'
                }}/>
            </div>
            <div style={{
                marginTop: '10px',
                fontSize: '16px'
            }}>
                {Math.round(progress)}%
            </div>
        </div>
    );
} 