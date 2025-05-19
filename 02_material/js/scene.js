// js/scene.js
import * as THREE from 'three';

function createBasicScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x282c34); // Warna latar sedikit kebiruan
    scene.fog = new THREE.Fog(scene.background, 10, 35); // Tambahkan fog untuk kedalaman
    return scene;
}

export { createBasicScene };