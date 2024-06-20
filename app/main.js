import './style.css';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

//3 things (kindof 4) are necessary. objects:
//scene, camera, renderer, + lighting

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector('#bg'),
});
const cssRenderer = new CSS3DRenderer();

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

cssRenderer.domElement.className = 'css3d';
document.body.appendChild(cssRenderer.domElement);
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = '0';
camera.position.set(0, 1.6, 10);

renderer.render(scene, camera);


let cellphone;  // Define the variable here
const loader = new GLTFLoader();

loader.load('first_cellphone/scene.gltf', function (gltf) {
  cellphone = gltf.scene;
  scene.add(cellphone);
  // Set the position
  cellphone.position.set(0,0,-20); // Example values, adjust as needed
  cellphone.rotation.y = Math.PI / 1.5;
  // Set the scale
  cellphone.scale.set(50, 50, 50); 
  console.log(cellphone);
});

//scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);
const textureLoader = new THREE.TextureLoader();
const diamondTexture = textureLoader.load('pinkchrome.png');
function addStar() {
  // Create a diamond-like geometry
  const geometry = new THREE.OctahedronGeometry(0.25); // Adjust the size as needed
  const material = new THREE.MeshStandardMaterial({ map: diamondTexture, flatShading: true });
  const star = new THREE.Mesh(geometry, material);

  // Scale the star
  star.scale.set(0.5, 1, .5); // Example scale, adjust as needed

  // Randomly position the stars in the scene
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x, y, z);
  scene.add(star);

  // Store a reference to the star for rotation
  stars.push(star);
}

// Array to hold references to the stars
const stars = [];

// Add 200 stars to the scene
Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.png');
scene.background = spaceTexture;

const iframe = document.createElement('iframe');
iframe.src = 'https://2-d-for-portfolio.vercel.app/';
iframe.style.width = '1024px';
iframe.style.height = '768px';
iframe.style.border = '0';
const cssObject = new CSS3DObject(iframe);
cssObject.position.set(0, 0, -4000);

scene.add(cssObject);


document.body.appendChild(renderer.domElement);
document.body.appendChild(cssRenderer.domElement);
// Scroll Animation
/*
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();
*/

// Animation Loop
function animate() {
  requestAnimationFrame(animate);


  stars.forEach((star, index) => {
    if (index % 2 === 0) {
      // Rotate half of the stars to the left
      star.rotation.y += 0.01;
    } else {
      // Rotate the other half to the right
      star.rotation.y -= 0.01;
    }
  });
  // Rotate the loaded model if it exists
  /*if (cellphone) {
    
    cellphone.rotation.y += 0.05;
  }*/

  // controls.update();

  renderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}

animate();