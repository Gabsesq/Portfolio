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
    const woodTexture = useLoader(TextureLoader, "/woodFloor.jfif");
    const { camera, gl } = useThree();
    const initialPosition = useRef(camera.position.clone());

    useEffect(() => {
        gl.setClearColor(new THREE.Color('white'), 1);
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
            woodTexture.repeat.set(4, 4);
            woodTexture.encoding = THREE.sRGBEncoding;
        }
    }, [woodTexture]);

    return (
        <>
            {/* Lighting */}
            <pointLight 
                position={[0, 90, 0]}
                intensity={5} 
                color="#ff9966" 
                distance={600}
                decay={2}
            />
            <ambientLight intensity={0.2} color="#ffddcc" />
            <directionalLight 
                position={[0, 60, 150]}
                intensity={0.3} 
                color="#fff5eb"
            />
            
            {/* Room Structure - Made larger */}
            <mesh rotation-x={-Math.PI / 2} position={[0, -36, 0]}>
                <planeGeometry args={[450, 450]} />
                <meshStandardMaterial 
                    map={woodTexture}
                    roughness={0.8}
                />
            </mesh>

            <mesh position={[0, 114, -225]}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            <mesh position={[-225, 114, 0]} rotation-y={Math.PI / 2}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            <mesh position={[225, 114, 0]} rotation-y={-Math.PI / 2}>
                <planeGeometry args={[450, 300]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            {/* 3D Models - All scaled up */}
            {/* Bed */}
            <primitive 
                object={bed.scene} 
                position={[165, -15, -105]}
                scale={0.45}
            />

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
        </>
    );
}
