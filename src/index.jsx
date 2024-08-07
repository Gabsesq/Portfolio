import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop.jsx";

const rootElement = document.querySelector("#root"); // Ensure correct selector

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Correctly define root
    root.render(
        <Canvas
            camera={{
                fov: 20,
                near: 1,
                far: 2000,
                position: [-2, 2.0, 15],
            }}
        >
            <Laptop />
        </Canvas>
    );
} else {
    console.error("Root element not found");
}