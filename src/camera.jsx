import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

export const CameraKey = {
    IDLE: 'idle',
    MONITOR: 'monitor',
    LOADING: 'loading',
    DESK: 'desk',
    ORBIT_CONTROLS_START: 'orbitControlsStart',
};

export default class Camera {
    constructor(scene) {
        // Create a perspective camera
        this.instance = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 10, 900000);
        this.scene = scene;

        // Add camera to the scene
        this.scene.add(this.instance);

        // Initialize position and focal point
        this.position = new THREE.Vector3(0, 0, 0);
        this.focalPoint = new THREE.Vector3(0, 0, 0);

        // Define keyframes
        this.keyframes = {
            idle: { position: new THREE.Vector3(0, 2, 20), focalPoint: new THREE.Vector3(0, 0, 0) },
            monitor: { position: new THREE.Vector3(0, 950, 2000), focalPoint: new THREE.Vector3(0, 950, 0) },
            desk: { position: new THREE.Vector3(0, 1800, 5500), focalPoint: new THREE.Vector3(0, 500, 0) },
            loading: { position: new THREE.Vector3(-35000, 35000, 35000), focalPoint: new THREE.Vector3(0, -5000, 0) },
            orbitControlsStart: { position: new THREE.Vector3(-15000, 10000, 15000), focalPoint: new THREE.Vector3(-100, 350, 0) },
        };

        this.currentKeyframe = CameraKey.IDLE;
    }

    transition(key, duration = 1000, easing = TWEEN.Easing.Quintic.InOut) {
        if (this.currentKeyframe === key) return;

        this.currentKeyframe = key;
        const keyframe = this.keyframes[key];

        // Tween the position and focal point
        new TWEEN.Tween(this.position)
            .to(keyframe.position, duration)
            .easing(easing)
            .onUpdate(() => {
                this.instance.position.copy(this.position);
            })
            .start();

        new TWEEN.Tween(this.focalPoint)
            .to(keyframe.focalPoint, duration)
            .easing(easing)
            .onUpdate(() => {
                this.instance.lookAt(this.focalPoint);
            })
            .start();
    }

    update() {
        TWEEN.update();
    }
}
