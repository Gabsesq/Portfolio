import * as THREE from 'three';

export function setupLights(scene) {
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 40); // soft white light
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xff0000, 1, 10);
    pointLight.position.set(0, 100, 0);
    scene.add(pointLight);

    // Add a small sphere to represent the point light
    const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const lightSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    lightSphere.position.copy(pointLight.position);
    scene.add(lightSphere);
}
