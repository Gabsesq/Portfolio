// @ts-nocheck
import "./style.css";
import "./loading.css";
import ReactDOM from "react-dom/client";
import { Canvas, useThree } from "@react-three/fiber";
import Room from "./Laptop.jsx";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState, Suspense } from "react";
import gsap from "gsap";
import { useProgress } from "@react-three/drei";
import LoadingScreen from "./components/LoadingScreen";


export default function CameraAnimation({ activeView }) {
    const { camera } = useThree();
    
    // Calculate base values relative to screen size
    const baseZ = window.innerWidth * 0.4; // 40% of screen width
    const projectZ = window.innerWidth * .075; // 11.5% of screen width
    const blogZ = window.innerWidth * -.033; // -5% of screen width
    const aboutZ = window.innerWidth * .075; // -1% of screen width

    const viewPositions = {
        default: {
            position: { x: -200, y: 100, z: baseZ },
            rotation: { x: -0.2, y: -5, z: 0 }
        },
        about: {
            position: { x: -20, y: 55, z: projectZ },
            rotation: { x: 0, y: -Math.PI / .96, z: 0 }
        },
        projects: {
            position: { x: 45, y: 55, z: projectZ },
            rotation: { x: 0, y: -Math.PI / 1.05, z: 0 }
        },
        blog: {
            position: { x: 130, y: 20, z: blogZ },
            rotation: { x: 0, y: -Math.PI / 6, z: 0 }
        },
        contact: {
            position: { x: -130, y: 60, z: -60},
            rotation: { x: 0, y: Math.PI / 2, z: 0 }
        }
    };

    // Add window resize listener
    useEffect(() => {
        const handleResize = () => {
            const newBaseZ = window.innerWidth * 0.4;
            const newProjectZ = window.innerWidth * 0.115;
            const newBlogZ = window.innerWidth * -0.05;
            const newAboutZ = window.innerWidth * -0.01;

            viewPositions.default.position.z = newBaseZ;
            viewPositions.projects.position.z = newProjectZ;
            viewPositions.blog.position.z = newBlogZ;
            viewPositions.about.position.z = newAboutZ;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
    const { progress } = useProgress();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (progress === 100) {
            // Add a small delay before hiding loading screen
            const timeout = setTimeout(() => {
                setIsLoading(false);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [progress]);

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    return (
        <>
            {isLoading && <LoadingScreen progress={progress} />}
            
            <div className="nav-menu" style={{ 
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.5s ease-in, top 0.5s ease-in-out',
                top: (activeView === 'about' || activeView === 'projects') ? '2rem' : '50%',
                transform: (activeView === 'about' || activeView === 'projects') 
                    ? 'translateY(0)' 
                    : 'translateY(-50%)'
            }}>
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
                    className={`nav-item ${activeView === 'blog' ? 'active' : ''}`}
                    onClick={() => handleViewChange('blog')}
                >
                    Blog
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
                <Suspense fallback={null}>
                    <Room />
                    <CameraAnimation activeView={activeView} />
                    <OrbitControls 
                        enabled={false}
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                </Suspense>
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
