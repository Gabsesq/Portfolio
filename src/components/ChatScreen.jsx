import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function ChatScreen() {
    const chatContainerRef = useRef(null);
    const [messagesVisible, setMessagesVisible] = useState(false);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = 0;
            // Small delay to ensure component is mounted
            setTimeout(() => {
                setMessagesVisible(true);
            }, 100);
        }
    }, []);

    const messages = [
        { text: "Hi! I'm Gabby 👋", delay: 0 },
        { text: "I am a Full Stack Developer always looking to expand my knowledge", delay: 0.5 },
        { text: "My various hobbies have come together to make me a better developer 🚀", delay: 1 },
        { text: "Digital art, animation, 3d (blender), golf, kickboxing, sewing, sports, obviously coding, and more! 🏠", delay: 1.5 },
        { text: "My tech stack includes React, Three.js, Node.js, SQL, PostgreSQL, ROR, Python, Java, C++, and I am familiar with many more!", delay: 2 },
        { text: "Check out my projects & my blog, thank you!", delay: 2.5, maxWidth: '200px' }
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
                    position: 'relative'
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
                        transform: 'scale(-1, 1)'
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
                                maxWidth: message.maxWidth || '300px',
                                marginBottom: '2px',
                                alignSelf: 'flex-end',
                                animation: messagesVisible ? `fadeIn 0.5s ease-in ${message.delay}s forwards` : 'none',
                                opacity: messagesVisible ? 0 : 1,
                                fontSize: '20px',
                                fontWeight: 'bold'
                            }}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>
        </Html>
    );
} 