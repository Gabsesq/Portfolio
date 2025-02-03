import { Html } from "@react-three/drei";

// First create a reusable Post component to keep the code DRY
const InstagramPost = ({ emoji, likes, description }) => (
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
            height: '100px',
            background: '#1a1a1a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2px',
            fontSize: '40px'
        }}>
            {emoji}
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
                {' '}{description}
            </div>
        </div>
    </div>
);

export default function InstagramScreen() {
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
            <div className="screen-content"
                style={{
                    width: '600px',
                    height: '300px',
                    background: '#000000',
                    color: 'white',
                    padding: '0',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    transform: 'scale(-1, 1)',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8e8e8e #000000',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    textRendering: 'optimizeLegibility',
                    imageRendering: 'high-quality',
                    backdropFilter: 'blur(0)',
                    filter: 'none'
                }}
            >
                <div style={{ 
                    padding: '8px 0',
                    minHeight: '120%'
                }}>
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
                            height: '100%',
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2px'
                        }}>
                            <img 
                                src="/Portfolio.png" 
                                alt="Portfolio Preview"
                                style={{
                                    width: '80%',
                                    height: '80%',
                                    objectFit: 'contain',
                                    borderRadius: '2px',
                                    imageRendering: 'high-quality',
                                    WebkitFontSmoothing: 'antialiased',
                                    MozOsxFontSmoothing: 'grayscale'
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
                                110 likes
                            </div>
                            <div style={{ 
                                fontSize: '14px',
                                lineHeight: '1.4'
                            }}>
                                <span style={{ 
                                    fontWeight: '600',
                                    letterSpacing: '0.3px'
                                }}>gabs_esq</span>
                                {' '}Portfolio built with Three.js and React
                            </div>
                        </div>
                    </div>

                    {/* Additional Posts */}
                    <InstagramPost 
                        emoji="🎨"
                        likes={95}
                        description="Just finished a new digital art piece! Check out my latest work #digitalart #creativity"
                    />

                    <InstagramPost 
                        emoji="💻"
                        likes={88}
                        description="Deep diving into system design today. Learning never stops! #coding #systemdesign"
                    />

                    <InstagramPost 
                        emoji="🥋"
                        likes={120}
                        description="Balance is key - from coding to kickboxing, keeping the mind and body sharp! #kickboxing #developerlife"
                    />

                    <InstagramPost 
                        emoji="🎮"
                        likes={105}
                        description="Working on a new game engine project using Three.js! #gamedev #webgl"
                    />

                    <InstagramPost 
                        emoji="✨"
                        likes={92}
                        description="Just deployed my latest React project! Link in bio #webdev #react"
                    />

                    <InstagramPost 
                        emoji="🧵"
                        likes={86}
                        description="When I'm not coding, I'm creating in other ways! Latest sewing project complete #creativity #maker"
                    />
                </div>
            </div>
        </Html>
    );
} 