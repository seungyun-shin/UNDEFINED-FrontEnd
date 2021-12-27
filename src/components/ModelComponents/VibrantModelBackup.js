import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";
import { BufferAttribute } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// reset Styles
import "../../App.scss"

//R3F
import { Canvas, useFrame, extend  } from '@react-three/fiber'

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

    useEffect(() => {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                // this.renderer.setClearColor(0x000000, 1);
                this.renderer.setClearColor(0x111111, 1);

                this.container = document.getElementById("vibrant-mesh-container");
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.container.appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
                this.camera.position.set(0, 0, 2);
                
                this.control = new OrbitControls(this.camera, this.renderer.domElement);
                this.control.enableDamping = true;
                this.control.dampingFactor = 0.3;
                this.control.enableZoom = true;
                this.control.minDistance = 1;
                this.control.maxDistance = 2.6;

                this.scene = new THREE.Scene();

                // this.setupResize();
                this.addMesh();
                this.resize();
                this.time=0;
                this.render();
                // this.mouseEvents();

                this.loader = new GLTFLoader();

                this.loader.load(model,(gltf)=>{
                    console.log();
                    this.scene.add(gltf.scene);
                    this.model = gltf.scene;
                    // gltf.scene.position.y = -0.79;
                    gltf.scene.traverse(o=>{
                        if(o.isMesh){
                            o.geometry.center();
                            // o.scale.set(0.021,0.021,0.021);
                            o.scale.set(0.1,0.1,0.1);
                            o.material = this.material;
                            
                            console.log(o);
                        }
                    })
                })

            }
            
            setupResize(){
                window.addEventListener("resize", this.resize.bind(this))
            }
            
            resize(){
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.renderer.setSize(this.width, this.height);
                this.camera.aspect = this.width / this.height;

                // this.imageAspect = 1;
                // // this.imageAspect = 1080/1920;
                // let a1; let a2;
                // if(this.height/this.width>this.imageAspect){
                //     a1 = (this.width/this.height) * this.imageAspect;
                //     a2 = 1;
                // }else{
                //     a1 = 1;
                //     a2 = (this.height/this.width) / this.imageAspect;
                // }

                // this.material.uniforms.resolution.value.x = this.width;
                // this.material.uniforms.resolution.value.y = this.height;
                // this.material.uniforms.resolution.value.z = a1;
                // this.material.uniforms.resolution.value.w = a2;

                // //optional - cover with quad
                // const dist = this.camera.position.z;
                // const height = 1;
                // this.camera.fov = (2*(180/Math.PI)*Math.atan(height/(2*dist))) ;

                // // //if(w/h>1)
                // if(this.width/this.height>1){
                //     this.mesh.scale.x = this.camera.aspect;
                //     //this.plane.scale.y = this.camera.aspect;
                // }else{
                //     this.mesh.scale.y = 1/this.camera.aspect;
                // }

                // this.camera.updateProjectionMatrix();

            }


            addMesh(){
                this.geometry = new THREE.PlaneBufferGeometry( 1, 1 );
                this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                this.material = new THREE.ShaderMaterial({
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

                // this.mesh = new THREE.Mesh( this.geometry, this.material );
                // this.scene.add( this.mesh );
            }

            render(){
                // this.mesh.rotation.x += 0.01; 
	            // this.mesh.rotation.y += 0.02;
                this.time+=0.05;
                this.renderer.render( this.scene, this.camera );
                this.material.uniforms.time.value = this.time;
                window.requestAnimationFrame(this.render.bind(this));
            }
        }
        let sketch = new Sketch();

        // let o = {a:0};
        // gsap.to(o, {
        //     a: 1,
        //     scrollTrigger:{
        //         trigger: '.wrap',
        //         markers: true,
        //         start: "top top",
        //         end: "bottom bottom",
        //         snap: 1/(3-1),
        //         onUpdate: (self) => {   
        //             console.log(sketch.model);
        //             sketch.model.rotation.y = 2. * 3.14 * self.progress; 
        //             sketch.model.position.z = -0.6 * Math.sin(3.14 * self.progress); 
        //         }
        //     }
            
        // });
        
        let tl = gsap.timeline();

        // tl.to(sketch.model.rotation, {
        //     duration: 1,
        //     y:7
        // })

        // ScrollTrigger.create({
        //     animation: tl,
        //     trigger: ".wrap",
        //     // markers: true,
        //     scrub: 5,
        //     start: "top top",
        //     end: "bottom bottom",
        //     snap: 1/(3-1),
        //         onUpdate: (self) => {   
        //             console.log(sketch.model);
        //             sketch.model.rotation.y = 2. * 3.14 * self.progress; 
        //             sketch.model.position.z = -0.6 * Math.sin(3.14 * self.progress); 
        //         }
        // });

    
        }, []);

    return (
        <>  
            <div className="wrap">
                {/* <div className="section"> 
                    <h2>SeungyunShin Creative Developer, till i die</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis atque at molestiae dolor perferendis, itaque excepturi nam amet sit. Quod molestiae nobis ducimus hic voluptatibus distinctio et voluptas. Dignissimos!</p>
                </div>
                <div className="section"> 
                    <h2>222SeungyunShin Creative Developer, till i die</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis atque at molestiae dolor perferendis, itaque excepturi nam amet sit. Quod molestiae nobis ducimus hic voluptatibus distinctio et voluptas. Dignissimos!</p>
                </div>
                <div className="section"> 
                    <h2>333SeungyunShin Creative Developer, till i die</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis atque at molestiae dolor perferendis, itaque excepturi nam amet sit. Quod molestiae nobis ducimus hic voluptatibus distinctio et voluptas. Dignissimos!</p>
                </div> */}
                <div id="vibrant-mesh-container"></div>
            </div>
        </>
    )
}

export default VibrantModel
