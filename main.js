import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import gsap from 'gsap';

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 1);

// Create the CSS3DRenderer
const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
cssRenderer.domElement.style.zIndex = '1'; // Ensure it is above the WebGLRenderer
document.body.appendChild(cssRenderer.domElement);

// Create the WebGLRenderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;
controls.screenSpacePanning = false;
controls.rotateSpeed = 0.5;

// Add a basic ambient light
const ambientLight = new THREE.AmbientLight(0xEEDD82, 3); // Soft white light
scene.add(ambientLight);

// Add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

let phoneObject; // Define the phoneObject variable
let animationAction; // Define the animation action variable
let isAnimating = true; // Flag to track the animation state
let renderIframe = false; // Flag to control iframe rendering

// Set up the phone ring animation
const loader = new GLTFLoader();
let mixer;

loader.load('/public/NOKIA2.glb', (gltf) => {
  const model = gltf.scene;
  model.scale.set(0.1, 0.1, 0.1); // Adjust the scale if necessary
  model.rotation.y = 3 * Math.PI / 2; // Rotate 90 degrees along the Y axis

  // Add the model to the scene
  scene.add(model);

  // Find the specific phone part named 'Phone' within the model
  phoneObject = model.getObjectByName('Phone');

  if (!phoneObject) {
    console.error('Phone object not found in the GLTF model.');
  }

  // Setup the animation mixer
  mixer = new THREE.AnimationMixer(model);
  const ringClip = gltf.animations.find(clip => clip.name === 'Ring');

  console.log('Loaded animations:', gltf.animations.map(clip => clip.name));
  console.log('Ring animation clip:', ringClip);

  if (ringClip) {
    animationAction = mixer.clipAction(ringClip);
    animationAction.setLoop(THREE.LoopRepeat); // Set the animation to repeat
    animationAction.play(); // Play the animation
    console.log('Animation started:', ringClip.name);

    // Log keyframe times and values for debugging
    ringClip.tracks.forEach(track => {
      console.log('Track:', track.name);
      console.log('Times:', track.times);
      console.log('Values:', track.values);
    });
  } else {
    console.error('Animation clip not found: Ring');
  }
}, undefined, (error) => {
  console.error('An error occurred while loading the model:', error);
});

// Create an iframe for the 2D site
const iframe = document.createElement('iframe');
iframe.src = 'https://2-d-for-portfolio.vercel.app/';
iframe.style.width = '1024px';
iframe.style.height = '768px';
iframe.style.border = '0';
const cssObject = new CSS3DObject(iframe);
cssObject.position.set(90, -288, -900);
cssObject.rotation.x = -.53;
cssObject.scale.set(1.04, .9, .9); // Scale the iframe to fit your scene

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
});

// Rotate phone and toggle animation function
function rotatePhone() {
  if (phoneObject) {
    phoneObject.rotation.z += Math.PI / 0.6; // Rotate 90 degrees along the Y axis

    setTimeout(() => {
      renderIframe = true;
      scene.add(cssObject);
    }, 1950);
    gsap.to(phoneObject.position, { // Use GSAP to smoothly move the phone
      duration: 2, // Duration of the animation in seconds
      x: 0,
      y: -5,
      z: 0,
      onUpdate: () => {
        camera.lookAt(phoneObject.position); // Ensure the camera keeps looking at the phone
      }
    });
    
    
    gsap.to(camera.position, { // Use GSAP to smoothly move the camera
      duration: 2, // Duration of the animation in seconds
      x: 0,
      y: 0.2,
      z: 0.5,
      onUpdate: () => {
        camera.lookAt(phoneObject.position); // Ensure the camera keeps looking at the phone
      }
      
    })
  } else {
    console.error('Phone object not found, unable to rotate.');
  }

  if (isAnimating) {
    animationAction.stop(); // Stop the animation
  } else {
    animationAction.play(); // Play the animation
  }
  isAnimating = !isAnimating; // Toggle the animation state
}

// Add event listener to the button
document.getElementById('rotateButton').addEventListener('click', rotatePhone);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();

  // Update the mixer for animations
  if (mixer && isAnimating) {
    mixer.update(delta);
    const action = mixer.existingAction('Ring');
    if (action) {
      console.log('Animation action time:', action.time, 'Weight:', action.getEffectiveWeight());
    }
  }

  // Update controls
  controls.update();

  // Render the scene
  renderer.render(scene, camera);

  // Conditionally render the CSS3DObject (iframe)
  if (renderIframe) {
    cssRenderer.render(scene, camera);
  }
}

// Start the animation loop
const clock = new THREE.Clock(); // Clock to keep track of time for animations
animate();