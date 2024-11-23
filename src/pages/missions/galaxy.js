import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

export function initGalaxy(canvas, container, guiContainer) {
    /**
     * Base
     */
    // Debug
    const gui = new GUI({ container: guiContainer });
    gui.close()
    
    // Scene
    const scene = new THREE.Scene()
    
    /**
     * Galaxy
     */
    const parameters = {}
    parameters.count = 100000
    parameters.size = 0.01
    parameters.radius = 5
    parameters.branches = 3
    parameters.spin = 1
    parameters.randomness = 1
    parameters.randomnessPower = 3
    parameters.insideColor = '#ff6030'
    parameters.outsideColor = '#1b3984'
    
    let geometry = null
    let material = null
    let points = null
    
    const generateGalaxy = () => {
        /**
         * Destroy old galaxy
         */
        if (geometry) {
            geometry.dispose()
            material.dispose()
            scene.remove(points)
        }
    
        /**
         * Geometry
         */
        geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(parameters.count * 3)
        const colors = new Float32Array(parameters.count * 3)
    
        const colorInside = new THREE.Color(parameters.insideColor)
        const coloroOutside = new THREE.Color(parameters.outsideColor)
    
        for (let k = 0; k < parameters.count; k++) {
            const k3 = k * 3
    
            // Position
            const radius = Math.random() * parameters.radius
            const spinAngle = radius * parameters.spin
            const branchAngle = (k % parameters.branches) / parameters.branches * 2 * Math.PI
    
            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1)
    
            positions[k3 + 0] = Math.cos(branchAngle + spinAngle) * radius + randomX
            positions[k3 + 1] = randomY
            positions[k3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
    
            // Color
            const mixedColor = colorInside.clone()
            mixedColor.lerp(coloroOutside, radius / parameters.radius)
            colors[k3 + 0] = mixedColor.r
            colors[k3 + 1] = mixedColor.g
            colors[k3 + 2] = mixedColor.b
        }
    
        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        )
    
        geometry.setAttribute(
            'color',
            new THREE.BufferAttribute(colors, 3)
        )
    
        /**
         * Material
         */
        material = new THREE.PointsMaterial({
            size: parameters.size,
            sizeAttenuation: true,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            color: '#ff5588',
            vertexColors: true
        })
    
        /**
         * Points
         */
        points = new THREE.Points(geometry, material)
    
        scene.add(points)
    }
    
    generateGalaxy()
    
    gui.add(parameters, 'count').min(100).max(500000).step(100).onFinishChange(generateGalaxy)
    gui.add(parameters, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(generateGalaxy)
    gui.add(parameters, 'radius').min(0.01).max(20).step(0.01).onFinishChange(generateGalaxy)
    gui.add(parameters, 'branches').min(2).max(10).step(1).onFinishChange(generateGalaxy)
    gui.add(parameters, 'spin').min(- 2.5).max(2.5).step(0.01).onFinishChange(generateGalaxy)
    gui.add(parameters, 'randomness').min(0).max(2).step(0.01).onFinishChange(generateGalaxy)
    gui.add(parameters, 'randomnessPower').min(0).max(10).step(0.01).onFinishChange(generateGalaxy)
    gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy)
    gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy)
    
    /**
     * Sizes
     */
    const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
    };
    
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = container.offsetWidth;
        sizes.height = container.offsetHeight;
    
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    
    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = 3
    camera.position.y = 3
    camera.position.z = 3
    scene.add(camera)
    
    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 1);
    
    /**
     * Animate
     */
    const clock = new THREE.Clock()
    
    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
    
        // Update controls
        controls.update()
    
        // Render
        renderer.render(scene, camera)
    
        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }
    
    tick()
}