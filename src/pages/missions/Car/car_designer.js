import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import GUI from 'lil-gui'
import { Sky } from 'three/addons/objects/Sky.js'

export default function initCar(canvas, container) {
    /**
     * Base
     */
    // Debug (GUI)
    const gui = new GUI()

    // Scene
    const scene = new THREE.Scene()

    /**
     * Models
     */
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')

    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    let mixer = null

    const colorGuiFolder = gui.addFolder('colors')

    gltfLoader.load(
        '/models/car.glb',
        (gltf) => {

            const materials = new Set()

            gltf.scene.traverse((child) => {
                if (child.isMesh && child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach(m => materials.add(m))
                    } else {
                        materials.add(child.material)
                    }
                }
            })

            const uniqueMaterials = [...materials]
            console.log('uniqueMaterials', uniqueMaterials)
            for (const material of uniqueMaterials) {
                colorGuiFolder.addColor(material, 'color').name(material.name)
            }

            scene.add(gltf.scene)
        }
    )

    /**
     * Floor
     */
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(50, 50),
        new THREE.MeshPhysicalMaterial({
            roughness: 0,
            transmission: 1,
            thickness: 0,
            side: THREE.DoubleSide
        })
    )
    floor.receiveShadow = true
    floor.rotation.x = - Math.PI * 0.5
    scene.add(floor)

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.4)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 2.4)
    pointLight.position.set(2, 7, 0)
    pointLight.power = 400
    pointLight.castShadow = true
    scene.add(pointLight)

    /**
     * Sizes
     */
    const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
    }
    
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = container.offsetWidth
        sizes.height = container.offsetHeight
    
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
    // Group Camera
    const groupCamera = new THREE.Group()
    scene.add(groupCamera)

    // Base camera
    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
    )
    camera.position.set(6, 3, 4)
    camera.lookAt(new THREE.Vector3(0, 6, 0))
    groupCamera.add(camera)

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 1, 0)
    controls.maxPolarAngle = Math.PI * 0.5
    controls.maxDistance = 15
    controls.minDistance = 5
    controls.enablePan = false
    controls.enableDamping = true

    renderer.outputEncoding = THREE.SRGBColorSpace

    /**
     * Sky
     */
    const sky = new Sky()
    sky.scale.set(100, 100, 100)
    scene.add(sky)
    sky.material.uniforms['turbidity'].value = 30
    sky.material.uniforms['rayleigh'].value = 5
    sky.material.uniforms['mieCoefficient'].value = 0.01
    sky.material.uniforms['mieDirectionalG'].value = 0.95
    sky.material.uniforms['sunPosition'].value.set(-0.9, -0.038, -0.95)

    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    // Cursor animation
    const cursor = {
        x: 0,
        y: 0,
    }

    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.7
        cursor.y = -(event.clientY / sizes.height - 0.7)
    })

    const tick = () => {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime

        if (mixer) {
            mixer.update(deltaTime)
        }

        controls.update()

        groupCamera.rotation.y = - cursor.x * Math.PI / 4
        groupCamera.rotation.z = - cursor.y * Math.PI / 4

        renderer.render(scene, camera)

        window.requestAnimationFrame(tick)
    }

    tick()
}
