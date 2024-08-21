// @ts-nocheck
import { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

export default function Disco() {
    const { scene } = useLoader(GLTFLoader, "/SCENE.glb"); // Replace with actual path
    const discoRef = useRef();

    // Find the DISCO object in the scene and apply the GSAP animation
    useEffect(() => {
        const disco = scene.getObjectByName("DISCO");
        if (disco) {
            discoRef.current = disco;
            
            // Animate the rotation of the DISCO object using GSAP
            gsap.to(disco.rotation, {
                z: Math.PI * 2, // Rotate 360 degrees around the Y axis
                repeat: -1,     // Repeat indefinitely
                duration: 10,    // Duration of one full rotation in seconds
                ease: "linear", // Linear easing for a constant speed
            });
        }
    }, [scene]);

    return <primitive object={scene} />;
}
