// js/main.js
import * as THREE from 'three';
import { createBasicScene } from './scene.js';
import { createMainCamera } from './camera.js';
import { createMainRenderer } from './renderer.js';
import { initSharedTexture } from './materials.js'; // Import fungsi inisialisasi
import { createSceneObjects } from './objects.js';
import { setupLights } from './lights.js';
import { createOrbitControls } from './controls.js';
import { setupGlobalResizeHandler } from './utils/resize.js';

const textureUrl = 'textures/texture.jpg'; // Definisikan URL tekstur di sini

async function initializeWorld() {
    // 1. Inisialisasi Material (memuat tekstur) - Lakukan ini pertama
    await initSharedTexture(textureUrl);

    // 2. Setup Scene, Kamera, Renderer
    const scene = createBasicScene();
    const camera = createMainCamera(window.innerWidth / window.innerHeight);
    const renderer = createMainRenderer();

    // 3. Setup Pencahayaan
    setupLights(scene);

    // 4. Buat Objek
    // createSceneObjects sekarang mengembalikan grup dan plane secara terpisah
    const { objectGroup, plane, allInteractiveObjects } = createSceneObjects();
    scene.add(objectGroup); // Tambahkan grup yang berisi kubus, bola, limas
    scene.add(plane);       // Tambahkan lantai secara terpisah

    // 5. Setup Kontrol Kamera
    const controls = createOrbitControls(camera, renderer.domElement);
    camera.lookAt(controls.target); // Pastikan kamera melihat target kontrol awal

    // 6. Setup Handler untuk Resize Window
    setupGlobalResizeHandler(camera, renderer);

    // 7. Loop Animasi
    const clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Animasi sederhana pada objek-objek interaktif
        allInteractiveObjects.forEach((obj, index) => {
            if (obj.name === "MyCube") {
                obj.rotation.x = elapsedTime * 0.2;
                obj.rotation.y = elapsedTime * 0.3;
            } else if (obj.name === "MySphere") {
                obj.position.y = 1.0 + Math.sin(elapsedTime * 0.8) * 0.2;
            } else if (obj.name === "MyPyramid") {
                obj.rotation.y = -elapsedTime * 0.4;
            }
        });

        controls.update(); // Penting untuk damping dan autoRotate (jika aktif)
        renderer.render(scene, camera);
    }

    animate();
    console.log("Modul 02: Material & Tekstur - Initialized and Running");
}

// Panggil fungsi inisialisasi utama
initializeWorld().catch(error => {
    console.error("Initialization failed:", error);
    // Tampilkan pesan error ke pengguna jika perlu
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