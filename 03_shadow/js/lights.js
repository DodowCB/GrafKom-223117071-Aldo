// js/lights.js
import * as THREE from 'three';
import { setDirectionalLightShadowConfig } from './utils/shadowConfig.js';

let mainDirectionalLight = null; // Simpan referensi ke lampu utama

function setupLights(scene, initialShadowState = true) {
    const lights = {};

    // Ambient light
    lights.ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(lights.ambient);

    // Directional light untuk bayangan dan highlight phong
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(8, 15, 10);
    directionalLight.castShadow = initialShadowState;
    setDirectionalLightShadowConfig(directionalLight);

    // Konfigurasi bayangan
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    const shadowCamSize = 10;
    directionalLight.shadow.camera.left = -shadowCamSize;
    directionalLight.shadow.camera.right = shadowCamSize;
    directionalLight.shadow.camera.top = shadowCamSize;
    directionalLight.shadow.camera.bottom = -shadowCamSize;
    directionalLight.shadow.bias = -0.0005;

    scene.add(directionalLight);
    mainDirectionalLight = directionalLight; // Simpan referensi
    lights.directional = directionalLight;

    // Helper (biarkan di-comment, bisa diaktifkan untuk debug)
    // const dirLightHelper = new THREE.DirectionalLightHelper(lights.directional, 1);
    // scene.add(dirLightHelper);
    // const shadowHelper = new THREE.CameraHelper(lights.directional.shadow.camera);
    // scene.add(shadowHelper);

    return lights;
}

function toggleDirectionalLightShadow(castShadow) {
    if (mainDirectionalLight) {
        mainDirectionalLight.castShadow = castShadow;
    }
}

export { setupLights, toggleDirectionalLightShadow, mainDirectionalLight };