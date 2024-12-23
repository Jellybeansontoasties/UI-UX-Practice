

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cubeCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create an elongated cube
const geometry = new THREE.BoxGeometry(2, 7, 1); // Elongated cube
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

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
        cube.rotation.y += 0.009 * scrollDelta; // Rotate cube
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
        span.innerText = 'blah blah blah';
        textContainer.appendChild(span);
    }
});
