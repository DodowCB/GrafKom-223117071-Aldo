// js/cube.js
import * as THREE from 'three';

function createCubeWithInternalSpheres() {
    const group = new THREE.Group();
    group.name = "CubeContainerGroup";

    // Kubus "Induk" - tidak terlihat, hanya sebagai acuan untuk BoxHelper hijau
    // Ukuran ini akan menentukan ukuran BoxHelper hijau
    const cubeGeometry = new THREE.BoxGeometry(2.5, 2.5, 2.5); // Sesuaikan ukuran ini
    const cubeMaterial = new THREE.MeshBasicMaterial({ visible: false, depthWrite: false, transparent: true });
    const invisibleCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    invisibleCube.name = "InvisibleReferenceCube";
    group.add(invisibleCube);

    // Bola Merah
    const sphereRedGeometry = new THREE.SphereGeometry(0.5, 32, 16); // Radius bola
    const sphereRedMaterial = new THREE.MeshBasicMaterial({ color: 0xcc0000 }); // Merah
    const sphereRed = new THREE.Mesh(sphereRedGeometry, sphereRedMaterial);
    // Posisikan bola merah di dalam 'invisibleCube'
    sphereRed.position.set(0.6, 0.6, 0); // Contoh posisi
    sphereRed.name = "RedSphere";
    invisibleCube.add(sphereRed); // Tambahkan sebagai anak dari invisibleCube

    // Bola Biru
    const sphereBlueGeometry = new THREE.SphereGeometry(0.5, 32, 16); // Radius bola
    const sphereBlueMaterial = new THREE.MeshBasicMaterial({ color: 0x0000cc }); // Biru
    const sphereBlue = new THREE.Mesh(sphereBlueGeometry, sphereBlueMaterial);
    // Posisikan bola biru di dalam 'invisibleCube'
    sphereBlue.position.set(-0.6, -0.6, 0); // Contoh posisi
    sphereBlue.name = "BlueSphere";
    invisibleCube.add(sphereBlue); // Tambahkan sebagai anak dari invisibleCube

    // Mengembalikan grup (untuk ditambahkan ke scene) dan referensi ke invisibleCube (untuk BoxHelper)
    return { group, referenceCube: invisibleCube };
}

export { createCubeWithInternalSpheres };