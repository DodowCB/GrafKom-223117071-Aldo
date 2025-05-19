import * as THREE from 'three';

function setDirectionalLightShadowConfig(light, size = 1024, camSize = 10, bias = -0.0005) {
    light.shadow.mapSize.width = size;
    light.shadow.mapSize.height = size;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 50;
    light.shadow.camera.left = -camSize;
    light.shadow.camera.right = camSize;
    light.shadow.camera.top = camSize;
    light.shadow.camera.bottom = -camSize;
    light.shadow.bias = bias;
}

function setSpotLightShadowConfig(light, size = 1024, near = 0.5, far = 50, fov = Math.PI / 3, bias = -0.0005) {
    light.shadow.mapSize.width = size;
    light.shadow.mapSize.height = size;
    light.shadow.camera.near = near;
    light.shadow.camera.far = far;
    light.shadow.camera.fov = fov;
    light.shadow.bias = bias;
}

function setPointLightShadowConfig(light, size = 512, near = 0.5, far = 50, bias = -0.0005) {
    light.shadow.mapSize.width = size;
    light.shadow.mapSize.height = size;
    light.shadow.camera.near = near;
    light.shadow.camera.far = far;
    light.shadow.bias = bias;
}

export { setDirectionalLightShadowConfig, setSpotLightShadowConfig, setPointLightShadowConfig }; 