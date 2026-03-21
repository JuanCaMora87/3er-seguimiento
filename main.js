import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Escena, cámara y render
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ====== ICOSAEDROS ======
const geometry = new THREE.IcosahedronGeometry(1, 0);

// Materiales con mejor iluminación
const materialRed = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const materialYellow = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const materialPurple = new THREE.MeshStandardMaterial({ color: 0x800080 });

// Crear objetos
const icoRed = new THREE.Mesh(geometry, materialRed);
const icoYellow = new THREE.Mesh(geometry, materialYellow);
const icoPurple = new THREE.Mesh(geometry, materialPurple);

// Posiciones (separados para que sí se vean)
icoRed.position.x = -3;
icoYellow.position.x = 0;
icoPurple.position.x = 3;

// Agregar a escena
scene.add(icoRed, icoYellow, icoPurple);

// ====== LUCES (MUY IMPORTANTE) ======
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Cámara
camera.position.z = 6;

// ====== VELOCIDADES DIFERENTES ======
const speedRed = 0.01;
const speedYellow = 0.02;
const speedPurple = 0.03;

// Animación
function animate() {
    icoRed.rotation.x += speedRed;
    icoRed.rotation.y += speedRed;

    icoYellow.rotation.x += speedYellow;
    icoYellow.rotation.y += speedYellow;

    icoPurple.rotation.x += speedPurple;
    icoPurple.rotation.y += speedPurple;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);