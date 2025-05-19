// js/utils/resize.js
import { updateMainCameraAspect } from '../camera.js';

function setupGlobalResizeHandler(camera, renderer) {
    window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        renderer.setSize(newWidth, newHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        updateMainCameraAspect(camera, newWidth / newHeight);
    });
}

export { setupGlobalResizeHandler };