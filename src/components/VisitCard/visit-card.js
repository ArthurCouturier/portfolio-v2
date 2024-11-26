import * as THREE from 'three';
import gsap from 'gsap';

export function initVisitCard(canvas, container) {
    
    // Scene
    const scene = new THREE.Scene()
    
    /**
     * Textures
     */
    const textureLoader = new THREE.TextureLoader()
    const rectoTexture = textureLoader.load('/textures/recto.png')
    const versoTexture = textureLoader.load('/textures/verso.png')
    
    // Flip x axis
    versoTexture.wrapS = THREE.RepeatWrapping
    versoTexture.repeat.x = -1
    
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
    // Group
    const group = new THREE.Group()
    scene.add(group)
    
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(0, 0, 4)
    group.add(camera)
    
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0);
    
    // sRGB Encoding
    THREE.ColorManagement.enabled = true;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    rectoTexture.outputColorSpace = THREE.LinearSRGBColorSpace
    versoTexture.encoding = THREE.LinearSRGBColorSpace
    
    /**
     * Animate
     */
    
    /**
     * Objects
     */
    // Create the card
    function createCard(width, height, radius) {
        const shape = new THREE.Shape();
        const x = -width / 2; // Point de départ sur l'axe X
        const y = -height / 2; // Point de départ sur l'axe Y
    
        shape.moveTo(x + radius, y); // Point initial
        shape.lineTo(x + width - radius, y); // Ligne horizontale en bas
        shape.quadraticCurveTo(x + width, y, x + width, y + radius); // Coin en bas à droite
        shape.lineTo(x + width, y + height - radius); // Ligne verticale droite
        shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height); // Coin en haut à droite
        shape.lineTo(x + radius, y + height); // Ligne horizontale en haut
        shape.quadraticCurveTo(x, y + height, x, y + height - radius); // Coin en haut à gauche
        shape.lineTo(x, y + radius); // Ligne verticale gauche
        shape.quadraticCurveTo(x, y, x + radius, y); // Coin en bas à gauche
    
        return shape;
    }
    
    // Card parameters
    const cardParameters = {
        width: 5,
        height: 3,
        radius: 0.3,
    };
    
    // Geometry
    const cardShape = createCard(cardParameters.width, cardParameters.height, cardParameters.radius);
    const extrudeSettings = { depth: 0.03, bevelEnabled: false };
    const cardGeometry = new THREE.ExtrudeGeometry(cardShape, extrudeSettings);
    
    // Forcer la génération des index
    cardGeometry.setIndex([...Array(cardGeometry.attributes.position.count).keys()]);
    
    // Séparation des groupes pour attribuer les matériaux
    cardGeometry.clearGroups();
    const totalFaces = cardGeometry.index.count / 3;
    
    // Recto : premières faces
    const rectoFaceCount = cardShape.getPoints().length - 1;
    cardGeometry.addGroup(0, rectoFaceCount * 3, 2); // Matériau recto
    
    // Verso : dernières faces
    const versoStart = (totalFaces - rectoFaceCount) * 3;
    cardGeometry.addGroup(versoStart, rectoFaceCount * 3, 1); // Matériau verso
    
    // Bords : tout le reste
    const edgeStart = rectoFaceCount * 3;
    const edgeCount = versoStart - edgeStart;
    cardGeometry.addGroup(edgeStart, edgeCount, 0); // Matériau des bords
    
    
    // Scaling
    cardGeometry.computeBoundingBox();
    const bbox = cardGeometry.boundingBox;
    const max = bbox.max;
    const min = bbox.min;
    const size = new THREE.Vector3().subVectors(max, min);
    
    // UVs
    cardGeometry.attributes.uv = new THREE.BufferAttribute(
        new Float32Array(cardGeometry.attributes.position.count * 2),
        2
    );
    
    for (let i = 0; i < cardGeometry.attributes.position.count; i++) {
        const x = cardGeometry.attributes.position.getX(i);
        const y = cardGeometry.attributes.position.getY(i);
        const u = (x - min.x) / size.x; // Normalize UV (0-1)
        const v = (y - min.y) / size.y; // Normalize UV (0-1)
        cardGeometry.attributes.uv.setXY(i, u, v);
    }
    
    // Materials
    const rectoMaterial = new THREE.MeshStandardMaterial({
        map: rectoTexture,
        metalness: 0.7,
        roughness: 0.3,
    });
    
    const versoMaterial = new THREE.MeshStandardMaterial({
        map: versoTexture,
        metalness: 0.7,
        roughness: 0.3,
    });
    
    const edgeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff, // Couleur pour le bord
        metalness: 0.7,
        roughness: 0.3,
    });
    
    const materials = [rectoMaterial, edgeMaterial, versoMaterial];
    
    // Mesh
    const cardMesh = new THREE.Mesh(cardGeometry, materials);
    scene.add(cardMesh);
    
    /**
     * Lights
     */
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);
    
    // Point lights
    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(2, 1, 5);
    scene.add(pointLight);
    
    /**
     * Animations
    */
    
    // Cursor animation
    const cursor = {
        x: 0,
        y: 0,
    };
    
    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.7;
        cursor.y = -(event.clientY / sizes.height - 0.7);
    })
    
    // Click animation
    let isFlipped = false;
    
    canvas.addEventListener('click', () => {
        const targetAngle = isFlipped ? 0 : Math.PI;
        isFlipped = !isFlipped;
        
        gsap.to(cardMesh.rotation, {
            y: targetAngle,
            duration: 0.3,
            ease: 'power2.inOut',
        });
    });
    
    // Scene animation
    function tick() {
        // Rotate the card
        group.rotation.y = cursor.x * Math.PI / 6;
        group.rotation.x = - cursor.y * Math.PI / 6;
    
        requestAnimationFrame(tick);
        renderer.render(scene, camera);
    }
    tick();    
}
