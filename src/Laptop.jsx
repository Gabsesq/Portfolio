import { Html, useGLTF, Environment, PresentationControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Laptop() {
    const laptop = useLoader(GLTFLoader, "/NOKIA.glb"); // Adjust the path according to your file structure
    const floor = useLoader(GLTFLoader, "/SCENE.glb");  // Load SCENE.glb
    
    // Rotate the laptop model if needed
    laptop.scene.rotation.x = Math.PI / 2;

    return (
        <>
            <Environment preset="warehouse" />
            <PresentationControls global polar={[-0.4, 0.2]}>
                {/* Render the SCENE.glb model */}
                <primitive 
                    object={floor.scene} 
                    position-y={-1.5} // Adjust position as needed
                />

                {/* Render the NOKIA.glb model */}
                <primitive 
                    object={laptop.scene} 
                    position-y={-1}
                >
                    <Html
                        wrapperClass="laptop"
                        position={[.03, 1.15, -1.54]}
                        transform
                        distanceFactor={1.16}
                        rotation-x={-1.6}
                        rotation-y={-.01}
                        rotation-z={-.001}
                    >
                        <iframe src="https://2-d-for-portfolio.vercel.app/" />
                    </Html>
                </primitive>
            </PresentationControls>
        </>
    );
}
