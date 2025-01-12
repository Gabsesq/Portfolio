// @ts-nocheck
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import "./style.css";
import { TextureLoader } from 'three';
import { Html } from "@react-three/drei";

export default function Room() {
    // Load all 3D models
    const bed = useLoader(GLTFLoader, "/bed.glb");
    const table = useLoader(GLTFLoader, "/table.glb");
    const monitor = useLoader(GLTFLoader, "/monitor.glb");
    const laptop = useLoader(GLTFLoader, "/laptop.glb");
    const dresser = useLoader(GLTFLoader, "/dresser.glb");
    const lamp = useLoader(GLTFLoader, "/lamp.glb");
    const deskLamp = useLoader(GLTFLoader, "/deskLamp.glb");
    const mirror = useLoader(GLTFLoader, "/mirror.glb");
    const chair = useLoader(GLTFLoader, "/chair.glb");
    const woodTexture = useLoader(TextureLoader, "/woodFloor.jfif");
    const window = useLoader(GLTFLoader, "/window.glb");
    const curtains = useLoader(GLTFLoader, "/CURTAINS.glb");
    const { camera, gl } = useThree();
    const initialPosition = useRef(camera.position.clone());

    useEffect(() => {
        gl.setClearColor(new THREE.Color('black'), 1);
    }, [gl]);

    // Change bed material
    useEffect(() => {
        if (bed.scene) {
            const whiteMaterial = new THREE.MeshStandardMaterial({
                color: new THREE.Color('#FFFFFF'), // White
                roughness: 0.3,
                metalness: 0.1
            });

            bed.scene.traverse((child) => {
                if (child.isMesh) {
                    console.log("Mesh name:", child.name);
                    console.log("Current material:", child.material);
                    console.log("------------------------");
                    
                    // Change all bed-related meshes
                    if (child.name.toLowerCase().includes('bed')) {
                        child.material = whiteMaterial;
                    }
                }
            });
        }
    }, [bed]);

    useEffect(() => {
        if (woodTexture) {
            woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
            woodTexture.repeat.set(8, 8);
            woodTexture.encoding = THREE.sRGBEncoding;
            woodTexture.magFilter = THREE.NearestFilter;
            woodTexture.minFilter = THREE.LinearMipmapLinearFilter;
            woodTexture.generateMipmaps = true;
        }
    }, [woodTexture]);


    // Add this function at the top of your Room component to create a reusable box
    const IkeaBox = ({ position }) => {
        return (
            <mesh 
                position={position}
                rotation-y={Math.PI / 2}
            >
                <boxGeometry args={[30, 20, 35]} />
                <meshStandardMaterial 
                    color="white" 
                    roughness={0.2}
                />
                <mesh 
                    position={[0, 5, -18]}
                    rotation-y={Math.PI}
                >
                    <circleGeometry args={[2, 32]} />
                    <meshStandardMaterial 
                        color="black"
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </mesh>
        );
    };

    // Add this effect after your other useEffects
    useEffect(() => {
        if (curtains.scene) {
            const whiteMaterial = new THREE.MeshStandardMaterial({
                color: new THREE.Color('white'),
                roughness: 0.5,
                metalness: 0.1,
                transparent: true,
                opacity: 0.8
            });

            // Apply to original curtains
            curtains.scene.traverse((child) => {
                if (child.isMesh) {
                    child.material = whiteMaterial.clone();
                }
            });

            // Apply to cloned curtains
            const clonedCurtains = curtains.scene.clone();
            clonedCurtains.traverse((child) => {
                if (child.isMesh) {
                    child.material = whiteMaterial.clone();
                }
            });
        }
    }, [curtains]);

    return (
        <>
            {/* Lighting */}
            {/* Main ceiling light - warmer and brighter */}
            <pointLight 
                position={[0, 90, 0]}
                intensity={.5} 
                color="#ffd4a3" // Warmer color
                distance={400}
                decay={2}
            />
            
            {/* Increased ambient light for better overall illumination */}
            <ambientLight intensity={0.3} color="#fff5eb" />
            
            {/* Window light simulation */}
            <directionalLight 
                position={[-90, 160, -210]}  // Position matching first window
                intensity={1.2} 
                color="#ffecd9"
            />
            
            {/* Second window light */}
            <directionalLight 
                position={[212, 160, 80]}    // Position matching second window
                intensity={.3} 
                color="#ffecd9"
            />
            
            {/* Soft fill light */}
            <hemisphereLight 
                intensity={0.5}
                color="#ffd4a3"
                groundColor="#334"
            />
            
            {/* Room Structure - Made larger */}
            <mesh rotation-x={-Math.PI / 2} position={[0, -36, 0]}>
                <planeGeometry args={[450, 450]} />
                <meshStandardMaterial 
                    map={woodTexture}
                    roughness={0.7}
                    metalness={0.1}
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh position={[0, 114, -225]}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial 
                    color="#f0f0f0"     // Light gray color for walls
                    roughness={0.5}
                    metalness={0.1}
                />
            </mesh>

            <mesh position={[-225, 114, 0]} rotation-y={Math.PI / 2}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial 
                    color="#f0f0f0"
                    roughness={0.5}
                    metalness={0.1}
                />
            </mesh>

            <mesh position={[225, 114, 0]} rotation-y={-Math.PI / 2}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial 
                    color="#f0f0f0"
                    roughness={0.5}
                    metalness={0.1}
                />
            </mesh>

            {/* 3D Models - All scaled up */}
            {/* Bed */}
            <primitive 
                object={bed.scene} 
                position={[165, -15, -105]}
                scale={0.45}
            />

            {/* IKEA Storage Boxes - arranged in a line along z-axis with adjusted spacing */}
            <IkeaBox position={[140, -25, -35]} />
            <IkeaBox position={[140, -25, -70]} />
            <IkeaBox position={[140, -25, -105]} />
            <IkeaBox position={[140, -25, -140]} />
            <IkeaBox position={[140, -25, -175]} />

            {/* Table */}
            <primitive 
                object={table.scene} 
                position={[0, -36, 204]}
                scale={[750, 750, 1200]}
                rotation-y={1.6}
            />

            {/* First Monitor with custom screen content */}
            <primitive 
                object={monitor.scene} 
                position={[-30, 30, 210]}
                scale={500}
                rotation-y={45.4}
            >
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
                            width: '180px',
                            height: '80px',
                            background: '#1a1a1a',
                            color: 'white',
                            padding: '8px',
                            fontFamily: 'Arial, sans-serif',
                            overflow: 'auto',
                            transform: 'scale(-1, 1)',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#0084FF #1a1a1a',
                            msOverflowStyle: 'none',
                        }}
                    >
                        <div className="chat-container"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                fontSize: '12px'
                            }}
                        >
                            <div className="message-bubble"
                                style={{
                                    background: '#0084FF',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    maxWidth: '120px',
                                    marginBottom: '6px',
                                    alignSelf: 'flex-end',
                                    animation: 'fadeIn 0.5s ease-in',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Hi! I'm Ava 👋
                            </div>

                            <div className="message-bubble"
                                style={{
                                    background: '#0084FF',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    maxWidth: '120px',
                                    marginBottom: '6px',
                                    alignSelf: 'flex-end',
                                    animation: 'fadeIn 0.5s ease-in 0.5s',
                                    opacity: 0,
                                    animationFillMode: 'forwards',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Full Stack Developer specializing in React & Three.js 💻
                            </div>

                            <div className="message-bubble"
                                style={{
                                    background: '#0084FF',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    maxWidth: '120px',
                                    marginBottom: '6px',
                                    alignSelf: 'flex-end',
                                    animation: 'fadeIn 0.5s ease-in 1s',
                                    opacity: 0,
                                    animationFillMode: 'forwards',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Always exploring new technologies 🚀
                            </div>

                            <div className="message-bubble"
                                style={{
                                    background: '#0084FF',
                                    padding: '6px 10px',
                                    borderRadius: '6px',
                                    maxWidth: '120px',
                                    marginBottom: '6px',
                                    alignSelf: 'flex-end',
                                    animation: 'fadeIn 0.5s ease-in 1.5s',
                                    opacity: 0,
                                    animationFillMode: 'forwards',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Check out my projects! 🏠
                            </div>
                        </div>
                    </div>
                </Html>
            </primitive>

            {/* Second Monitor - Instagram Feed */}
            <primitive 
                object={monitor.scene.clone()}
                position={[57, 30, 210]}
                scale={500}
                rotation-y={45.7}
            >
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
                    

                        {/* Posts Feed */}
                        <div style={{ padding: '0' }}>
                            {/* Post 1 */}
                            <div style={{ marginBottom: '12px' }}>
                                {/* Post Header */}
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
                                {/* Post Image */}
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
                                {/* Post Actions */}
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

                            {/* Post 2 */}
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
                                    🤖
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
                                        89 likes
                                    </div>
                                    <div style={{ fontSize: '12px' }}>
                                        <span style={{ fontWeight: 'bold' }}>ava.codes</span>
                                        {' '}Launched my AI-powered chat application! #AI #WebDev
                                    </div>
                                </div>
                            </div>

                            {/* Post 3 */}
                            <div style={{ marginBottom: '12px' }}>
                                {/* Similar structure as above posts */}
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
                                    🌐
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
                                        156 likes
                                    </div>
                                    <div style={{ fontSize: '12px' }}>
                                        <span style={{ fontWeight: 'bold' }}>ava.codes</span>
                                        {' '}Web3 DApp now live on mainnet! Check it out 🎉
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Html>
            </primitive>

            {/* Laptop */}
            <primitive 
                object={laptop.scene} 
                position={[150, 8, -90]}
                scale={1.5}
                rotation-y={-.5}
            >
                {/* Laptop Screen */}
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
            </primitive>

            {/* Dresser */}
            <primitive 
                object={dresser.scene} 
                position={[-201, -36, -60]}
                scale={[90, 60, 75]}
                rotation-y={45.55}
            />

            {/* Lamp */}
            <primitive 
                object={lamp.scene} 
                position={[0, 240, -105]}
                scale={30}
                rotation-y={0}
            />

            {/* Desk Lamp */}
            <primitive 
                object={deskLamp.scene} 
                position={[-210, 40, -140]}
                scale={10}
                rotation-y={0}
            />
             {/* Desk Lamp 2 */}
             <primitive 
                object={deskLamp.scene.clone()} 
                position={[-210, 40, 20]}
                scale={10}
                rotation-y={0}
            />

            {/* Mirror */}
            <primitive 
                object={mirror.scene} 
                position={[-220, 50, -60]}
                scale={[30, 60, 50]}
                rotation-y={Math.PI / 1}
            />

            {/* Chair - temporarily removed */}
            {/* <primitive 
                object={chair.scene} 
                position={[0, 30, 120]}
                scale={4}
                rotation-y={Math.PI/4}
            /> */}

            {/* Sky planes behind windows */}
            <mesh 
                position={[-90, 160, -223]} // Slightly behind first window
                rotation-y={Math.PI}
            >
                <planeGeometry args={[120, 150]} />
                <meshStandardMaterial 
                    color="#55B3E1" 
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh 
                position={[223, 160, 80]} // Slightly behind second window
                rotation-y={Math.PI/2}
            >
                <planeGeometry args={[120, 150]} />
                <meshStandardMaterial 
                    color="#55B3E1"
                    
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Windows */}
            <primitive 
                object={window.scene} 
                position={[-90, 160, -210]}
                scale={.7}
                rotation-y={Math.PI}
            />

            <primitive 
                object={window.scene.clone()} 
                position={[212, 160, 80]}
                scale={.7}
                rotation-y={Math.PI/2}
            />

            {/* Curtains */}
            <primitive 
                object={curtains.scene} 
                position={[-90, 100, -210]}
                scale={2}
                rotation-y={Math.PI}
            />

            <primitive 
                object={curtains.scene.clone()} 
                position={[212, 100, 80]}
                scale={2}
                rotation-y={Math.PI/2}
            />

        </>
    );
}
