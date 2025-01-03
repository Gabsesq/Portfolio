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
            bed.scene.traverse((child) => {
                if (child.name === "group 1" || child.name === "group1") {
                    child.material = new THREE.MeshStandardMaterial({
                        color: new THREE.Color('orange'),
                        roughness: 0.5,
                        metalness: 0.5
                    });
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

    return (
        <>
            {/* Lighting */}
            <pointLight 
                position={[0, 90, 0]}
                intensity={5} 
                color="#ff9966" 
                distance={300}
                decay={2}
            />
            <ambientLight intensity={0.1} color="#ffddcc" />
            <directionalLight 
                position={[0, 20, 150]}
                intensity={0.3} 
                color="#fff5eb"
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
                <meshStandardMaterial color="#EAD4B6" roughness={0.2} />
            </mesh>

            <mesh position={[-225, 114, 0]} rotation-y={Math.PI / 2}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial color="#EAD4B6" roughness={0.2} />
            </mesh>

            <mesh position={[225, 114, 0]} rotation-y={-Math.PI / 2}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial color="#EAD4B6" roughness={0.2} />
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
                    distanceFactor={.7}
                    occlude
                >
                    <div className="screen-content"
                        style={{
                            width: '42px',
                            height: '1px',
                            background: 'white',
                            color: 'black',
                            padding: '20px',
                            fontFamily: 'Arial, sans-serif',
                            overflow: 'hidden',
                            transform: 'scale(-1, 1)'
                        }}
                    >
                        <h2 style={{ 
                            fontSize: '0.4px',
                            marginBottom: '0.2px',
                            fontWeight: 'bold'
                        }}>
                            About Me
                        </h2>
                        <p style={{ 
                            fontSize: '10px',
                            lineHeight: '0.35px',
                            marginBottom: '0.2px'
                        }}>
                            Hi! 
                        </p>
                    </div>
                </Html>
            </primitive>

            {/* Second Monitor */}
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
                    distanceFactor={.7}
                    occlude
                >
                    <div className="screen-content"
                        style={{
                            width: '42px',
                            height: '1px',
                            background: 'white',
                            color: 'black',
                            padding: '20px',
                            fontFamily: 'Arial, sans-serif',
                            overflow: 'hidden',
                            transform: 'scale(-1, 1)'
                        }}
                    >
                        <h1>Projects</h1>
                        <div className="project-showcase">
                            {/* Add different content for second monitor */}
                        </div>
                    </div>
                </Html>
            </primitive>

            {/* Laptop */}
            <primitive 
                object={laptop.scene} 
                position={[150, 1.5, -90]}
                scale={1.5}
                rotation-y={-.5}
            />

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

            {/* Chair */}
            <primitive 
                object={chair.scene} 
                position={[0, 30, 120]}
                scale={4}
                rotation-y={Math.PI/4}
            />

            {/* Sky planes behind windows */}
            <mesh 
                position={[-90, 160, -223]} // Slightly behind first window
                rotation-y={Math.PI}
            >
                <planeGeometry args={[120, 150]} />
                <meshStandardMaterial 
                    color="#55B3E1" 
                    emissive="#44C1FE"
                    emissiveIntensity={0.1}
                    side={THREE.DoubleSide}
                />
            </mesh>

            <mesh 
                position={[213, 160, 80]} // Slightly behind second window
                rotation-y={Math.PI/2}
            >
                <planeGeometry args={[120, 150]} />
                <meshStandardMaterial 
                    color="#55B3E1"
                    emissive="#44C1FE"
                    emissiveIntensity={0.1}
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
                position={[200, 160, 80]}
                scale={.7}
                rotation-y={Math.PI/2}
            />

        </>
    );
}
