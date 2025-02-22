import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function ChatScreen() {
    const chatContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        // Check if device is mobile
        setIsMobile(window.innerWidth < 768);
        
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = 0;
        }

        // Handle touch events for mobile scrolling
        const handleTouchStart = (e) => {
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            e.preventDefault();
            const deltaY = startY - e.touches[0].clientY;
            const container = e.currentTarget;
            container.scrollTop = scrollTop + deltaY;
            setScrollTop(container.scrollTop);
        };

        const container = chatContainerRef.current;
        if (container && isMobile) {
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            
            return () => {
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [isMobile, startY, scrollTop]);

    const messages = [
        "Hi! I'm Gabby 👋",
        "I am a Full Stack Developer always looking to expand my knowledge",
        "My various hobbies have come together to make me a better developer 🚀",
        "Digital art, animation, 3d (blender), golf, kickboxing, sewing, sports, obviously coding, and more! 🏠",
        "My tech stack includes React, Three.js, Node.js, SQL, PostgreSQL, ROR, Python, Java, C++, and I am familiar with many more!",
        "Check out my projects & my blog, thank you!"
    ];

    return (
        <Html
            transform
            wrapperClass="monitor-screen"
            position={[0.02, 0.05, 0]}
            rotation-x={0}
            rotation-y={-1.55}
            rotation-z={0}
            distanceFactor={.1}
            occlude
        >
            <div 
                className="screen-content"
                style={{
                    width: '590px',
                    height: '270px',
                    background: '#1a1a1a',
                    color: 'white',
                    padding: '8px',
                    fontFamily: 'Arial, sans-serif',
                    overflow: 'hidden',
                    position: 'relative',
                    WebkitOverflowScrolling: 'touch' // Add smooth scrolling for iOS
                }}
            >
                <div 
                    ref={chatContainerRef}
                    className="chat-container"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        overflowY: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        padding: '10px',
                        boxSizing: 'border-box',
                        width: '100%',
                        transform: 'scale(-1, 1)',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#0084FF #1a1a1a',
                        msOverflowStyle: '-ms-autohiding-scrollbar', // Better scrolling for IE/Edge
                        touchAction: 'pan-y' // Enable vertical touch scrolling
                    }}
                >
                    {messages.map((message, index) => (
                        <div 
                            key={index}
                            className="message-bubble"
                            style={{
                                background: '#0084FF',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                maxWidth: index === messages.length - 1 ? '200px' : '300px',
                                marginBottom: '2px',
                                alignSelf: 'flex-end',
                                animation: isMobile ? 'none' : `fadeIn 0.5s ease-in ${index * 0.5}s forwards`,
                                opacity: isMobile ? 1 : 0,
                                fontSize: '20px',
                                fontWeight: 'bold',
                                wordBreak: 'break-word' // Prevent text overflow
                            }}
                        >
                            {message}
                        </div>
                    ))}
                </div>
            </div>
        </Html>
    );
} 