// js/objects.js
// Note: THREE is available globally because the CDN script is loaded before this module

import { createLineRedMaterial } from './materials.js'; // Import the new line material function

/**
 * Creates the edges of a cube as LineSegments.
 * Uses EdgesGeometry to get only the outlines.
 * @returns {THREE.LineSegments} The created cube edges object.
 */
export function createCubeEdges() {
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Solid geometry first
    // Use EdgesGeometry to extract only the edges
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const material = createLineRedMaterial();
    // Create LineSegments from the edges geometry and line material
    const cubeEdges = new THREE.LineSegments(edgesGeometry, material);
    return cubeEdges;
}

/**
 * Creates a wireframe sphere as LineSegments.
 * Creates lines along the segment boundaries of the sphere geometry.
 * @returns {THREE.LineSegments} The created sphere lines object.
 */
export function createSphereLines() {
    // SphereGeometry(radius, widthSegments, heightSegments)
    const geometry = new THREE.SphereGeometry(0.3, 16, 12); // Smaller radius, potentially reduced segments for clarity
    const material = createLineRedMaterial();
    // Create LineSegments directly from the sphere geometry
    const sphereLines = new THREE.LineSegments(geometry, material);
    return sphereLines;
}