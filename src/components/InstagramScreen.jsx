import { Html } from "@react-three/drei";

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
                    objectFit: 'cover'
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
    const posts = [
        {
            image: "Portfolio.png",
            caption: "My Portfolio Website 🌐 Built with React, Three.js, and Blender",
            likes: "1,234"
        },
        {
            image: "retail.png",
            caption: "Retail Management System 🛍️ Full-stack app with React & Node.js",
            likes: "982",
            link: "https://retailpr-f15aaf777d4b.herokuapp.com/"
        },
        {
            image: "hablame.png",
            caption: "Háblame 💬 Language learning chat app with real-time translation",
            likes: "893",
            link: "https://immense-harbor-33068-c51d1d2f7257.herokuapp.com/"
        },
        {
            image: "eatsafe.png",
            caption: "EatSafe App 🍽️ Food safety tracking with real-time updates",
            likes: "876",
            link: "https://eat- safe.github.io/smart-scan/"
        },
        {
            image: "Pinterest.png",
            caption: "Pinterest Clone 📌 Built with React and Ruby on Rails",
            likes: "754"
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
            <div className="screen-content" style={{
                width: '590px',
                height: '270px',
                background: '#1a1a1a',
                color: 'white',
                padding: '8px',
                overflowY: 'auto',
                transform: 'scale(-1, 1)'
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