// @ts-nocheck
import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import Laptop from "./Laptop.jsx";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Disco from "./Disco.jsx";

function CameraAnimation({ onComplete }) {
    const { camera } = useThree();

    useEffect(() => {
        // Zoom in the camera when the page loads
        gsap.to(camera.position, {
            z: 6, // Target position on the z-axis for zooming in
            y:2,
            x:.02,
            duration: 4, // Duration of the zoom effect
            ease: "power2.inOut", // Easing function
            onComplete, // Call the onComplete function after the animation
        });
    }, [camera, onComplete]);

    return null;
}

function App() {
    const [controlsEnabled, setControlsEnabled] = useState(false); // Start with controls disabled

    return (
        <Canvas
            camera={{
                fov: 20,
                near: 1,
                far: 2000,
                position: [0, .5, 1000], // Initial camera position
            }}
        >
            
            <OrbitControls enableZoom={true} enablePan={true} />
            <Disco /> 
            <Laptop />
            <CameraAnimation onComplete={() => setControlsEnabled(true)} />
        </Canvas>
    );
}

const rootElement = document.querySelector("#root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
