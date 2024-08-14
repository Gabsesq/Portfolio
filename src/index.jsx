import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from 'three';  // Import Three.js Scene
import Camera from './camera';
import Laptop from "./Laptop.jsx";

const rootElement = document.querySelector("#root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    const scene = new Scene(); // Create a new Three.js scene

    // Create camera instance and pass the scene
    const cameraInstance = new Camera(scene);

    root.render(
        <Canvas>
            <Laptop camera={cameraInstance} scene={scene} /> {/* Pass the camera and scene as props */}
        </Canvas>
    );

    function animate() {
        requestAnimationFrame(animate);
        cameraInstance.update(); // Update camera
    }
    animate();
} else {
    console.error("Root element not found");
}
