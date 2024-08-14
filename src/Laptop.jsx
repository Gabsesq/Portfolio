// @ts-nocheck
import { Html, Environment, PresentationControls } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import "./style.css";

export default function Laptop() {
    const laptop = useLoader(GLTFLoader, "/NOKIA.glb");
    const floor = useLoader(GLTFLoader, "/SCENE.glb");
    const { camera, gl } = useThree();
    const initialPosition = useRef(camera.position.clone());
    const buttonRef = useRef();

    // Rotate the laptop model if needed
    laptop.scene.rotation.x = Math.PI / 2;

    // Set the background to black
    useEffect(() => {
        gl.setClearColor(new THREE.Color('black'));
    }, [gl]);


    const handleButtonClick = () => {
        console.log('Button Clicked!');

        // Animate the camera to a new position using TWEEN
        new TWEEN.Tween(camera.position)
            .to({ x: .01, y: 1.7, z: 4 }, 1000) // Target position over 1 second
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
                camera.lookAt(0, 0, 0); // Ensure the camera looks at the origin during animation
            })
            .start();
    };

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
                                cursor: 'pointer',
                                opacity: 1 // Start with full opacity
                            }}
                            onClick={handleButtonClick}
                        >
                            {/* Button content */}
                        </button>
                    </Html>
                </primitive>
            </PresentationControls>
        </>
    );
}
