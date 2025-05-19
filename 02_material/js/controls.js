// js/controls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createOrbitControls(camera, domElement) {
    const controls = new OrbitControls(camera, domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 40;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Batasi agar tidak bisa melihat dari bawah lantai
    controls.target.set(0, 0.5, 0); // Targetkan sedikit di atas lantai
    controls.autoRotate = false; // Nonaktifkan auto-rotate
    controls.autoRotateSpeed = 0.5;
    return controls;
}

export { createOrbitControls };