// js/materials.js
import * as THREE from 'three';

let loadedTexture = null; // Akan diisi oleh initMaterials

// Fungsi untuk menginisialisasi (memuat) tekstur utama
async function initSharedTexture(textureUrl) {
    // Menggunakan dynamic import untuk textureLoader agar tidak terjadi circular dependency
    // jika textureLoader.js suatu saat mengimpor sesuatu dari sini.
    const { loadTexture } = await import('./utils/textureLoader.js');
    try {
        loadedTexture = await loadTexture(textureUrl);
    } catch (e) {
        console.error("Failed to initialize shared texture in materials.js:", e);
        // loadedTexture akan menjadi error texture dari loadTexture
    }
}

function getCubeMaterial() {
    if (!loadedTexture) return new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Fallback merah
    return new THREE.MeshBasicMaterial({
        map: loadedTexture
    });
}

function getSphereMaterial() {
    if (!loadedTexture) return new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 30 }); // Fallback hijau
    return new THREE.MeshPhongMaterial({
        map: loadedTexture,
        color: 0xffffff,        // Warna dasar (putih agar tekstur tidak terpengaruh)
        emissive: 0x333311,     // Warna emisi (kuning gelap redup)
        emissiveIntensity: 0.6,
        specular: 0x888888,     // Warna highlight specular
        shininess: 30           // Tingkat kilap
    });
}

function getPyramidMaterial() {
    if (!loadedTexture) return new THREE.MeshPhongMaterial({ color: 0x0000ff, shininess: 90 }); // Fallback biru
    return new THREE.MeshPhongMaterial({
        map: loadedTexture,
        color: 0xffffff,
        specular: 0xbbbbbb,
        shininess: 90
    });
}

function getPlaneMaterial() {
    if (!loadedTexture) return new THREE.MeshBasicMaterial({ color: 0x888888 }); // Fallback abu-abu

    // Clone tekstur untuk plane agar bisa mengatur repeat secara independen
    const planeTexture = loadedTexture.clone();
    planeTexture.needsUpdate = true; // Penting setelah clone
    planeTexture.wrapS = THREE.RepeatWrapping;
    planeTexture.wrapT = THREE.RepeatWrapping;
    planeTexture.repeat.set(5, 5); // Ulang tekstur 5x5 di lantai

    return new THREE.MeshBasicMaterial({
        map: planeTexture,
        side: THREE.DoubleSide // Agar terlihat dari bawah juga (opsional)
    });
}

export { initSharedTexture, getCubeMaterial, getSphereMaterial, getPyramidMaterial, getPlaneMaterial };