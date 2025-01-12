// @ts-nocheck
import "./style.css";
import "./loading.css";
import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import Room from "./Laptop.jsx";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import gsap from "gsap";


export default function CameraAnimation({ activeView }) {
    const { camera } = useThree();

    const viewPositions = {
        default: {
            position: { x: -200, y: 100, z: 400 },
            rotation: { x: -0.2, y: -5, z: 0 }
        },
        about: {
            position: { x: -20, y: 40, z: -10 },
            rotation: { x: 200, y: 0, z: -20 }
        },
        projects: {
            position: { x: 90, y: 40, z: -10 },
            rotation: { x: 0, y: -Math.PI / -1.05, z: 0 }
        },
        contact: {
            position: { x: 122, y: 20, z: -50 },
            rotation: { x: 0, y: -Math.PI / 5.5, z: 0 }
        }
    };

    useEffect(() => {
        if (activeView === 'default') return;

        const view = viewPositions[activeView];
        
        gsap.to(camera.position, {
            x: view.position.x,
            y: view.position.y,
            z: view.position.z,
            duration: 2,
            ease: "power2.inOut"
        });

        gsap.to(camera.rotation, {
            x: view.rotation.x,
            y: view.rotation.y,
            z: view.rotation.z,
            duration: 2,
            ease: "power2.inOut"
        });
    }, [camera, activeView]);

    return null;
}

function App() {
    const [activeView, setActiveView] = useState('default');

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    return (
        <>
            {/* Navigation Menu */}
            <div className="nav-menu">
                <button 
                    className={`nav-item ${activeView === 'about' ? 'active' : ''}`}
                    onClick={() => handleViewChange('about')}
                >
                    About Me
                </button>
                <button 
                    className={`nav-item ${activeView === 'projects' ? 'active' : ''}`}
                    onClick={() => handleViewChange('projects')}
                >
                    Projects
                </button>
                <button 
                    className={`nav-item ${activeView === 'contact' ? 'active' : ''}`}
                    onClick={() => handleViewChange('contact')}
                >
                    Contact
                </button>
            </div>

            <Canvas
                camera={{
                    fov: 45,
                    near: .1,
                    far: 10000,
                    position: [-270, 160, 400],
                    rotation: [-.2, -.6, -.1]
                }}
                gl={{ alpha: false }}
            >
                <Room />
                <CameraAnimation activeView={activeView} />
                <OrbitControls 
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    minDistance={100}
                    maxDistance={1000}
                />
            </Canvas>
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
