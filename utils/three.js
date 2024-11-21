"use client"

import * as THREE from "three"
import GUI from "lil-gui"

const count = 250
const mouse = {
    x: 0,
    y: 0
}

const particlesArray = new Float32Array(count * 3)
const particlesGeometry = new THREE.BufferGeometry(particlesArray)

for (let i = 0; i < count * 3; i++) {
    particlesArray[i] = (Math.random() - .5) * 7
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesArray, 3))

let showGui = false

export const renderThreeContent = () => {
    const textureLoader = new THREE.TextureLoader()
    const gui = new GUI()
    gui.close()
    gui.show(showGui)

    // Textures
    const star1 = textureLoader.load("/static/textures/particles/circle_05.png")

    // GUI Folders
    const guiCube = gui.addFolder('Cube')
    const guiLights = gui.addFolder('Lights')

    window.addEventListener('keypress', (e) => {
        console.log(e.key);
        if (e.key === 'g') {
            showGui = !showGui
            gui.show(showGui)
        }
    })

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x / window.innerWidth - .5
        mouse.y = - e.y / window.innerHeight + .5
    })

    const canvas = document.querySelector('#webgl')

    const scene = new THREE.Scene()

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    const params = {
        directionalColor: "#506886"
    }

    // Cube
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({
            color: '#111',
            roughness: .225,
            metalness: .85
        })
    )

    guiCube.add(cube.material, 'roughness').min(0).max(1).step(.01).name('Roughness')
    guiCube.add(cube.material, 'metalness').min(0).max(1).step(.01).name('Metalness')

    scene.add(cube)

    // Particles
    const particles = new THREE.Points(
        particlesGeometry,
        new THREE.PointsMaterial({
            size: .03,
            depthWrite: false,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            alphaMap: star1
        })
    )

    scene.add(particles)

    // Light
    const ambientLight = new THREE.AmbientLight(params.directionalColor, 6)
    scene.add(ambientLight)

    const directionalLight1 = new THREE.DirectionalLight(params.directionalColor, 10)
    directionalLight1.position.set(1, 1, -.5)
    scene.add(directionalLight1)

    const directionalLight2 = new THREE.DirectionalLight(params.directionalColor, 10)
    directionalLight2.position.set(1, -1, -.5)
    scene.add(directionalLight2)

    // const directionalHelper1 = new THREE.DirectionalLightHelper(directionalLight1)
    // scene.add(directionalHelper1)

    // const directionalHelper2 = new THREE.DirectionalLightHelper(directionalLight2)
    // scene.add(directionalHelper2)

    guiLights.add(directionalLight1, 'intensity').min(0).max(20).step(.01).name('Directional 1 Intensity')
    guiLights.add(directionalLight2, 'intensity').min(0).max(20).step(.01).name('Directional 2 Intensity')
    guiLights.add(ambientLight, 'intensity').min(0).max(20).step(.01).name('Ambient Intensity')



    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, .1, 100)
    camera.position.set(0, 0, 4)
    camera.lookAt(cube.position)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    renderer.render(scene, camera)

    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const clock = new THREE.Clock()

    const tick = () => {
        const elapsedTime = clock.getElapsedTime()

        // // Update Cube
        cube.rotation.y = elapsedTime * .14
        cube.rotation.x = elapsedTime * .15
        cube.rotation.z = - elapsedTime * .16

        // Camera
        camera.position.x = Math.cos(elapsedTime * .005) * 4
        camera.position.z = Math.sin(elapsedTime * .005) * 4 - (mouse.x * .05)
        camera.position.y = mouse.y * .05
        camera.lookAt(cube.position)

        // directionalLight1.position.x = Math.cos(elapsedTime * .005)
        // directionalLight1.position.z = Math.sin(elapsedTime * .005)
        // // directionalLight1.position.y = - mouse.y * .5

        // directionalLight2.position.x = Math.cos(elapsedTime * .005)
        // directionalLight2.position.z = Math.sin(elapsedTime * .005)

        renderer.render(scene, camera)

        window.requestAnimationFrame(tick)
    }

    tick()
}