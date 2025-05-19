// js/hierarchy.js
// Note: THREE is available globally but not strictly needed for this specific module's logic

/**
 * Sets up the parent-child relationship between two Three.js objects.
 * Also positions the child relative to the parent.
 * @param {THREE.Object3D} parent - The object that will be the parent (e.g., a LineSegments object).
 * @param {THREE.Object3D} child - The object that will be the child (e.g., a LineSegments object).
 */
export function setupHierarchy(parent, child) {
    // Add the child object (LineSegments) to the parent object (LineSegments)
    parent.add(child);

    // Position the child relative to the parent's local origin (0,0,0).
    // The child sphere will be positioned 0.5 units right and 0.5 units up
    // from the center of the parent cube's coordinate system.
    child.position.set(0.5, 0.5, 0);
    console.log("Hierarchy established: Sphere lines added as child of Cube edges.");
}