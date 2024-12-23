// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cubeCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create a Torus Knot geometry
const geometry = new THREE.TorusKnotGeometry(3.5, .9, 250, 25); // Parameters for torus knot


// Create a material for the faces
const faceMaterial = new THREE.MeshStandardMaterial({
    color: 0x0b0f60db,      // White color
    transparent: true,    // Enable transparency
    opacity: 0.5,         // Set the transparency level
    side: THREE.DoubleSide // Ensure both sides of faces are visible
});

// Create a mesh with the geometry and material
const torusKnotWithFaces = new THREE.Mesh(geometry, faceMaterial);
scene.add(torusKnotWithFaces);

// Create a wireframe geometry
const wireframe = new THREE.WireframeGeometry(geometry);

// Create a material for the wireframe
const material = new THREE.LineBasicMaterial({ color: 0xed3b00, linewidth: 1 }); // Adjust line thickness (Note: linewidth > 1 may not work in some browsers)

// Create line segments from the wireframe
const torusKnot = new THREE.LineSegments(wireframe, material);

scene.add(torusKnot);

// Add a light source (even if not used for wireframe, it's included for potential upgrades)
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Set initial camera position
camera.position.z = 5;

// Variables for rotation and scroll interaction
let scrollDelta = 0;
let isScrolling = false;

// Handle mouse scroll
window.addEventListener('wheel', (event) => {
    scrollDelta = event.deltaY > 0 ? 1 : -1;
    isScrolling = true;
    setTimeout(() => { isScrolling = false; }, 200); // Stop scrolling after a delay
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Apply rotation and camera movement based on scroll
    if (isScrolling) {
        torusKnot.rotation.y += 0.009 * scrollDelta; // Rotate object
        camera.position.y += 0.01 * scrollDelta; // Move camera
    }

    renderer.render(scene, camera);
}

animate();

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Populate text grid
document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.background-text');
    const rows = Math.ceil(window.innerHeight / 50); // Adjust based on font size
    const cols = Math.ceil(window.innerWidth / 50); // Adjust based on font size

    for (let i = 0; i < rows * cols; i++) {
        const span = document.createElement('span');
        span.innerText = 'something';
        textContainer.appendChild(span);
    }
});
