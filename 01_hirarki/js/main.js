// js/main.js
import { setupScene, setupCamera, setupRenderer } from './sceneSetup.js';
// No direct import of materials needed here, objects.js handles it
// import { createLineRedMaterial } from './materials.js';
import { createCubeEdges, createSphereLines } from './objects.js'; // Import new object functions
import { setupHierarchy } from './hierarchy.js';
import { startRenderLoop } from './renderLoop.js';

// Get window dimensions
const width = window.innerWidth;
const height = window.innerHeight;

// 1. Setup Scene, Camera, Renderer
const scene = setupScene();
const camera = setupCamera(width, height);
const renderer = setupRenderer(width, height);

// Append renderer's canvas to the document body
document.body.appendChild(renderer.domElement);

// 2. Create Objects (Now creating Line Segments instead of Meshes)
const cube = createCubeEdges(); // This is our parent (LineSegments)
const sphere = createSphereLines(); // This is our child (LineSegments)

// Add the parent object (LineSegments) to the scene
scene.add(cube);

// 3. Setup Hierarchy (add child LineSegments to parent LineSegments)
setupHierarchy(cube, sphere);

// 4. Handle Window Resize
function onWindowResize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
}

window.addEventListener('resize', onWindowResize);

// 5. Start Render Loop
// We pass the cube object (LineSegments) to the render loop so we can easily rotate the parent
startRenderLoop(renderer, scene, camera, cube);

console.log("Three.js scene initialized with wireframe cube-sphere hierarchy.");