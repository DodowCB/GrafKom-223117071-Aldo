// js/objects.js
import * as THREE from 'three';
import { getCubeMaterial, getSphereMaterial, getPyramidMaterial, getPlaneMaterial } from './materials.js';

let sceneObjectsRef = []; // Simpan referensi ke objek yang bisa cast/receive shadow
let planeRef = null;

function createSceneObjects(initialShadowState = true) {
    sceneObjectsRef = []; // Reset array
    const objectGroup = new THREE.Group();

    // Cube (Kiri)
    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cube = new THREE.Mesh(cubeGeometry, getCubeMaterial());
    cube.position.set(-3, 0.75, 0);
    cube.name = "MyCube";
    cube.castShadow = initialShadowState;
    cube.receiveShadow = initialShadowState;
    objectGroup.add(cube);
    sceneObjectsRef.push(cube);

    // Sphere (Tengah)
    const sphereGeometry = new THREE.SphereGeometry(1, 16, 12);
    const sphere = new THREE.Mesh(sphereGeometry, getSphereMaterial());
    sphere.position.set(0, 1, 0);
    sphere.name = "MySphere";
    sphere.castShadow = initialShadowState;
    sphere.receiveShadow = initialShadowState;
    objectGroup.add(sphere);
    sceneObjectsRef.push(sphere);

    // Pyramid (Limas Segiempat di Kanan)
    const pyramidHeight = 2;
    const pyramidBaseSize = 1.2;
    const pyramidGeometry = new THREE.CylinderGeometry(0.01, pyramidBaseSize, pyramidHeight, 4, 1);
    const pyramid = new THREE.Mesh(pyramidGeometry, getPyramidMaterial());
    pyramid.position.set(3, pyramidHeight / 2, 0);
    pyramid.name = "MyPyramid";
    pyramid.castShadow = initialShadowState;
    pyramid.receiveShadow = initialShadowState;
    objectGroup.add(pyramid);
    sceneObjectsRef.push(pyramid);

    // Plane (Lantai)
    const planeGeometry = new THREE.PlaneGeometry(12, 12);
    const plane = new THREE.Mesh(planeGeometry, getPlaneMaterial());
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = 0;
    plane.name = "MyPlane";
    plane.receiveShadow = initialShadowState; // Lantai hanya menerima bayangan
    planeRef = plane;
    // sceneObjectsRef.push(plane); // Tidak perlu, dihandle terpisah untuk receiveShadow

    return { objectGroup, plane, allInteractiveObjects: sceneObjectsRef };
}

function toggleObjectsShadowProperties(castAndReceive) {
    sceneObjectsRef.forEach(obj => {
        obj.castShadow = castAndReceive;
        obj.receiveShadow = castAndReceive; // Objek selain lantai juga bisa menerima bayangan dari objek lain
    });
    if (planeRef) {
        planeRef.receiveShadow = castAndReceive;
    }
}

export { createSceneObjects, toggleObjectsShadowProperties };