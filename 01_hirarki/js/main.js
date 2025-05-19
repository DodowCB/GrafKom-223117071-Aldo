// js/main.js
import * as THREE from 'three';
import { createScene } from './scene.js';
import { createCameras, getActiveCamera, setActiveCameraType } from './camera.js';
import { createRenderer } from './renderer.js';
import { createCubeWithInternalSpheres } from './cube.js';
import { createReferenceCubeHelpers, updateHelpers } from './helpers.js';
import { setupResizeHandler } from './utils/resize.js';
import { createControls, getControls } from './controls.js';
import { setupCameraToggle } from './ui.js';

// 1. Inisialisasi komponen dasar
const scene = createScene();
const renderer = createRenderer();

// 2. Buat kamera-kamera
createCameras(window.innerWidth / window.innerHeight);
let activeCamera = setActiveCameraType('perspective', window.innerWidth / window.innerHeight);
activeCamera.position.set(3.5, 2.5, 4.5); // Sesuaikan posisi kamera agar objek terlihat baik

// 3. Buat objek "Hello Cube" dengan hirarkinya
const { group: cubeContainerGroup, referenceCube } = createCubeWithInternalSpheres();
scene.add(cubeContainerGroup);

// 4. Setup helpers untuk referenceCube
const cubeHelpers = createReferenceCubeHelpers(referenceCube, scene);

// Arahkan kamera dan kontrol ke pusat grup kontainer
const boundingBox = new THREE.Box3().setFromObject(cubeContainerGroup);
const center = new THREE.Vector3();
boundingBox.getCenter(center);
activeCamera.lookAt(center);

// 5. Setup controls
let controls = createControls(activeCamera, renderer.domElement);
controls.target.copy(center);
controls.enableZoom = true; // Pastikan zoom diaktifkan
controls.update();

// 6. Setup UI (tombol ganti kamera)
setupCameraToggle();

// 7. Setup resize handler
setupResizeHandler(renderer);

// 8. Loop animasi
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const deltaTime = clock.getDelta();

    // Animasi pada cubeContainerGroup (memutar seluruh grup)
    if (cubeContainerGroup) {
        cubeContainerGroup.rotation.x += 0.002;
        cubeContainerGroup.rotation.y += 0.003;
    }

    // Update helper
    updateHelpers(cubeHelpers);

    // Update controls
    const currentControls = getControls();
    if (currentControls) {
        currentControls.update(deltaTime);
    }

    renderer.render(scene, getActiveCamera());
}

// Mulai animasi
animate();

console.log("Modul 01: Hirarki Hello Cube - Initialized");