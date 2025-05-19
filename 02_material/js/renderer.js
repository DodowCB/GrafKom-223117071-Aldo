// js/renderer.js
import * as THREE from 'three';

function createMainRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Aktifkan shadow mapping
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Untuk bayangan yang lebih halus

    // Penting untuk warna yang benar dengan tekstur sRGB
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // renderer.toneMapping = THREE.ACESFilmicToneMapping; // Opsional, untuk tampilan lebih sinematik
    // renderer.toneMappingExposure = 1.0;

    document.body.appendChild(renderer.domElement);
    return renderer;
}

export { createMainRenderer };