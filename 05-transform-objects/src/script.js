import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const house = new THREE.Group();
house.rotation.z = 1.75;
house.rotation.x = 1.25;
scene.add(house);

// CUBE
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:"cyan"})
);
house.add(cube)

// TRIANGLE
const triangle = new THREE.Mesh(
    new THREE.ConeGeometry(),
    new THREE.MeshBasicMaterial({color:"red"}),
);
triangle.position.y = 1;
house.add(triangle)

// Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);