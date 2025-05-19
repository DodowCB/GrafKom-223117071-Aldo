// js/objects.js
import * as THREE from 'three';
import { getCubeMaterial, getSphereMaterial, getPyramidMaterial, getPlaneMaterial } from './materials.js';

function createSceneObjects() {
    const objects = [];
    const objectGroup = new THREE.Group(); // Grup untuk mempermudah penargetan kamera/kontrol

    // Cube (Kiri)
    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cube = new THREE.Mesh(cubeGeometry, getCubeMaterial());
    cube.position.set(-3, 0.75, 0);
    cube.name = "MyCube";
    cube.castShadow = true;
    cube.receiveShadow = true;
    objectGroup.add(cube);
    objects.push(cube);

    // Sphere (Tengah)
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 24);
    const sphere = new THREE.Mesh(sphereGeometry, getSphereMaterial());
    sphere.position.set(0, 1, 0);
    sphere.name = "MySphere";
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    objectGroup.add(sphere);
    objects.push(sphere);

    // Pyramid (Limas Segiempat di Kanan)
    const pyramidHeight = 2;
    const pyramidBaseSize = 1.2;
    // Geometri untuk limas bisa dibuat dengan CylinderGeometry dengan topRadius = 0 dan 4 sisi
    const pyramidGeometry = new THREE.CylinderGeometry(0.01, pyramidBaseSize, pyramidHeight, 4, 1);
    const pyramid = new THREE.Mesh(pyramidGeometry, getPyramidMaterial());
    pyramid.position.set(3, pyramidHeight / 2, 0);
    pyramid.name = "MyPyramid";
    pyramid.castShadow = true;
    pyramid.receiveShadow = true;
    objectGroup.add(pyramid);
    objects.push(pyramid);

    // Plane (Lantai)
    const planeGeometry = new THREE.PlaneGeometry(12, 12);
    const plane = new THREE.Mesh(planeGeometry, getPlaneMaterial());
    plane.rotation.x = -Math.PI / 2; // Putar agar horizontal
    plane.position.y = 0;
    plane.name = "MyPlane";
    plane.receiveShadow = true; // Lantai hanya menerima bayangan
    // Tidak perlu ditambahkan ke objectGroup jika tidak ingin ikut rotasi grup
    // objects.push(plane); // Jika mau dirotasi individual

    return { objectGroup, plane, allInteractiveObjects: objects };
}

export { createSceneObjects };