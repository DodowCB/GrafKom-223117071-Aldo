// js/utils/resize.js
import { updateCameraAspectRatio, getActiveCamera } from '../camera.js';

function setupResizeHandler(renderer) {
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        const newAspectRatio = newWidth / newHeight;

        renderer.setSize(newWidth, newHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        updateCameraAspectRatio(newAspectRatio); // Ini akan update kedua kamera
        // Kamera yang aktif akan menggunakan nilai yang sudah diupdate saat dirender
    });
}

export { setupResizeHandler };