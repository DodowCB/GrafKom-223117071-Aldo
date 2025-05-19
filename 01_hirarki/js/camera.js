// js/camera.js
import * as THREE from 'three';

const cameras = {
    perspective: null,
    orthographic: null
};
let activeCameraType = 'perspective'; // Menyimpan tipe kamera aktif

const frustumSize = 15; // Untuk kamera ortogonal, sesuaikan dengan ukuran scene

function createCameras(aspectRatio) {
    // Kamera Perspektif
    cameras.perspective = new THREE.PerspectiveCamera(
        50, // FOV
        aspectRatio,
        0.1,
        1000
    );
    cameras.perspective.position.set(7, 7, 10); // Posisi awal
    cameras.perspective.name = "PerspectiveCamera";

    // Kamera Ortogonal
    cameras.orthographic = new THREE.OrthographicCamera(
        frustumSize * aspectRatio / -2, // left
        frustumSize * aspectRatio / 2,  // right
        frustumSize / 2,                // top
        frustumSize / -2,               // bottom
        0.1,                            // near
        1000                            // far
    );
    cameras.orthographic.position.set(7, 7, 10); // Posisi awal sama
    cameras.orthographic.name = "OrthographicCamera";

    // Set kamera aktif awal
    return cameras[activeCameraType];
}

function getActiveCamera() {
    return cameras[activeCameraType];
}

function setActiveCameraType(type, aspectRatio) {
    if (cameras[type]) {
        activeCameraType = type;
        const newActiveCamera = cameras[activeCameraType];
        // Pastikan aspek rasio dan matriks proyeksi diperbarui
        updateCameraAspectRatio(aspectRatio); // Ini akan update kedua kamera
        return newActiveCamera;
    }
    return getActiveCamera(); // Kembalikan yang aktif jika tipe tidak valid
}

function updateCameraAspectRatio(aspectRatio) {
    if (cameras.perspective) {
        cameras.perspective.aspect = aspectRatio;
        cameras.perspective.updateProjectionMatrix();
    }
    if (cameras.orthographic) {
        cameras.orthographic.left = frustumSize * aspectRatio / -2;
        cameras.orthographic.right = frustumSize * aspectRatio / 2;
        cameras.orthographic.top = frustumSize / 2;
        cameras.orthographic.bottom = frustumSize / -2;
        cameras.orthographic.updateProjectionMatrix();
    }
}

export { createCameras, getActiveCamera, setActiveCameraType, updateCameraAspectRatio };