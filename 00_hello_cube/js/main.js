// js/main.js
import * as THREE from 'three';
import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createRenderer } from './renderer.js';
import { createCube } from './cube.js';
import { setupResizeHandler } from './utils/resize.js';
import { createControls } from './controls.js';

// 1. Inisialisasi komponen dasar
const scene = createScene();
const camera = createCamera();
const renderer = createRenderer(); // Renderer sudah ditambahkan ke DOM di dalam createRenderer()

// 2. Tambahkan objek ke scene
const cube = createCube();
scene.add(cube);

// 3. Setup controls
const controls = createControls(camera, renderer.domElement);

// 4. Setup resize handler
setupResizeHandler(camera, renderer);

// 5. Loop animasi
function animate() {
    requestAnimationFrame(animate);

    // Contoh animasi sederhana: rotasi kubus
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    controls.update(); // Penting jika enableDamping diaktifkan pada OrbitControls

    renderer.render(scene, camera);
}

// Mulai animasi
animate();

console.log("Modul 00: Hello Cube - Initialized");