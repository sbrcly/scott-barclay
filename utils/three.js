"use client"

import * as THREE from "three"
import GUI from "lil-gui"

export const renderThreeContent = () => {
    const gui = new GUI()
    gui.close()

    // GUI Folders
    const guiCube = gui.addFolder('Cube')
    const guiLights = gui.addFolder('Lights')

    const canvas = document.querySelector('#webgl')

    const scene = new THREE.Scene()

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    // Test Object
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({
            color: '#111',
            roughness: .5,
            metalness: .99
        })
    )
    cube.rotation.y = Math.PI * .25

    guiCube.add(cube.material, 'roughness').min(0).max(1).step(.01).name('Roughness')
    guiCube.add(cube.material, 'metalness').min(0).max(1).step(.01).name('Metalness')

    scene.add(cube)

    // Light
    const directionalLightRight = new THREE.DirectionalLight('#afcf9f', 7)
    directionalLightRight.position.set(1, .5, .5)

    const directionalLightLeft = new THREE.DirectionalLight('#c48573', 7)
    directionalLightLeft.position.set(-1, -.5, .5)

    guiLights.add(directionalLightRight, 'intensity').min(0).max(10).step(.01).name('Directional R Intensity')
    guiLights.add(directionalLightLeft, 'intensity').min(0).max(20).step(.1).name('Directional L Intensity')

    scene.add(directionalLightRight, directionalLightLeft)

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, .1, 100)
    camera.position.set(0, 1, 4)
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

        // Update Cube
        cube.rotation.y = elapsedTime * .1
        cube.rotation.x = elapsedTime * .2
        cube.rotation.z = elapsedTime * .3

        renderer.render(scene, camera)

        window.requestAnimationFrame(tick)
    }

    tick()
}