import './style.css';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector('#bg')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
cssRenderer.domElement.style.zIndex = '1'; // Ensure it is above the WebGLRenderer
document.body.appendChild(cssRenderer.domElement);

camera.position.set(0, 1.6, 10);

// Initialize OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable smooth controls
controls.dampingFactor = 0.25; // Damping factor
controls.screenSpacePanning = false; // Do not allow camera to move vertically
controls.rotateSpeed = 0.5; // Speed of rotation
controls.zoomSpeed = 1.2; // Speed of zoom
controls.panSpeed = 0.8; // Speed of pan
controls.mouseButtons = {
  LEFT: THREE.MOUSE.ROTATE, // Rotate with left button
  MIDDLE: THREE.MOUSE.DOLLY, // Zoom with middle button
  RIGHT: THREE.MOUSE.PAN // Pan with right button
};

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 3.3);
directionalLight.position.set(0, 50, 100);
scene.add(directionalLight);

let cellphone;
let mixer; // Animation mixer
let cssRenderFlag = false; // Flag to control CSS rendering
let movePhone = false; // Flag to control phone movement
const targetPosition = new THREE.Vector3(0, -145, 105); // Target position for the phone
const loader = new GLTFLoader();
loader.load('NOKIA2.glb', function(gltf) {
  cellphone = gltf.scene;
  scene.add(cellphone);
  cellphone.position.set(0, -20, -180);
  cellphone.rotation.y = -Math.PI / 2;
  cellphone.rotation.x = -0.2;
  cellphone.scale.set(50, 50, 50);

  // Hide the "extra knobs" object
  const extraKnobs = cellphone.getObjectByName('extra knobs');
  if (extraKnobs) {
    extraKnobs.visible = false; // This hides the object
  }

  // Setup the animation mixer
  mixer = new THREE.AnimationMixer(cellphone);
  const phoneRingClip = THREE.AnimationClip.findByName(gltf.animations, 'PhoneRing'); // Use the actual animation name
  const phoneOpenClip = THREE.AnimationClip.findByName(gltf.animations, 'phone open'); // Use the actual animation name

  if (phoneRingClip) {
    const phoneRingAction = mixer.clipAction(phoneRingClip);
    phoneRingAction.setLoop(THREE.LoopRepeat); // Set the animation to repeat
    phoneRingAction.play(); // Play the animation

    document.getElementById('playAnimation').addEventListener('click', function() {
      phoneRingAction.stop(); // Stop the PhoneRing animation
      if (phoneOpenClip) {
        const phoneOpenAction = mixer.clipAction(phoneOpenClip);
        phoneOpenAction.setLoop(THREE.LoopOnce); // Set the animation to play only once
        phoneOpenAction.clampWhenFinished = true; // Make sure the animation holds the last frame when finished
        phoneOpenAction.play(); // Play the Open phone animation
        phoneOpenAction.reset(); // Reset the action to make sure it plays from the start
        phoneOpenAction.play(); // Play the animation
        cssRenderFlag = false; // Reset the flag when animation starts
        movePhone = false; // Reset the phone movement flag

        // Add event listener to mixer to handle when the animation finishes
        mixer.addEventListener('finished', (e) => {
          if (e.action === phoneOpenAction) {
            console.log('Open phone animation finished playing');
            movePhone = true; // Start moving the phone
            setTimeout(() => {
              cssRenderFlag = true; // Set the flag to true after a delay
            }, 500); // Delay of 0.5 seconds
          }
        });
      }
    });
  }
});

const iframe = document.createElement('iframe');
iframe.src = 'https://2-d-for-portfolio.vercel.app/';
iframe.style.width = '1024px';
iframe.style.height = '768px';
iframe.style.border = '0';
const cssObject = new CSS3DObject(iframe);
cssObject.position.set(0, -205, -750);
cssObject.scale.set(1.5, 1.5, 1.5); // Scale the iframe to fit your scene
scene.add(cssObject);

function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  // Update the mixer for animations
  if (mixer) mixer.update(delta);

  // Update the controls for camera movement
  controls.update();

  // Move the phone towards the target position
  if (movePhone) {
    cellphone.position.lerp(targetPosition, 0.05); // Adjust the second parameter to control the speed
  }

  // Render the WebGL scene
  renderer.render(scene, camera);

  // Render the CSS3D scene only if the flag is set
  if (cssRenderFlag) {
    cssRenderer.render(scene, camera);
  }
}

// Start the animation loop
const clock = new THREE.Clock(); // Clock to keep track of time for animations
animate();
