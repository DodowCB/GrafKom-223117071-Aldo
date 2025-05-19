// js/camera.js
import * as THREE from 'three';

function createMainCamera(aspectRatio) {
    const camera = new THREE.PerspectiveCamera(
        50,        // fov
        aspectRatio, // aspect
        0.1,       // near
        100        // far
    );
    camera.position.set(0, 4, 12); // Posisi kamera yang baik untuk melihat semua objek
    return camera;
}

function updateMainCameraAspect(camera, aspectRatio) {
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
}

export { createMainCamera, updateMainCameraAspect };