// js/utils/textureLoader.js
import * as THREE from 'three';

const loader = new THREE.TextureLoader();

function loadTexture(url) {
    return new Promise((resolve, reject) => {
        loader.load(
            url,
            (texture) => {
                texture.colorSpace = THREE.SRGBColorSpace; // Penting untuk warna yang benar
                texture.minFilter = THREE.LinearMipMapLinearFilter;
                texture.magFilter = THREE.LinearFilter;
                console.log(`Texture loaded successfully: ${url}`);
                resolve(texture);
            },
            undefined, // onProgress callback
            (errorEvent) => {
                console.error(`An error occurred loading the texture: ${url}`, errorEvent);
                // Buat tekstur placeholder jika gagal
                const canvas = document.createElement('canvas');
                canvas.width = 64;
                canvas.height = 64;
                const context = canvas.getContext('2d');
                context.fillStyle = 'magenta';
                context.fillRect(0, 0, 64, 64);
                context.fillStyle = 'black';
                context.font = '12px Arial';
                context.textAlign = 'center';
                context.fillText('Error', 32, 38);
                const errorTexture = new THREE.CanvasTexture(canvas);
                errorTexture.colorSpace = THREE.SRGBColorSpace;
                resolve(errorTexture); // Resolve dengan error texture agar aplikasi tidak crash
            }
        );
    });
}

export { loadTexture };