// @ts-nocheck
import { Html, Environment, PresentationControls } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import * as THREE from 'three';
import "./style.css"

export default function Laptop() {
    const laptop = useLoader(GLTFLoader, "/NOKIA.glb");
    const floor = useLoader(GLTFLoader, "/SCENE.glb");
    const { camera, gl } = useThree(); // Include 'gl' for setting background color
    const initialPosition = useRef(camera.position.clone());
    const buttonRef = useRef();

    // Rotate the laptop model if needed
    laptop.scene.rotation.x = Math.PI / 2;

    // Set the background to black
    useEffect(() => {
        gl.setClearColor(new THREE.Color('black'));
    }, [gl]);

    useEffect(() => {
        // Make the button blink by animating opacity
        gsap.to(buttonRef.current, {
            opacity: 0,
            duration: .99,
            repeat: -1, // Infinite loop
            yoyo: true, // Reverse the animation
            ease: "power1.inOut"
        });
    }, []);

    const handleButtonClick = () => {
        console.log('Button Clicked!');
        // Animate the camera to a new position when the button is clicked
        gsap.to(camera.position, {
            x: .01,
            y: 1.7,
            z: 4,
            duration: 1,
            ease: "power2.inOut"
        });
    }

    return (
        <>
            <Environment preset="warehouse" background={false} /> {/* Ensure background is false */}
            <PresentationControls global polar={[-0.4, 0.2]}>
                <primitive object={floor.scene} position-y={-1.5} />
                <primitive object={laptop.scene} position-y={-1}>
                    <Html
                        wrapperClass="laptop"
                        position={[.03, 1.15, -1.54]}
                        transform
                        distanceFactor={1.16}
                        rotation-x={-1.6}
                        rotation-y={-.01}
                        rotation-z={-.001}
                    >
                        <iframe src="https://2-d-for-portfolio.vercel.app/" />
                    </Html>

                    {/* Add the button inside the 3D scene */}
                    <Html
                        wrapperClass="button"
                        position={[0.02, 1.2, -.89]}
                        transform
                        distanceFactor={1.2}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <button
                            ref={buttonRef}
                            style={{
                                padding: '30px 30px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer'
                            }}
                            onClick={handleButtonClick}
                        >
                            
                        </button>
                    </Html>
                </primitive>
            </PresentationControls>
        </>
    );
}
