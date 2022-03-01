import React, { useRef, useEffect } from 'react'
import * as THREE from "three";
// import { BufferAttribute } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// reset Styles
import "../../App.scss"

//R3F
// import { Canvas, useFrame, extend  } from '@react-three/fiber'

import Vibrantfragment from '../../shaders/VibrantShader/Vibrantfragment'
import VibrantVertex from '../../shaders/VibrantShader/VibrantVertex'

import model from "../../modelfiles/face/scene-processed.glb";
// import model from "../../modelfiles/woman/scene-processed.glb";
import sky from "../../assets/images/textures/skytexture.png";

import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// import { SplitText } from "gsap/SplitText"; 

gsap.registerPlugin(ScrollTrigger);

let OrbitControls = require("three-orbit-controls")(THREE);

function VibrantModel() {

    const VibrantContainer = useRef();

    let frag = true;

    useEffect(() => {

        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x111111, 1);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        var width = VibrantContainer.current.offsetWidth;
        var height = VibrantContainer.current.offsetHeight;
        VibrantContainer.current.appendChild(renderer.domElement );

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
        camera.position.set(0, 0, 2);

        const control = new OrbitControls(camera, renderer.domElement);
        control.enableDamping = true;
        control.dampingFactor = 0.3;
        control.enableZoom = true;
        control.minDistance = 1;
        control.maxDistance = 2.6;

        let loader = new GLTFLoader();

        loader.load(model,(gltf)=>{
            scene.add(gltf.scene);
            // model = gltf.scene;
            // gltf.scene.position.y = -0.79;
            gltf.scene.traverse(o=>{
                if(o.isMesh){
                    o.geometry.center();
                    // o.scale.set(0.021,0.021,0.021);
                    o.scale.set(0.1,0.1,0.1);
                    o.material = material;
                    
                    console.log(o);
                }
            })  
        })

        // const geometry = new THREE.PlaneBufferGeometry( 1, 1 );
        var material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
        material = new THREE.ShaderMaterial({
            fragmentShader:Vibrantfragment,
            vertexShader:VibrantVertex,
            uniforms:{
                time : { type: "f", value: 0}, 
                mouse : { type: "v2", value: new THREE.Vector2(0,0)}, 
                sky : { type: "t", value: new THREE.TextureLoader().load(sky)}, 
                // mouse : { type: "v3", value: new THREE.Vector3()}, 
                resolution: { type: "v4", value: new THREE.Vector4()},
            },
            side: THREE.DoubleSide,
            // transparent: true,
            // depthTest: false,
            // depthWrite: false,
        })
        
        let time = 0;
        
        // const setupResize = () => {
        //     // window.addEventListener("resize", resize.bind(this))
        //     window.addEventListener("resize", bindedResize)
        // }

        const resize = () => {
            width = VibrantContainer.current.offsetWidth;
            height = VibrantContainer.current.offsetHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;

            // camera.updateProjectionMatrix();
        }

        const render = () => { 
            
            if(frag){
                
                time+=0.05;
                renderer.render( scene, camera );
                material.uniforms.time.value = time;
                window.requestAnimationFrame(render.bind(this));
            }else{
                console.log('///////////////false')
            }
        }

        const bindedResize = resize.bind(this)
        // setupResize();
        resize();
        render();

        return() => {
            window.removeEventListener("resize", bindedResize);
            frag = false;
        }

        }, []);

    return (
        <>  
            <div className="wrap">
                <div ref={VibrantContainer} id="vibrant-mesh-container"></div>
            </div>
        </>
    )
}

export default VibrantModel
