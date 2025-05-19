// js/scene.js
import * as THREE from 'three';

function createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Latar belakang scene hitam
    return scene;
}

export { createScene };