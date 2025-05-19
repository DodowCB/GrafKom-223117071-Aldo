// js/renderLoop.js
// Note: THREE is available globally but not strictly needed for this specific module's logic

/**
 * Starts the animation/render loop.
 * @param {THREE.WebGLRenderer} renderer - The renderer instance.
 * @param {THREE.Scene} scene - The scene instance.
 * @param {THREE.Camera} camera - The camera instance.
 * @param {THREE.Object3D} objectToAnimate - An object to animate (e.g., the parent cube LineSegments).
 */
export function startRenderLoop(renderer, scene, camera, objectToAnimate) {

    /**
     * The main animation loop.
     * This function requests the next frame and renders the scene.
     */
    function animate() {
        requestAnimationFrame(animate); // Request the next frame

        // Example: Rotate the parent object (the cube edges)
        // The child sphere lines will rotate along with the parent due to hierarchy
        if (objectToAnimate) {
             objectToAnimate.rotation.x += 0.005;
             objectToAnimate.rotation.y += 0.005;
        }

        renderer.render(scene, camera); // Render the scene
    }

    animate(); // Start the loop for the first time
    console.log("Render loop started.");
}