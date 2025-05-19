// js/materials.js
// Note: THREE is available globally because the CDN script is loaded before this module

/**
 * Creates a basic material with flat red color (for solid meshes).
 * MeshBasicMaterial does not react to lighting.
 * @returns {THREE.MeshBasicMaterial} The created material.
 */
export function createFlatRedMaterial() {
    const color = 0xff0000; // Red color in hexadecimal
    const material = new THREE.MeshBasicMaterial({ color: color });
    return material;
}

/**
 * Creates a basic line material with red color.
 * LineBasicMaterial does not react to lighting.
 * @returns {THREE.LineBasicMaterial} The created material.
 */
export function createLineRedMaterial() {
    const color = 0xff0000; // Red color in hexadecimal
    const material = new THREE.LineBasicMaterial({ color: color });
    return material;
}