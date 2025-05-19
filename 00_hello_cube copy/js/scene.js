// js/scene.js
import * as THREE from 'three';

function createScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x222222); // Latar belakang abu-abu gelap
    return scene;
}

export { createScene };