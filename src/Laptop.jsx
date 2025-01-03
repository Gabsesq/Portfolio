// @ts-nocheck
import { Html, Environment, PresentationControls } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import "./style.css";
import { TextureLoader } from 'three';

export default function Room() {
    const nokia = useLoader(GLTFLoader, "/NOKIA.glb");
    const bed = useLoader(GLTFLoader, "/bed.glb");
    const woodTexture = useLoader(TextureLoader, "/woodFloor.jfif");
    const { camera, gl } = useThree();
    const initialPosition = useRef(camera.position.clone());

    // Rotate the nokia model
    nokia.scene.rotation.x = Math.PI / 2;
    
    useEffect(() => {
        gl.setClearColor(new THREE.Color('black'),1);
    }, [gl]);

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
            woodTexture.repeat.set(4, 4); // Adjust these numbers to change the texture repeat
            woodTexture.encoding = THREE.sRGBEncoding;
        }
    }, [woodTexture]);

    return (
        <>
            {/* Replace Environment with custom lighting */}
            {/* Ceiling Light */}
            <pointLight 
                position={[0, 45, 0]} 
                intensity={5} 
                color="#ff9966" 
                distance={200}
                decay={2}
            />
            
            {/* Ambient light for base illumination */}
            <ambientLight intensity={0.2} color="#ffddcc" />
            
            {/* Subtle fill light from the front */}
            <directionalLight 
                position={[0, 20, 50]} 
                intensity={0.3} 
                color="#fff5eb"
            />
            
            {/* Room Walls and Floor */}
            {/* Floor */}
            <mesh rotation-x={-Math.PI / 2} position={[0, -12, 0]}>
                <planeGeometry args={[150, 150]} />
                <meshStandardMaterial 
                    map={woodTexture}
                    roughness={0.8}
                />
            </mesh>

            {/* Back Wall */}
            <mesh position={[0, 38, -75]}>
                <planeGeometry args={[150, 100]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            {/* Left Wall */}
            <mesh position={[-75, 38, 0]} rotation-y={Math.PI / 2}>
                <planeGeometry args={[150, 100]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            {/* Right Wall */}
            <mesh position={[75, 38, 0]} rotation-y={-Math.PI / 2}>
                <planeGeometry args={[150, 100]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            {/* Nokia Phone with iframe */}
            <primitive object={nokia.scene} position-y={-1}>
                <Html
                    wrapperClass="laptop"
                    position={[-.27, 1.15, -1.54]}
                    transform
                    distanceFactor={1.16}
                    rotation-x={-1.6}
                    rotation-y={-.01}
                    rotation-z={-.001}
                >
                    <iframe src="https://2-d-for-portfolio.vercel.app/" />
                </Html>
            </primitive>

            {/* Bed model */}
            <primitive 
                object={bed.scene} 
                position={[55, -5, -35]}
                scale={.15}
            />
        </>
    );
}
