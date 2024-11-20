"use client"

import * as THREE from "three"
import GUI from "lil-gui"
// import { OrbitControls } from "three/addons/controls/OrbitControls.js"

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

    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    // Test Object
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshStandardMaterial({
            color: '#ffffff',
            roughness: .4,
            metalness: .75
        })
    )
    cube.rotation.y = Math.PI * .25

    guiCube.add(cube.material, 'roughness').min(0).max(1).step(.01).name('Roughness')
    guiCube.add(cube.material, 'metalness').min(0).max(1).step(.01).name('Metalness')

    scene.add(cube)

    // Light
    const ambientLight = new THREE.AmbientLight('#ffffff', .5)
    const directionalLight = new THREE.DirectionalLight('#ffffff', 3)
    directionalLight.position.set(1,1,.5)

    const pointLight = new THREE.PointLight('#248573', 20)
    pointLight.position.set(-.9, .6, .9)
    scene.add(pointLight)

    guiLights.add(ambientLight, 'intensity').min(.01).max(3).step(.01).name('Ambient Intensity')
    guiLights.add(directionalLight, 'intensity').min(.01).max(10).step(.01).name('Directional Intensity')
    guiLights.add(pointLight, 'intensity').min(.1).max(20).step(.1).name('Point Intensity')

    scene.add(ambientLight, directionalLight)

    // Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, .1, 100)
    camera.position.set(0, 1, 3)
    camera.lookAt(cube.position)
    scene.add(camera)

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    renderer.render(scene, camera)

    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // const tick = () => {
    //     controls.update()

    //     renderer.render(scene, camera)

    //     window.requestAnimationFrame(tick)
    // }

    // tick()
}