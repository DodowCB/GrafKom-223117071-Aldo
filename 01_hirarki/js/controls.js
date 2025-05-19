// js/controls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let controlsInstance = null;

function createControls(camera, domElement) {
    if (controlsInstance) {
        controlsInstance.dispose();
    }
    controlsInstance = new OrbitControls(camera, domElement);
    controlsInstance.enableDamping = true;
    controlsInstance.dampingFactor = 0.075; // Sedikit lebih lambat dampingnya
    controlsInstance.screenSpacePanning = true;
    controlsInstance.minDistance = 1;
    controlsInstance.maxDistance = 100;
    return controlsInstance;
}

function getControls() {
    return controlsInstance;
}

// Fungsi untuk mengganti kamera pada controls yang sudah ada
function updateControlsCamera(newCamera) {
    if (controlsInstance) {
        controlsInstance.object = newCamera;
        controlsInstance.update(); // Penting untuk menerapkan perubahan
    }
}

export { createControls, getControls, updateControlsCamera };   