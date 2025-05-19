// js/renderer.js
import * as THREE from 'three';

function createRenderer() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Untuk tampilan lebih tajam di layar HiDPI
    document.body.appendChild(renderer.domElement);
    return renderer;
}

export { createRenderer };