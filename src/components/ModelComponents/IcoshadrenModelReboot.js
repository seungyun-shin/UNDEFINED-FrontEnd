import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";

import gsap from 'gsap'

//Pixel examples
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import PostProcessing from '../../jsUtil/postprocessing';

//shadren
import IcoshadrenFragment from '../../shaders/IcoshadrenShader/IcoshadrenFragment'
import IcoshadrenFragment1 from '../../shaders/IcoshadrenShader/IcoshadrenFragment1'
import IcoshadrenVertex from '../../shaders/IcoshadrenShader/IcoshadrenVertex'
//pixel
import IcoshadrenPixelFragment from '../../shaders/IcoshadrenShader/IcoshadrenPixelFragment'
import IcoshadrenPixelVertex from '../../shaders/IcoshadrenShader/IcoshadrenPixelVertex'


import { HeaderStyleCom } from "../../styles/jsStyles/HeaderStyle";
import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

// import landscape from '../../imgs/back10.jpg'
import landscape from '../../imgs/skytexture.png'
// import landscape from '../../imgs/universe.png'
import { TetrahedronGeometry } from 'three';

//dat.gui
// import * as dat from "dat.gui"

// let OrbitControls = require("three-orbit-controls")(THREE);

function IcoshadrenModel() {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                this.renderer.setClearColor(0x111111, 1);
                this.renderer.physicallyCorrectLights = true;
                this.renderer.outputEncoding = THREE.sRGBEncoding;

                this.container = document.getElementById("mesh-container");
                // this.width = window.innerHeight;
                // this.height = window.innerHeight;
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.container.appendChild( this.renderer.domElement );
                // document.getElementById("mesh-container").appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
                // this.camera.position.set(0, 0, 1.39);
                this.camera.position.set(0, 0, 1.39);
                // this.camera.position.set(0, 0, 0.3);
                
                // this.control = new OrbitControls(this.camera, this.renderer.domElement);
                // this.control.enableDamping = true;
                // this.control.dampingFactor = 0.3;
                // this.control.enableZoom = true;
                // this.control.zoomSpeed = 1.2;

                this.scene = new THREE.Scene();
                
                this.mouseCmove = {x:0, y:0};
                // this.raycaster = new THREE.Raycaster(); 
                
                this.time = 0;
                this.mouse = 0;
                this.noiseblur = 1;
                this.setupResize();
                this.addMesh();
                this.mouseEvents();
                this.addPixel();
                
                // this.settings();
                this.resize();
                this.render();
                this.meshanimationOut();
            }

            meshanimationIn(){
                gsap.to( this.camera.position, {
                    duration: 3,
                    z: 0.3,
                } );

                gsap.to( this.customPass.uniforms[ "noiseblur" ], {
                    duration: 3,
                    value: 3.0,
                } );
            }

            meshanimationOut(){
                gsap.to( this.camera.position, {
                    duration: 3,
                    z: 1.39,
                } );

                gsap.to( this.customPass.uniforms[ "noiseblur" ], {
                    duration: 3,
                    value: 1.0,
                } );
            }

            mouseEvents(){
                this.lastX = 0;
                this.lastY = 0;
                this.speed = 0;
                
                // this.mouse = new THREE.Vector2();

                document.addEventListener('mousemove', (e) => {
                    this.speed = Math.sqrt((e.pageX - this.lastX)**2 +  (e.pageX - this.lastX)**2) * 0.003;
                    // this.speed = (e.pageX - this.lastX) * 0.1;
                    // console.log(this.speed);
                    this.lastX = e.pageX;
                    this.lastY = e.pageY;
                    // console.log(( event.clientX / window.innerWidth ) * 2 - 1);
                    this.mouseCmove.x = ( e.clientX / window.innerWidth ) * 2 - 1;
                    this.mouseCmove.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
                    
                    // this.raycaster.setFromCamera( this.mouse, this.camera );
                    // let intersects = this.raycaster.intersectObjects( [this.ico] );
                    
                    // if(intersects[0]){
                    //     this.point.x = intersects[0].point.x
                    //     this.point.y = intersects[0].point.y
                    // }

                    this.icoLines.position.x = this.mouseCmove.x * 0.039;
                    this.ico.position.x = this.mouseCmove.x * 0.039;
                    this.icoLines.position.y =  this.mouseCmove.y * 0.039;
                    this.ico.position.y =  this.mouseCmove.y * 0.039;
                    // this.icoLines.position.z = this.mouseCmove.y * 0.1;
                    // this.ico.position.z = this.mouseCmove.y * 0.1;
                    // this.ico.rotation.y = this.mouse.y * 0.1;
                    // this.ico.rotation.z = this.mouse.y * 0.1;
                })

                document.addEventListener('mouseout', (e) => {
                    this.speed = 0;
                    // this.speed = (e.pageX - this.lastX) * 0.1;
                    console.log('mpouse out');
                    this.lastX = 0;
                    this.lastY = 0;
                })
            }

            // settings() { 
            //     let that = this;
            //     this.settings = {
            //         howmuchrgbshifticanhaz: 1,
            //     };
            //     this.gui = new dat.GUI();
            //     this.gui.add(this.settings, "howmuchrgbshifticanhaz", 0, 1, 0.01);
            // }

            setupResize(){
                window.addEventListener("resize", this.resize.bind(this))
            }

            resize(){
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                // this.width = window.innerHeight;
                // this.height = window.innerHeight;
                this.renderer.setSize(this.width, this.height);
                this.composer.setSize(this.width, this.height);
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

                //optional - cover with quad
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
                this.camera.updateProjectionMatrix();

            }

            addPixel(){
                this.composer = new EffectComposer( this.renderer );
                this.composer.addPass( new RenderPass( this.scene, this.camera ) );

                this.customPass = new ShaderPass( PostProcessing );
                this.customPass.uniforms[ "resolution" ].value = new THREE.Vector2( window.innerWidth, window.innerHeight );
                this.customPass.uniforms[ "resolution" ].value.multiplyScalar( window.devicePixelRatio );
                this.customPass.uniforms[ "noiseblur" ].value = this.noiseblur;
                this.composer.addPass( this.customPass );
            }

            addMesh(){

                let that = this;
                let t = new THREE.TextureLoader().load(landscape)
                t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;

                // this.geometry = new THREE.SphereGeometry( 3, 8, 8 );
                // this.geometry1 = new THREE.SphereGeometry( 3.1, 8, 8 );
                this.geometry = new THREE.IcosahedronGeometry( 0.69, 2 );
                this.geometry1 = new THREE.IcosahedronBufferGeometry( 0.70, 2 );
                let length = this.geometry1.attributes.position.array.length;

                let bary= [];

                for (let i=0; i< length/3; i++){
                    bary.push(0,0,1, 0,1,0, 1,0,0)
                }

                let aBary = new Float32Array(bary);
                this.geometry1.setAttribute('aBary', new THREE.BufferAttribute(aBary, 3),);
                
                this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                this.material = new THREE.ShaderMaterial({
                    fragmentShader:IcoshadrenFragment,
                    vertexShader:IcoshadrenVertex,
                    uniforms:{
                        time : { type: "f", value: 0}, 
                        landscape : { type: "t", value: t }, 
                        resolution: { type: "v4", value: new THREE.Vector4()},
                        mouse : { value:0 }, 
                        // move : { type: "v2", value: new THREE.Vector2(0,0)}, 
                        // mouse : { type: "v2", value: new THREE.Vector2(0,0)}, 
                    },
                    side: THREE.DoubleSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                })

                this.material1 = new THREE.ShaderMaterial({
                    fragmentShader:IcoshadrenFragment1,
                    vertexShader:IcoshadrenVertex,
                    uniforms:{
                        time : { type: "f", value: 0}, 
                        landscape : { type: "t", value: t }, 
                        resolution: { type: "v4", value: new THREE.Vector4()},
                        mouse : { value:0 }, 
                        // move : { type: "v2", value: new THREE.Vector2(0,0)}, 
                        // mouse : { type: "v2", value: new THREE.Vector2(0,0)}, 
                    },
                    side: THREE.DoubleSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                })

                this.ico = new THREE.Mesh( this.geometry1, this.material );
                this.icoLines = new THREE.Mesh( this.geometry1, this.material1 );
                this.scene.add( this.ico );
                // this.scene.add( this.icoLines );
            }

            render(){
                // this.mesh.rotation.x += 0.01; 
                // this.mesh.rotation.y += 0.02;
                this.time += 0.001 ;
                this.mouse -= (this.mouse - this.speed) * 0.01;
                // this.mouse -= (this.mouse - this.speed) * 0.01
                // this.mouse *= 0.99;;
                this.speed *= 0.99;
                // this.mouse *= 0.999;
                this.scene.rotation.x = - this.time * 6;
                this.scene.rotation.y =  this.time * 6;
                this.scene.position.z = 0.2 * Math.sin(this.time*5)
                this.customPass.uniforms.time.value = this.time;
                // this.customPass.uniforms.howmuchrgbshifticanhaz.value = this.mouse/3;
                this.customPass.uniforms.howmuchrgbshifticanhaz.value = this.mouse/5;
                this.material.uniforms.time.value = this.time;
                this.material.uniforms.mouse.value = this.mouse;
                this.material1.uniforms.time.value = this.time;
                this.material1.uniforms.mouse.value = this.mouse;
                // this.customPass.uniforms[ "noiseblur" ].value = this.noiseblur;
                // this.renderer.render( this.scene, this.camera );
                this.composer.render();
                window.requestAnimationFrame(this.render.bind(this));
            }
        }
        const sketch = new Sketch();
        sketch.meshanimationIn();

        useEffect(() => {

        
        }, []);


    return (
        <>
            <div id="mesh-container"></div>
            {/* <HeaderStyleCom>
                <div className="header-container">
                    <div className="left-container">
                        <div className="logo">
                            <LinkStyleCom to="/MainScreen">SEUNGYUN SHIN.</LinkStyleCom>
                        </div>
                        <div className="small-info">
                            <span>Republic of Korea</span>
                            <span>94'</span>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="menu-container">
                            <LinkStyleCom to="/banner"><span>AI</span></LinkStyleCom>
                            <LinkStyleCom to="/BoardAppScreen"><span>Work</span></LinkStyleCom>
                            <span>Sports Industry</span>
                            <span>Memory</span>
                            <span>About</span>
                        </div>
                    </div>
                </div>
            </HeaderStyleCom> */}
        </>
    )
}

export default IcoshadrenModel
