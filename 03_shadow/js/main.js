// js/main.js
import * as THREE from 'three';
import { createBasicScene } from './scene.js';
import { createMainCamera } from './camera.js';
import { createMainRenderer } from './renderer.js'; // toggleRendererShadows tidak perlu diimpor di sini
import { initSharedTexture } from './materials.js';
import { createSceneObjects } from './objects.js';    // toggleObjectsShadowProperties tidak perlu diimpor di sini
import { setupLights } from './lights.js';          // toggleDirectionalLightShadow tidak perlu diimpor di sini
import { createOrbitControls } from './controls.js';
import { setupGlobalResizeHandler } from './utils/resize.js';
import { setupShadowToggle, setInitialShadowState } from './ui.js'; // Import dari UI

const textureUrl = 'textures/texture.jpg';
let currentShadowState = true; // State awal bayangan

async function initializeWorld() {
    // 0. Set state bayangan awal untuk UI
    setInitialShadowState(currentShadowState);

    // 1. Inisialisasi Material (memuat tekstur)
    await initSharedTexture(textureUrl);

    // 2. Setup Scene, Kamera, Renderer
    const scene = createBasicScene();
    const camera = createMainCamera(window.innerWidth / window.innerHeight);
    // Pass currentShadowState ke renderer
    const renderer = createMainRenderer(currentShadowState);

    // 3. Setup Pencahayaan
    // Pass currentShadowState ke setupLights
    setupLights(scene, currentShadowState);

    // 4. Buat Objek
    // Pass currentShadowState ke createSceneObjects
    const { objectGroup, plane, allInteractiveObjects } = createSceneObjects(currentShadowState);
    scene.add(objectGroup);
    scene.add(plane);

    // 5. Setup Kontrol Kamera
    const controls = createOrbitControls(camera, renderer.domElement);
    camera.lookAt(controls.target);

    // 6. Setup Handler untuk Resize Window
    setupGlobalResizeHandler(camera, renderer);

    // 7. Setup UI (termasuk toggle bayangan)
    setupShadowToggle(scene); // Berikan referensi scene ke UI

    // 8. Loop Animasi
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        allInteractiveObjects.forEach((obj) => {
            // Tidak ada animasi rotasi/pergerakan
        });

        controls.update();
        renderer.render(scene, camera);
    }

    animate();
    console.log(`Modul 02: Material & Tekstur - Initialized. Shadows: ${currentShadowState ? 'ON' : 'OFF'}`);
}

initializeWorld().catch(error => {
    console.error("Initialization failed:", error);
    const errorDiv = document.createElement('div');
    errorDiv.style.position = 'absolute';
    errorDiv.style.top = '50%';
    errorDiv.style.left = '50%';
    errorDiv.style.transform = 'translate(-50%, -50%)';
    errorDiv.style.padding = '20px';
    errorDiv.style.backgroundColor = 'red';
    errorDiv.style.color = 'white';
    errorDiv.innerHTML = `Gagal memuat aplikasi. Cek console (F12) untuk detail.<br>Pastikan file <strong>${textureUrl}</strong> ada.`;
    document.body.appendChild(errorDiv);
});