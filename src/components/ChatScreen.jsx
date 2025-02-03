import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function ChatScreen() {
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = 0;
        }
    }, []);

    return (
        <Html
            transform
            wrapperClass="monitor-screen"
            position={[0.02, 0.05, 0]}
            rotation-x={0}
            rotation-y={-1.55}
            rotation-z={0}
            distanceFactor={0.2}
            occlude
        >
            <div 
                className="screen-content"
                style={{
                    width: '280px',
                    height: '135px',
                    background: '#1a1a1a',
                    color: 'white',
                    padding: '8px',
                    fontFamily: 'Arial, sans-serif',
                    overflow: 'hidden',
                    transform: 'scale(-1, 1)',
                }}
            >
                <div 
                    ref={chatContainerRef}
                    className="chat-container"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        fontSize: '12px',
                        height: '100%',
                        overflowY: 'auto',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#0084FF #1a1a1a',
                        paddingRight: '4px',
                    }}
                >
                    <div className="message-bubble"
                        style={{
                            background: '#0084FF',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            maxWidth: '160px',
                            marginBottom: '2px',
                            alignSelf: 'flex-end',
                            animation: 'fadeIn 0.5s ease-in',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >
                        Hi! I'm Gabby 👋
                    </div>

                    <div className="message-bubble"
                        style={{
                            background: '#0084FF',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            maxWidth: '160px',
                            marginBottom: '2px',
                            alignSelf: 'flex-end',
                            animation: 'fadeIn 0.5s ease-in 0.5s',
                            opacity: 0,
                            animationFillMode: 'forwards',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >
                        I am a Full Stack Developer always looking to expand my knowledge
                    </div>

                    <div className="message-bubble"
                        style={{
                            background: '#0084FF',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            maxWidth: '160px',
                            marginBottom: '2px',
                            alignSelf: 'flex-end',
                            animation: 'fadeIn 0.5s ease-in 1s',
                            opacity: 0,
                            animationFillMode: 'forwards',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >
                        My various hobbies have come together to make me a better developer 🚀
                    </div>

                    <div className="message-bubble"
                        style={{
                            background: '#0084FF',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            maxWidth: '160px',
                            marginBottom: '2px',
                            alignSelf: 'flex-end',
                            animation: 'fadeIn 0.5s ease-in 1.5s',
                            opacity: 0,
                            animationFillMode: 'forwards',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >
                        Digital art, animation, 3d (blender), golf, kickboxing, sewing, sports, obviously coding, and more! 🏠
                    </div>

                    <div className="message-bubble"
                        style={{
                            background: '#0084FF',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            maxWidth: '160px',
                            marginBottom: '2px',
                            alignSelf: 'flex-end',
                            animation: 'fadeIn 0.5s ease-in 2s',
                            opacity: 0,
                            animationFillMode: 'forwards',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >
                        My tech stack includes React, Three.js, Node.js, SQL, PostgreSQL, ROR, Python, Java, C++, and I am familiar with many more!
                    </div>

                    <div className="message-bubble"
                        style={{
                            background: '#0084FF',
                            padding: '4px 8px',
                            borderRadius: '6px',
                            maxWidth: '160px',
                            marginBottom: '2px',
                            alignSelf: 'flex-end',
                            animation: 'fadeIn 0.5s ease-in 2.5s',
                            opacity: 0,
                            animationFillMode: 'forwards',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    >
                        Check out my projects & my blog, thank you!
                    </div>
                </div>
            </div>
        </Html>
    );
} 