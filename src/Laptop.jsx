// @ts-nocheck
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import * as THREE from 'three';
import "./style.css";
import { TextureLoader } from 'three';
import { Html } from "@react-three/drei";
import BlogScreen from './components/BlogScreen';
import ChatScreen from './components/ChatScreen';
import InstagramScreen from './components/InstagramScreen';
import ContactScreen from './components/ContactScreen';

export default function Room() {
    // Load all 3D models
    const bed = useLoader(GLTFLoader, "/bed.glb");
    const table = useLoader(GLTFLoader, "/table.glb");
    const monitor = useLoader(GLTFLoader, "/monitor.glb");
    const laptop = useLoader(GLTFLoader, "/laptop.glb");
    const ipad = useLoader(GLTFLoader, "/ipad.glb");
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
            woodTexture.repeat.set(4, 4);        // Reduced from 8,8 for larger planks
            woodTexture.encoding = THREE.sRGBEncoding;
            woodTexture.magFilter = THREE.LinearFilter;  // Changed from NearestFilter
            woodTexture.minFilter = THREE.LinearMipmapLinearFilter;
            woodTexture.generateMipmaps = true;
            woodTexture.anisotropy = 16;         // Added for sharper texture at angles
            woodTexture.needsUpdate = true;      // Added to ensure updates
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
                    roughness={0.8}      // Added for more realistic wood
                    metalness={0.2}      // Added for more realistic wood
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

            {/* First Monitor */}
            <primitive 
                object={monitor.scene} 
                position={[-30, 30, 210]}
                scale={500}
                rotation-y={45.4}
            >
                <ChatScreen />
            </primitive>

            {/* Second Monitor */}
            <primitive 
                object={monitor.scene.clone()}
                position={[57, 30, 210]}
                scale={500}
                rotation-y={45.7}
            >
                <InstagramScreen />
            </primitive>

            {/* Laptop */}
            <primitive 
                object={laptop.scene} 
                position={[150, 8, -90]}
                scale={1.5}
                rotation-y={-.5}
            >
                <BlogScreen />
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

            {/* Add iPad */}
            <primitive 
                object={ipad.scene} 
                position={[-200, 40, -67]}
                scale={.5}
                rotation-y={1.6}
            >
                <ContactScreen />
            </primitive>

        </>
    );
}
