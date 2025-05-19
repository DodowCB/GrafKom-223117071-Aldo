// js/renderer.js
import * as THREE from 'three';

let mainRenderer = null;

function createMainRenderer(initialShadowState = true) {
    // Untuk performa maksimal, bisa ganti ke false jika perlu:
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    renderer.shadowMap.enabled = initialShadowState;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    // renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMappingExposure = 1.0;

    document.body.appendChild(renderer.domElement);
    mainRenderer = renderer;
    return renderer;
}

function toggleRendererShadows(enabled, scene) {
    if (mainRenderer) {
        mainRenderer.shadowMap.enabled = enabled;
        // Penting: Update material agar perubahan shadow map rendering diterapkan
        scene.traverse(child => {
            if (child.material) {
                child.material.needsUpdate = true;
            }
        });
    }
}

export { createMainRenderer, toggleRendererShadows };