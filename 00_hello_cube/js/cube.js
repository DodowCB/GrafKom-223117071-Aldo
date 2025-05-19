// js/cube.js
import * as THREE from 'three';

function createCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Ukuran kubus 1x1x1
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Warna merah
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

export { createCube };