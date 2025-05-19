// js/utils/resize.js

function setupResizeHandler(camera, renderer) {
    window.addEventListener('resize', () => {
        // Update ukuran canvas
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Update aspect ratio kamera
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}

export { setupResizeHandler };