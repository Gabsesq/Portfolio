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
    
    // Define breakpoints
    const isSmallScreen = window.innerWidth < 768;
    const isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Base positions based on screen size
    const positions = {
        small: {
            blog: { x: 115, y: 23, z: -25 },
            contact: { x: -130, y: 60, z: -70 },
            about: { x: -10, y: 55, z: 60},
            projects: { x: 20, y: 55, z: 60 }
        },
        medium: {
            blog: { x: 120, y: 23, z: -55 },
            contact: { x: -100, y: 60, z: -70 },
            about: { x: -20, y: 55, z: 100 },
            projects: { x: 45, y: 55, z: 100 }
        },
        large: {
            blog: { x: 135, y: 23, z: -65 },
            contact: { x: -130, y: 60, z: -60 },
            about: { x: -20, y: 55, z: 100 },
            projects: { x: 45, y: 55, z: 100 }
        }
    };

    // Select position based on screen size
    const currentSize = isSmallScreen ? 'small' : (isMediumScreen ? 'medium' : 'large');

    const viewPositions = {
        default: {
            position: { x: -200, y: 100, z: 400 },
            rotation: { x: -0.2, y: -5, z: 0 }
        },
        about: {
            position: positions[currentSize].about,
            rotation: { x: 0, y: -Math.PI / .96, z: 0 }
        },
        projects: {
            position: positions[currentSize].projects,
            rotation: { x: 0, y: -Math.PI / 1.05, z: 0 }
        },
        blog: {
            position: positions[currentSize].blog,
            rotation: { x: 0, y: -Math.PI / 6.3, z: 0 }
        },
        contact: {
            position: positions[currentSize].contact,
            rotation: { x: 0, y: Math.PI / 2, z: 0 }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const newIsSmallScreen = window.innerWidth < 768;
            const newIsMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024;
            const newSize = newIsSmallScreen ? 'small' : (newIsMediumScreen ? 'medium' : 'large');
            
            // Update blog and contact positions
            viewPositions.blog.position = positions[newSize].blog;
            viewPositions.contact.position = positions[newSize].contact;
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
                transition: 'opacity 0.5s ease-in',
                position: 'fixed',
                top: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                width: 'fit-content'
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
                style={{ background: 'black' }}
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

// Add back the root rendering
const rootElement = document.querySelector("#root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
