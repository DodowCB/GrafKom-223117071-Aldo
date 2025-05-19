// js/controls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, domElement) {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true; // Memberikan efek "gesekan" yang lebih halus
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false; // Opsional: batasi panning ke bidang xy kamera
    controls.minDistance = 2;
    controls.maxDistance = 10;
    // controls.maxPolarAngle = Math.PI / 2; // Opsional: batasi rotasi vertikal
    return controls;
}

export { createControls };