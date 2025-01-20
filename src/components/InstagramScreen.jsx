import { Html } from "@react-three/drei";

export default function InstagramScreen() {
    return (
        <Html
            transform
            wrapperClass="monitor-screen"
            position={[0.02, 0.05, 0]}
            rotation-x={0}
            rotation-y={-1.55}
            rotation-z={0}
            distanceFactor={.3}
            occlude
        >
            <div className="screen-content"
                style={{
                    width: '200px',
                    height: '95px',
                    background: '#000000',
                    color: 'white',
                    padding: '0',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                    overflow: 'auto',
                    transform: 'scale(-1, 1)',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#8e8e8e #000000',
                }}
            >
                <div style={{ padding: '0' }}>
                    {/* Post 1 */}
                    <div style={{ marginBottom: '12px' }}>
                        <div style={{
                            padding: '8px',
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
                                fontSize: '12px'
                            }}>A</div>
                            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>ava.codes</span>
                        </div>
                        <div style={{
                            width: '100%',
                            height: '180px',
                            background: '#1a1a1a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px'
                        }}>
                            🎮
                        </div>
                        <div style={{ padding: '8px' }}>
                            <div style={{ 
                                display: 'flex', 
                                gap: '12px', 
                                fontSize: '14px',
                                marginBottom: '6px'
                            }}>
                                ❤️ 💬 📤
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                42 likes
                            </div>
                            <div style={{ fontSize: '12px' }}>
                                <span style={{ fontWeight: 'bold' }}>ava.codes</span>
                                {' '}Built a custom game engine using Three.js and React 🚀
                            </div>
                        </div>
                    </div>

                    {/* Additional Instagram posts... */}
                </div>
            </div>
        </Html>
    );
} 