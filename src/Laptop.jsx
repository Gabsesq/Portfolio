import { Html, useGLTF, Environment, PresentationControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Laptop() {
    const laptop = useLoader(GLTFLoader, "/NOKIA.glb"); // Adjust the path according to your file structure

    return (
        <>
            <Environment preset="warehouse" />
            <PresentationControls global polar={[-0.4, 0.2]}>
                <primitive object={laptop.scene} position-y={-1.2}>
                    <Html
                        wrapperClass="laptop"
                        position={[0, 1.5, -1.4]}
                        transform
                        distanceFactor={1.16}
                        rotation-x={-0.25}
                    >
                        <iframe src="https://2-d-for-portfolio.vercel.app/" />
                    </Html>
                </primitive>
            </PresentationControls>
        </>
    );
}
