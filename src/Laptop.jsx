// @ts-nocheck
import { Html, Environment, PresentationControls } from "@react-three/drei";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import gsap from "gsap";


export default function Laptop() {
    const laptop = useLoader(GLTFLoader, "/NOKIA.glb");
    const floor = useLoader(GLTFLoader, "/SCENE.glb");
    const { camera } = useThree();
    const initialPosition = useRef(camera.position.clone());

    // Rotate the laptop model if needed
    laptop.scene.rotation.x = Math.PI / 2;

    const handleMouseEnter = () => {
        console.log("Mouse entered iframe");
        gsap.to(camera.position, {
            x: -2,
            y: 30,
            z: 200,
            duration: 1,
            ease: "power2.inOut"
        });
    };

    const handleMouseLeave = () => {
        console.log("Mouse left iframe");
        gsap.to(camera.position, {
            x: initialPosition.current.x,
            y: initialPosition.current.y,
            z: initialPosition.current.z,
            duration: 1,
            ease: "power2.inOut"
        });
    };

    return (
        <>
            <Environment preset="warehouse" />
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
                        onPointerEnter={handleMouseEnter}
                        onPointerLeave={handleMouseLeave}
                    >
                        <iframe src="https://2-d-for-portfolio.vercel.app/" />
                    </Html>
                </primitive>
            </PresentationControls>
        </>
    );
}
