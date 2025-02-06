import { Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

// First create a reusable Post component to keep the code DRY
const InstagramPost = ({ image, likes, caption, link }) => (
    <div style={{ marginBottom: '12px' }}>
        <div style={{
            padding: '4px 4px 8px 4px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#0095f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600'
            }}>G</div>
            <span style={{ 
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '0.3px'
            }}>gabs_esq</span>
        </div>
        <div style={{
            width: '100%',
            height: '215px',
            background: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2px'
        }}>
            <img 
                src={image} 
                alt="Project"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top'
                }}
            />
        </div>
        <div style={{ padding: '4px' }}>
            <div style={{ 
                display: 'flex', 
                gap: '8px', 
                fontSize: '16px',
                marginBottom: '4px'
            }}>
                ❤️ 💬 📤
            </div>
            <div style={{ 
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '2px'
            }}>
                {likes} likes
            </div>
            <div style={{ 
                fontSize: '14px',
                lineHeight: '1.4'
            }}>
                <span style={{ 
                    fontWeight: '600',
                    letterSpacing: '0.3px'
                }}>gabs_esq</span>
                {' '}{caption}
            </div>
            {link && (
                <div style={{
                    fontSize: '14px',
                    marginTop: '4px',
                    color: '#0095f6'
                }}>
                    <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#0095f6',
                            textDecoration: 'none'
                        }}
                    >
                        View Project →
                    </a>
                </div>
            )}
        </div>
    </div>
);

export default function InstagramScreen() {
    const instaContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        // Check if device is mobile
        setIsMobile(window.innerWidth < 768);
        
        if (instaContainerRef.current) {
            instaContainerRef.current.scrollTop = 0;
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

        const container = instaContainerRef.current;
        if (container && isMobile) {
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            
            return () => {
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [isMobile, startY, scrollTop]);

    const posts = [
        {
            image: "Portfolio.png",
            caption: "My Portfolio Website, replica of my room, Built with React-Three.js, vercel, and Blender",
            likes: "1,234"
        },
        {
            image: "retail.png",
            caption: "Created an auto-scanning system for my company via python, flask, heroku, and opencv. This saves an average of 20 minutes per day per employee.",
            likes: "982",
            link: "https://retailpr-f15aaf777d4b.herokuapp.com/"
        },
        {
            image: "emporder.jpg",
            caption: "Employee Order System, Streamlined employee ordering process using Python, Flask, PostgreSQL, nodemailer and Heroku. This application has reduced employee order time by 60%.",
            likes: "934",
            link: "http://www.emporder.store/"
        },
        {
            image: "hablame.png",
            caption: "Háblame 💬 Language learning verbal based app utilizing reactjs, flask, heroku, openai and google API",
            likes: "893",
            link: "https://immense-harbor-33068-c51d1d2f7257.herokuapp.com/"
        },
        {
            image: "eatsafe.png",
            caption: "EatSafe App 🍽️ Food safety scanning created via scrum/agile methodology, utilizes tesseract OCR, Web API, github hosting, local storage, and ReactJS",
            likes: "876",
            link: "https://eat-safe.github.io/smart-scan/"
        },
        {
            image: "Pinterest.png",
            caption: "Pinterest Clone ***UNDER CONSTRUCTION***📌 Creating a pinterest board randomizer for extreme pinterest people like me! Choose a board and shuffle ~~Frontend still under construction~~",
            likes: "910",
            link: "https://github.com/Gabsesq/Pinny-"
        },
        {
            image: "ASN.jpg",
            caption: "ASN - Automated Shipping Notice System 📦 Streamlined shipping processes using Python, Flask, pyinstaller,and Excel automation. Simplifying workflows and boosting efficiency in logistics. This application is an executable file.",
            likes: "945",
            link: "https://github.com/Gabsesq/ASN"
        }
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
                ref={instaContainerRef}
                className="screen-content" 
                style={{
                    width: '590px',
                    height: '270px',
                    background: '#1a1a1a',
                    color: 'white',
                    padding: '8px',
                    overflowY: 'auto',
                    transform: 'scale(-1, 1)',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: '-ms-autohiding-scrollbar',
                    touchAction: 'pan-y'
                }}>
                <div style={{
                    minHeight: '1200px',
                    paddingTop: '1000px',
                    paddingBottom: '20px'
                }}>
                    {posts.map((post, index) => (
                        <InstagramPost key={index} {...post} />
                    ))}
                </div>
            </div>
        </Html>
    );
} 