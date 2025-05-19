// js/sceneSetup.js
// Note: THREE is available globally because the CDN script is loaded before this module

/**
 * Sets up the Three.js Scene.
 * @returns {THREE.Scene} The created scene.
 */
export function setupScene() {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xcccccc); // Optional: Set a background color
    return scene;
}

/**
 * Sets up the Three.js Camera.
 * @param {number} width - The width of the viewport.
 * @param {number} height - The height of the viewport.
 * @returns {THREE.PerspectiveCamera} The created camera.
 */
export function setupCamera(width, height) {
    // Using PerspectiveCamera
    const fov = 75; // Field of view
    const aspect = width / height; // Aspect ratio
    const near = 0.1; // Near clipping plane
    const far = 1000; // Far clipping plane

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3; // Move camera back to see the objects at the origin

    return camera;
}

/**
 * Sets up the Three.js Renderer.
 * @param {number} width - The width of the viewport.
 * @param {number} height - The height of the viewport.
 * @returns {THREE.WebGLRenderer} The created renderer.
 */
export function setupRenderer(width, height) {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // antialias makes edges smoother
    renderer.setSize(width, height);
    return renderer;
}