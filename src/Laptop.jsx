// @ts-nocheck
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import "./style.css";
import { TextureLoader } from 'three';

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
        gl.setClearColor(new THREE.Color('black'),1);
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
                position={[0, 30, 0]} 
                intensity={5} 
                color="#ff9966" 
                distance={200}
                decay={2}
            />
            <ambientLight intensity={0.2} color="#ffddcc" />
            <directionalLight 
                position={[0, 20, 50]} 
                intensity={0.3} 
                color="#fff5eb"
            />
            
            {/* Room Structure */}
            <mesh rotation-x={-Math.PI / 2} position={[0, -12, 0]}>
                <planeGeometry args={[150, 150]} />
                <meshStandardMaterial 
                    map={woodTexture}
                    roughness={0.8}
                />
            </mesh>

            <mesh position={[0, 38, -75]}>
                <planeGeometry args={[150, 100]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            <mesh position={[-75, 38, 0]} rotation-y={Math.PI / 2}>
                <planeGeometry args={[150, 100]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            <mesh position={[75, 38, 0]} rotation-y={-Math.PI / 2}>
                <planeGeometry args={[150, 100]} />
                <meshStandardMaterial color="white" roughness={0.2} />
            </mesh>

            {/* 3D Models */}
            {/* Bed */}
            <primitive 
                object={bed.scene} 
                position={[55, -5, -35]}
                scale={.15}
            />

            {/* Table */}
            <primitive 
                object={table.scene} 
                position={[0, -12, 68]}
                scale={[250, 250, 400]}
                rotation-y={1.6}
            />

            {/* First Monitor */}
            <primitive 
                object={monitor.scene} 
                position={[-10, 10, 70]}
                scale={180}
                rotation-y={45.4}
            />

            {/* Second Monitor */}
            <primitive 
                object={monitor.scene.clone()}
                position={[19, 10, 70]}
                scale={180}
                rotation-y={45.7}
            />

            {/* Laptop */}
            <primitive 
                object={laptop.scene} 
                position={[50, .5, -30]}
                scale={.5}
                rotation-y={-.5}
            />

            {/* Dresser */}
            <primitive 
                object={dresser.scene} 
                position={[-67, -12, -20]}
                scale={[30, 20, 25]}
                rotation-y={45.55}
            />

            {/* Lamp */}
            <primitive 
                object={lamp.scene} 
                position={[0, 80, -35]}
                scale={10}
                rotation-y={0}
            />
        </>
    );
}
