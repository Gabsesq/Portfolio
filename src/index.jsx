// @ts-nocheck
import "./style.css";
import "./loading.css";
import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import Room from "./Laptop.jsx";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import gsap from "gsap";


export default function CameraAnimation({ onComplete }) {
    const { camera } = useThree();

    useEffect(() => {
        // Calculate the target position based on screen width and height
        const targetX = window.innerWidth * 0;
        const targetZ = window.innerHeight * 0.6;

        // GSAP animation to zoom based on calculated responsive values
        gsap.to(camera.position, {
            z: targetZ, // Target z position based on screen height
            y: 2, // You can keep this fixed or make it responsive as well
            x: targetX, // Target x position based on screen width
            duration: 3,
            ease: "power2.inOut",
            onComplete,
        });
        
        // Add a resize listener to recalculate the target positions on window resize
        const handleResize = () => {
            const newTargetX = window.innerWidth * 0;
            const newTargetZ = window.innerHeight * 0.6;

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
    const [controlsEnabled, setControlsEnabled] = useState(false);

    return (
        <Canvas
            camera={{
                fov: 20,
                near: 0.1,
                far: 10000,
                position: [0, 0.5, 3000],
            }}
            style={{ background: 'white' }}
        >
            <OrbitControls 
                enableZoom={true} 
                enablePan={true}
                maxDistance={5000}
                minDistance={10}
            />
            <Room />
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
