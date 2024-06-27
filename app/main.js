

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
const cssRenderer = new CSS3DRenderer({
  element: document.querySelector('#css-bg')
});
cssRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(cssRenderer.domElement);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Set the background using TextureLoader
const back = new THREE.TextureLoader();
back.load('emptyRoom.png', function(texture) {
  scene.background = texture;
});

camera.position.set(0, 1.6, 10);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 50, 100);
scene.add(directionalLight);

let cellphone;
const loader = new GLTFLoader();
loader.load('NOKIA2.glb', function(gltf) {
  cellphone = gltf.scene;
  scene.add(cellphone);
  cellphone.position.set(0, 0, -200);
  cellphone.rotation.y = -Math.PI / 2;
  cellphone.rotation.x = -.2;
  cellphone.scale.set(50, 50, 50);
});

const stars = [];
const textureLoader = new THREE.TextureLoader();
const diamondTexture = textureLoader.load('pinkchrome.png');
function addStar() {
  const geometry = new THREE.OctahedronGeometry(0.25);
  const material = new THREE.MeshStandardMaterial({ map: diamondTexture, flatShading: true });
  const star = new THREE.Mesh(geometry, material);
  star.scale.set(0.5, 1, 0.5);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(50));
  star.position.set(x, y, z);
  scene.add(star);
  stars.push(star);
}

Array(200).fill().forEach(addStar);

const iframe = document.createElement('iframe');
iframe.src = 'https://2-d-for-portfolio.vercel.app/';
iframe.style.width = '1024px';
iframe.style.height = '768px';
iframe.style.border = '0';
const cssObject = new CSS3DObject(iframe);
cssObject.position.set(0, 0, -700);
scene.add(cssObject);

document.body.appendChild(renderer.domElement);

let rotate = true; // This flag controls whether the phone should rotate
let rotationSpeed = 0.05; // Speed of rotation
let rotationDirection = 1; // 1 for clockwise, -1 for counter-clockwise
let rotationLimit = Math.PI/8;
// Event listener for the button
document.getElementById('stopRotationButton').addEventListener('click', function() {
  rotate = false; // Stop the rotation when the button is clicked
});

function animate() {
  requestAnimationFrame(animate);

  // Update the phone's rotation if `rotate` is true
  if (rotate && cellphone) {
    cellphone.rotation.x += rotationSpeed * rotationDirection;
    
    // Change direction of the rotation at the limits
    if (cellphone.rotation.x > rotationLimit || cellphone.rotation.x < -rotationLimit) {
      rotationDirection *= -1; // Reverse the direction
    }
  }

  renderer.render(scene, camera);
  if (cssRenderer) cssRenderer.render(scene, camera); // Update CSS3DRenderer if used
}

animate();