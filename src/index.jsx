// @ts-nocheck
import "./style.css";
import "./loading.css";
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
    const [loading, setLoading] = useState(true); // Loading state to show the 2D screen
    const [controlsEnabled, setControlsEnabled] = useState(false); // Start with controls disabled

    useEffect(() => {
        // Set a timer for 12 seconds to hide the loading screen
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowCanvas(true), 100);
        }, 8000); // 12 seconds (12,000 milliseconds)

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);

    return (
        <>
        {/* Show the loading screen for 12 seconds */}
        {loading ? (
            <div className="loading-screen">
                <h1>Loading...</h1>
                {/* You can add animations, spinners, or any other custom loading UI here */}
            </div>
        ) : (
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
        )}
        </>
    );
}

const rootElement = document.querySelector("#root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
