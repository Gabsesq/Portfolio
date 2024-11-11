// @ts-nocheck
import { Html, Environment, PresentationControls } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef, useEffect } from "react";
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
    floor.scene.rotation.y = -Math.PI/2;

    // Set the background to black
    useEffect(() => {
        gl.setClearColor(new THREE.Color('black'),1);
    }, [gl]);




    return (
        <>
            <Environment preset="warehouse" background={false} /> {/* Ensure background is false */}
                <primitive object={floor.scene} position-y={-1.5} />
                <primitive object={laptop.scene} position-y={-1}>
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
        </>
    );
}
