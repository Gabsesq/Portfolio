import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 1);

// Create the renderer
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
const ambientLight = new THREE.AmbientLight(0xEEDD82, 2); // Soft white light
scene.add(ambientLight);

// Add a directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

let phoneObject; // Define the phoneObject variable
let animationAction; // Define the animation action variable
let isAnimating = true; // Flag to track the animation state

// Set up the phone ring animation
const loader = new GLTFLoader();
let mixer;

loader.load('/NOKIA2.glb', (gltf) => {
  const model = gltf.scene;
  model.scale.set(0.1, 0.1, 0.1); // Adjust the scale if necessary
  model.rotation.y = 3*Math.PI/2; // Rotate 90 degrees along the Y axis

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

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Rotate phone and toggle animation function
function rotatePhone() {
  if (phoneObject) {
    phoneObject.rotation.z += Math.PI / 0.6; // Rotate 90 degrees along the Y axis

    gsap.to(phoneObject.position, { // Use GSAP to smoothly move the camera
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
    });
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
}

// Start the animation loop
const clock = new THREE.Clock(); // Clock to keep track of time for animations
animate();
