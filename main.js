import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// preloader 
var loader = document.getElementById('preloader');
window.addEventListener("load" , function(){
    loader.style.display = "none"
})
// cursor following
        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })


btn.addEventListener('click', () => {
    tl.play()
})


function scrollReveal() {
	var revealPoint = 150;
	var revealElement = document.querySelectorAll(".demo");
	for (var i = 0; i < revealElement.length; i++) {
		var windowHeight = window.innerHeight;
		var revealTop = revealElement[i].getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			revealElement[i].classList.add("active");
		} else {
			revealElement[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", scrollReveal);

// const circleSvg = document.querySelector('svg')
// const btn = document.querySelector('button')

// let mouseX = 0
// let mouseY = 0

// window.addEventListener('mousemove', (event) => {

//     mouseY = (event.clientY / 16) - (45 / 16) + 'rem'
//     mouseX = (event.clientX / 16) - (45 / 16) + 'rem'
// })

// const mouseMove = () => {

//     circleSvg.style.top = mouseY
//     circleSvg.style.left = mouseX
//     window.requestAnimationFrame(mouseMove)
// }

// mouseMove()

// var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

// tl.to(circleSvg, {width: 0, opacity: 0})
// tl.to('body, button', {background: 'white'})
// tl.pause()

// btn.addEventListener('click', () => {
//     tl.play()
// })
// function myFunction(x) {
//   x.classList.toggle("change");
// }



// // Setup
// class Stage {
//   constructor() {
//     this.renderParam = {
//       width: window.innerWidth,
//       height: window.innerHeight
//     };

//     this.cameraParam = {
//       fov: 70,
//       lookAt: new THREE.Vector3(0, 0, 0)
//     };

//     this.fogParam = {
//       color: 0x000000,
//       start: 50,
//       end: 2000
//     };

//     this.scene = null;
//     this.camera = null;
//     this.renderer = null;
//     this.geometry = null;
//     this.material = null;
//     this.mesh = null;
//     this.isInitialized = false;
//   }

//   init() {
//     this._setScene();
//     this._setRender();
//     this._setCamera();
//     this._setFog();

//     this.isInitialized = true;
//   }

//   _setScene() {
//     this.scene = new THREE.Scene();
//   }

//   _setRender() {
//     this.renderer = new THREE.WebGLRenderer({
//       canvas: document.getElementById("bg"),
//       alpha: true
//     });
//     this.renderer.setPixelRatio(window.devicePixelRatio);
//     this.renderer.setSize(this.renderParam.width, this.renderParam.height);
//   }

//   _setCamera() {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;

//     if (!this.isInitialized) {
//       this.camera = new THREE.PerspectiveCamera(
//         this.cameraParam.fov,
//         this.renderParam.width / this.renderParam.height
//       );

//       this.camera.lookAt(this.cameraParam.lookAt);
//     }

//     this.camera.aspect = windowWidth / windowHeight;
//     this.camera.updateProjectionMatrix();
//     this.renderer.setPixelRatio(window.devicePixelRatio);
//     this.renderer.setSize(windowWidth, windowHeight);
//   }

//   _setFog() {
//     this.scene.fog = new THREE.Fog(
//       this.fogParam.fov,
//       this.fogParam.start,
//       this.fogParam.end
//     );
//   }

//   _render() {
//     let rot = 0;
//     const radian = (rot * Math.PI) / 180;

//     rot += 0.1;
//     this.camera.position.x = 1000 * Math.sin(radian);
//     this.camera.position.z = 1000 * Math.cos(radian);
//     this.renderer.render(this.scene, this.camera);
//   }

//   onResize() {
//     this._setCamera();
//   }

//   onRaf() {
//     this._render();
//   }
// }

// class Mesh {
//   constructor(stage) {
//     this.stage = stage;
//     this.mesh = null;
//   }

//   init() {
//     this._setMesh();
//   }

//   _setMesh() {
//     const vertices = [];
//     const SIZE = 3000;
//     const LENGTH = 3000;
//     const geometry = new THREE.BufferGeometry();
//     const material = new THREE.PointsMaterial({
//       color: 0xffffff
//     });

//     for (let i = 0; i < LENGTH; i++) {
//       const x = SIZE * (Math.random() - 0.5);
//       const y = SIZE * (Math.random() - 0.5);
//       const z = SIZE * (Math.random() - 0.5);

//       vertices.push(x, y, z);
//     }

//     geometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(vertices, 3)
//     );

//     this.mesh = new THREE.Points(geometry, material);
//     this.stage.scene.add(this.mesh);
//   }

//   _render() {
//     this.mesh.rotation.y += 0.001;
//   }

//   onRaf() {
//     this._render();
//   }
// }

// (() => {
//   const stage = new Stage();
//   const mesh = new Mesh(stage);

//   stage.init();
//   mesh.init();

//   window.addEventListener("resize", () => {
//     stage.onResize();
//   });

//   const _raf = () => {
//     window.requestAnimationFrame(() => {
//       stage.onRaf();
//       mesh.onRaf();

//       _raf();
//     });
//   };

//   _raf();
// })();


// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// });

// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// camera.position.setX(-3);

// renderer.render(scene, camera);

// // Torus

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

// // Lights

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5, 5, 5);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight, ambientLight);

// // Helpers

// // const lightHelper = new THREE.PointLightHelper(pointLight)
// // const gridHelper = new THREE.GridHelper(200, 50);
// // scene.add(lightHelper, gridHelper)

// // const controls = new OrbitControls(camera, renderer.domElement);

// function addStar() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//   const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
//   const star = new THREE.Mesh(geometry, material);

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// // Background

// const spaceTexture = new THREE.TextureLoader().load('space.jpg');
// scene.background = spaceTexture;

// // Avatar



// // Moon

// const moonTexture = new THREE.TextureLoader().load('moon.jpg');
// const normalTexture = new THREE.TextureLoader().load('normal.jpg');

// const moon = new THREE.Mesh(
//   new THREE.SphereGeometry(3, 32, 32),
//   new THREE.MeshStandardMaterial({
//     map: moonTexture,
//     normalMap: normalTexture,
//   })
// );

// scene.add(moon);

// moon.position.z = 30;
// moon.position.setX(-10);


// // Scroll Animation

// function moveCamera() {
//   const t = document.body.getBoundingClientRect().top;
//   moon.rotation.x += 0.05;
//   moon.rotation.y += 0.075;
//   moon.rotation.z += 0.05;



//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

// // Animation Loop

// function animate() {
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   moon.rotation.x += 0.005;

//   // controls.update();

//   renderer.render(scene, camera);
// }

// animate();

