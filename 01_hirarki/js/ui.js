// js/ui.js
import { setActiveCameraType, getActiveCamera } from './camera.js';
import { updateControlsCamera, getControls } from './controls.js';
import * as THREE from 'three'; // Untuk THREE.Vector3

function setupCameraToggle() {
    const perspectiveButton = document.getElementById('perspectiveBtn');
    const orthographicButton = document.getElementById('orthographicBtn');

    function switchCamera(type) {
        const aspectRatio = window.innerWidth / window.innerHeight;
        const newCamera = setActiveCameraType(type, aspectRatio);
        updateControlsCamera(newCamera); // Update OrbitControls dengan kamera baru

        // Opsional: Sesuaikan posisi/zoom kamera dan target kontrol untuk transisi yang lebih baik
        const controls = getControls();
        if (controls) {
            // Simpan target controls saat ini agar tidak "lompat" jauh
            const currentTarget = controls.target.clone();

            // Atur posisi kamera baru (bisa sama atau berbeda)
            // newCamera.position.set(7, 7, 10); // Atau ambil dari posisi kamera lama

            if (newCamera.isOrthographicCamera) {
                // Untuk Ortogonal, zoom mungkin perlu disesuaikan
                // Jika Anda ingin tampilan "datar" dari atas, samping, depan:
                // newCamera.position.set(0, 10, 0); // Atas
                // newCamera.zoom = 50; // Sesuaikan zoom
            } else if (newCamera.isPerspectiveCamera) {
                // Untuk Perspektif, FOV sudah diatur
            }
            
            newCamera.lookAt(currentTarget); // Arahkan kamera baru ke target lama
            controls.target.copy(currentTarget); // Pastikan target controls tetap
            controls.update();
        }
    }

    perspectiveButton.addEventListener('click', () => switchCamera('perspective'));
    orthographicButton.addEventListener('click', () => switchCamera('orthographic'));

    // Inisialisasi tombol (misalnya, tandai tombol kamera aktif)
    // Ini bisa diperluas untuk menonaktifkan tombol yang sedang aktif.
}

export { setupCameraToggle };