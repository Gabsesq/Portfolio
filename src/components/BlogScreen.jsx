import { Html } from "@react-three/drei";

export default function BlogScreen() {
    return (
        <Html
            transform
            wrapperClass="laptop-screen"
            position={[0, 10.8, -10]}
            rotation-x={0}
            rotation-y={0}
            rotation-z={0}
            distanceFactor={15}
            occlude
        >
            <div style={{
                width: '735px',
                height: '440px',
                background: '#1a1a1a',
                padding: '20px',
                border: '1px solid #333',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                fontFamily: 'Arial, sans-serif',
                color: '#fff',
                overflow: 'hidden',
                fontSize: '14px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <h2 style={{ margin: 0, fontSize: '36px' }}>My Blog</h2>
                    <button style={{
                        background: '#0084FF',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '24px'
                    }}>
                        New Post
                    </button>
                </div>

                <div style={{
                    background: '#2a2a2a',
                    padding: '10px',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>
                    <textarea
                        style={{
                            width: '100%',
                            minHeight: '100px',
                            background: '#333',
                            border: '1px solid #444',
                            borderRadius: '4px',
                            padding: '8px',
                            color: 'white',
                            resize: 'vertical',
                            fontFamily: 'inherit'
                        }}
                        placeholder="Write your blog post here..."
                    />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '10px',
                        marginTop: '10px'
                    }}>
                        <button style={{
                            background: '#555',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer'
                        }}>
                            Cancel
                        </button>
                        <button style={{
                            background: '#0084FF',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer'
                        }}>
                            Post
                        </button>
                    </div>
                </div>

                {/* Sample Blog Posts */}
                <div style={{
                    background: '#2a2a2a',
                    padding: '10px',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>
                        Getting Started with Three.js
                    </h3>
                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#aaa' }}>
                        Three.js is a powerful library for creating 3D graphics...
                    </p>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                        Posted on March 15, 2024
                    </div>
                </div>

                <div style={{
                    background: '#2a2a2a',
                    padding: '10px',
                    borderRadius: '4px'
                }}>
                    <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>
                        React Best Practices
                    </h3>
                    <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#aaa' }}>
                        Here are some React patterns I've learned...
                    </p>
                    <div style={{ fontSize: '12px', color: '#666' }}>
                        Posted on March 10, 2024
                    </div>
                </div>
            </div>
        </Html>
    );
} 