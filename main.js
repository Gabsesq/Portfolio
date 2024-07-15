import './style.css';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 50, 100);
scene.add(directionalLight);

let cellphone;
let mixer; // Animation mixer
const loader = new GLTFLoader();
loader.load('NOKIA2.glb', function(gltf) {
  cellphone = gltf.scene;
  scene.add(cellphone);
  cellphone.position.set(0, 0, -170);
  cellphone.rotation.y = -Math.PI / 2;
  cellphone.rotation.x = -.2;
  cellphone.scale.set(50, 50, 50);

  // Hide the "extra knobs" object
  const extraKnobs = cellphone.getObjectByName('extra knobs');
  if (extraKnobs) {
    extraKnobs.visible = false; // This hides the object
  }

  // Setup the animation mixer
  mixer = new THREE.AnimationMixer(cellphone);
  const clip = THREE.AnimationClip.findByName(gltf.animations, 'phone open'); // Use the actual animation name
  if (clip) {
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopOnce); // Set the animation to play only once
    action.clampWhenFinished = true; // Make sure the animation holds the last frame when finished

    // Add event listener to mixer to handle when the animation finishes
    mixer.addEventListener('finished', (e) => {
      if (e.action === action) {
        console.log('Animation finished playing');
        // Here you can set any post-animation behavior if needed
      }
    });

    document.getElementById('playAnimation').addEventListener('click', function() {
      action.reset();  // Reset the action to make sure it plays from the start
      action.play();  // Play the animation
    });
  }
});

const iframe = document.createElement('iframe');
iframe.src = 'https://2-d-for-portfolio.vercel.app/';
iframe.style.width = '1024px';
iframe.style.height = '768px';
iframe.style.border = '0';
const cssObject = new CSS3DObject(iframe);
cssObject.position.set(0, 0, -700);
cssObject.scale.set(1.2, 1.2, 1.2); // Scale the iframe to fit your scene
scene.add(cssObject);

function animate() {
  requestAnimationFrame(animate);
  if (mixer) mixer.update(clock.getDelta()); // Update the mixer with the frame delta
  renderer.render(scene, camera);
}

const clock = new THREE.Clock(); // Clock to keep track of time for animations
animate();
