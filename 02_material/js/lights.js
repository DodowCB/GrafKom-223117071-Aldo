// js/lights.js
import * as THREE from 'three';

function setupLights(scene) {
    const lights = {};

    // Ambient light
    lights.ambient = new THREE.AmbientLight(0xffffff, 0.5); // Cahaya ambient lebih lembut
    scene.add(lights.ambient);

    // Directional light untuk bayangan dan highlight phong
    lights.directional = new THREE.DirectionalLight(0xffffff, 1.2); // Intensitas lebih kuat
    lights.directional.position.set(8, 15, 10);
    lights.directional.castShadow = true;

    // Konfigurasi bayangan
    lights.directional.shadow.mapSize.width = 2048; // Resolusi bayangan lebih tinggi
    lights.directional.shadow.mapSize.height = 2048;
    lights.directional.shadow.camera.near = 0.5;
    lights.directional.shadow.camera.far = 50;
    const shadowCamSize = 10;
    lights.directional.shadow.camera.left = -shadowCamSize;
    lights.directional.shadow.camera.right = shadowCamSize;
    lights.directional.shadow.camera.top = shadowCamSize;
    lights.directional.shadow.camera.bottom = -shadowCamSize;
    lights.directional.shadow.bias = -0.0005; // Mengurangi shadow acne

    scene.add(lights.directional);

    // Helper untuk directional light (opsional, untuk debug)
    // const dirLightHelper = new THREE.DirectionalLightHelper(lights.directional, 1);
    // scene.add(dirLightHelper);
    // const shadowHelper = new THREE.CameraHelper(lights.directional.shadow.camera);
    // scene.add(shadowHelper);

    return lights;
}

export { setupLights };