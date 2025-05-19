// js/hierarchy.js
import * as THREE from 'three';

function createHierarchyObjects() {
    const objects = [];

    // Material dasar untuk semua objek, kita akan fokus pada outline
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xcccccc, // Warna abu-abu terang untuk wireframe
        wireframe: true,
    });

    // Objek Induk (Parent) - Kubus
    const parentGeometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    const parentObject = new THREE.Mesh(parentGeometry, wireframeMaterial);
    parentObject.position.set(0, 1.25, 0); // Posisikan agar alasnya di y=0
    parentObject.name = "ParentCube";
    objects.push(parentObject);

    // Objek Anak 1 (Child 1) - Kubus lebih kecil
    const child1Geometry = new THREE.BoxGeometry(1, 1, 1);
    const child1Object = new THREE.Mesh(child1Geometry, wireframeMaterial);
    child1Object.position.set(2, 0.5, 0); // Relatif terhadap parent, y=0.5 agar alasnya di y=0 relatif ke parent
    child1Object.name = "ChildCube1";
    parentObject.add(child1Object);
    objects.push(child1Object);

    // Objek Anak 2 (Child 2) - Bola
    const child2Geometry = new THREE.SphereGeometry(0.8, 16, 12);
    const child2Object = new THREE.Mesh(child2Geometry, wireframeMaterial);
    child2Object.position.set(-1.5, 0.8, 1.5); // Relatif terhadap parent
    child2Object.scale.set(1, 1.2, 1); // Skala sedikit di sumbu Y
    child2Object.name = "ChildSphere2";
    parentObject.add(child2Object);
    objects.push(child2Object);

    // Objek Cucu (Grandchild) - Kerucut, anak dari Child 1
    const grandchildGeometry = new THREE.ConeGeometry(0.6, 1.2, 16);
    const grandchildObject = new THREE.Mesh(grandchildGeometry, wireframeMaterial);
    grandchildObject.position.set(0, 1.1, 0); // Relatif terhadap child1Object (0.5 + 1.2/2)
    grandchildObject.name = "GrandchildCone";
    child1Object.add(grandchildObject);
    objects.push(grandchildObject);

    // Objek independen untuk perbandingan
    const independentGeometry = new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16);
    const independentObject = new THREE.Mesh(independentGeometry, wireframeMaterial);
    independentObject.position.set(-4, 1, -2);
    independentObject.name = "IndependentTorusKnot";
    // Tidak di-add ke parentObject, jadi ini root object di scene
    objects.push(independentObject);


    // Mengembalikan root object utama dan satu objek independen, serta list semua objek
    // Scene akan menerima array dari root objects
    return { roots: [parentObject, independentObject], all: objects };
}

export { createHierarchyObjects };