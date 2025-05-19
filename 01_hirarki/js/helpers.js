// js/helpers.js
import * as THREE from 'three';

function createReferenceCubeHelpers(referenceCube, scene) {
    const helpers = [];

    // BoxHelper untuk referenceCube (akan berwarna hijau)
    const boxHelper = new THREE.BoxHelper(referenceCube, 0x00ff00); // Warna hijau
    scene.add(boxHelper);
    helpers.push(boxHelper);

    // Opsional: AxesHelper lokal untuk referenceCube (menunjukkan orientasinya)
    // Jika ingin, sesuaikan ukuran dan uncomment
    // const cubeSizeArray = referenceCube.geometry.parameters ?
    //     [referenceCube.geometry.parameters.width, referenceCube.geometry.parameters.height, referenceCube.geometry.parameters.depth]
    //     : [1,1,1]; // default jika tidak ada parameter
    // const axesSize = Math.max(...cubeSizeArray) * 0.6;
    // const localAxesHelper = new THREE.AxesHelper(axesSize);
    // referenceCube.add(localAxesHelper); // Tambahkan sebagai anak agar ikut transformasi
    // helpers.push(localAxesHelper); // Tidak perlu di-push jika diupdate via parent

    return helpers; // Kembalikan BoxHelper untuk diupdate jika perlu
}

function updateHelpers(helpers) {
    helpers.forEach(helper => {
        if (helper && typeof helper.update === 'function') {
            helper.update();
        }
    });
}

export { createReferenceCubeHelpers, updateHelpers };