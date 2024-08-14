// Laptop.jsx
import React from 'react';
import { Html, Environment, PresentationControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import './style.css';

export default function Laptop({ camera }) { // Receive camera as a prop
    const laptop = useLoader(GLTFLoader, "/NOKIA.glb");
    const floor = useLoader(GLTFLoader, "/SCENE.glb");

    const handleButtonClick = () => {
        console.log('Button Clicked!');
        camera.transition(CameraKey.DESK, 2000, TWEEN.Easing.Quadratic.InOut); // Use the passed camera instance
    };

    return (
        <>
            <Environment preset="warehouse" background={false} />
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

                    <Html
                        wrapperClass="button"
                        position={[0.02, 1.2, -.89]}
                        transform
                        distanceFactor={1.2}
                        rotation={[-Math.PI / 2, 0, 0]}
                    >
                        <button
                            style={{
                                padding: '30px 30px',
                                background: 'white',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer'
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
