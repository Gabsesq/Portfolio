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


export default function CameraAnimation({ onComplete }) {
    const { camera } = useThree();

    useEffect(() => {
        // Calculate the target position based on screen width and height
        const targetX = window.innerWidth * 0;
        const targetZ = window.innerHeight * .009;

        // GSAP animation to zoom based on calculated responsive values
        gsap.to(camera.position, {
            z: targetZ, // Target z position based on screen height
            y: 2, // You can keep this fixed or make it responsive as well
            x: targetX, // Target x position based on screen width
            duration: 4,
            ease: "power2.inOut",
            onComplete,
        });
        
        // Add a resize listener to recalculate the target positions on window resize
        const handleResize = () => {
            const newTargetX = window.innerWidth * 0;
            const newTargetZ = window.innerHeight * .009;

            gsap.to(camera.position, {
                z: newTargetZ,
                x: newTargetX,
                duration: 1, // Smooth adjustment on resize
                ease: "power2.inOut",
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize); // Clean up the event listener
        };
    }, [camera, onComplete]);

    return null;
}

function App() {
    const [loading, setLoading] = useState(true); // Loading state to show the 2D screen
    const [controlsEnabled, setControlsEnabled] = useState(false); // Start with controls disabled

    useEffect(() => {
        // Set a timer to hide the loading screen
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); 

        return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }, []);

    return (
        <>
        {/* Show the loading screen for x seconds */}
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
                position: [0, 0.5, 1000], // Initial camera position
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
