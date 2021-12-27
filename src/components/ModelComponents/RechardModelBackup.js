import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";
import { BufferAttribute } from 'three';

// reset Styles
import "../../App.scss"

//R3F
import { Canvas, useFrame, extend  } from '@react-three/fiber'

import RechardFragment from '../../shaders/RechadShader/RechardFragment'
import RechardVertex from '../../shaders/RechadShader/RechardVertex'

let OrbitControls = require("three-orbit-controls")(THREE);

function RechardModel() {

    useEffect(() => {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                this.renderer.setClearColor(0x000000, 1);

                this.container = document.getElementById("back-mesh-container");
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.container.appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
                this.camera.position.set(0, 0, 1);
                
                // this.control = new OrbitControls(this.camera, this.renderer.domElement);
                // this.control.enableDamping = true;
                // this.control.dampingFactor = 0.3;
                // this.control.enableZoom = true;
                // this.control.zoomSpeed = 1.2;

                this.count = 40;
                this.particleCnt = 5000;

                this.scene = new THREE.Scene();

                this.setupResize();
                this.addParticle();
                this.addMesh();
                // this.resize();
                this.time=0;
                this.render();
                // this.mouseEvents();
            }

            addParticle(){
                // let lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.19});

                // const points = [];

                // for (let i = -this.count/2; i< this.count/2; i++){
                //     points.push( new THREE.Vector3( - 5, i/10 +0.005, 0 ) );
                //     points.push( new THREE.Vector3( 5, i/10 +0.005, 0 ) );
                // }

                // for (let i = -this.count/2; i< this.count/2; i++){
                //     points.push( new THREE.Vector3( i/10 +0.005, -5, 0 ) );
                //     points.push( new THREE.Vector3( i/10  +0.005, 5, 0 ) );
                // }

                // let lineGeometry = new THREE.BufferGeometry().setFromPoints( points );

                // this.lines = new THREE.LineSegments( lineGeometry, lineMaterial );

                // this.scene.add(this.lines)

                // this.lines.position.z = 0.09;

                // this.particlesGeometry = new THREE.BufferGeometry();
                // this.particleMaterial = new THREE.PointsMaterial({size: 0.005});
                
                // let vertices = []; 
                // this.posArray = new Float32Array(this.particles * 3);

                // for(let i=0; i < this.particleCnt*3; i++){
                //     vertices.push( Math.random() - 0.5, Math.random() - 0.5, Math.random());
                //     // this.posArray[i] = Math.random() - 0.5
                // }
                // this.particlesGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

                // // this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(this.posArray, 3));
                // this.particlesMesh = new THREE.Points( this.particlesGeometry, this.particleMaterial);
                // this.scene.add(this.particlesMesh);
                // this.particlesMesh.position.z = 1;
            }

            mouseEvents(){

                this.mouse = new THREE.Vector2();
                let that = this;
                function onMouseMove( event ) {

                    // calculate mouse position in normalized device coordinates
                    // (-1 to +1) for both components
                
                    that.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                    that.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
                    
                    that.material.uniforms.mouse.value = that.mouse;
                }

                window.addEventListener( 'mousemove', onMouseMove, false );
            }

            setupResize(){
                window.addEventListener("resize", this.resize.bind(this))
            }

            resize(){
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.renderer.setSize(this.width, this.height);
                this.camera.aspect = this.width / this.height;

                this.imageAspect = 1;
                // this.imageAspect = 1080/1920;
                let a1; let a2;
                if(this.height/this.width>this.imageAspect){
                    a1 = (this.width/this.height) * this.imageAspect;
                    a2 = 1;
                }else{
                    a1 = 1;
                    a2 = (this.height/this.width) / this.imageAspect;
                }

                this.material.uniforms.resolution.value.x = this.width;
                this.material.uniforms.resolution.value.y = this.height;
                this.material.uniforms.resolution.value.z = a1;
                this.material.uniforms.resolution.value.w = a2;

                //optional - cover with quad
                const dist = this.camera.position.z;
                const height = 1;
                this.camera.fov = (2*(180/Math.PI)*Math.atan(height/(2*dist))) ;

                // //if(w/h>1)
                if(this.width/this.height>1){
                    this.mesh.scale.x = this.camera.aspect;
                    //this.plane.scale.y = this.camera.aspect;
                }else{
                    this.mesh.scale.y = 1/this.camera.aspect;
                }

                this.camera.updateProjectionMatrix();

            }
            
            addMesh(){
                this.geometry = new THREE.PlaneBufferGeometry( 1, 1 );
                this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                this.material = new THREE.ShaderMaterial({
                    fragmentShader:RechardFragment,
                    vertexShader:RechardVertex,
                    uniforms:{
                        time : { type: "f", value: 0}, 
                        mouse : { type: "v2", value: new THREE.Vector2(0,0)}, 
                        // mouse : { type: "v3", value: new THREE.Vector3()}, 
                        resolution: { type: "v4", value: new THREE.Vector4()},
                    },
                    side: THREE.DoubleSide,
                    transparent: true,
                    depthTest: true,
                    depthWrite: true,
                    // depthTest: false,
                    // depthWrite: false,
                  })

                this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.mesh );
            }

            render(){
                // this.mesh.rotation.x += 0.01; 
	            // this.mesh.rotation.y += 0.02;
                this.material.uniforms.time.value += 0.05;
                // this.renderer.render( this.scene, this.camera );
                window.requestAnimationFrame(this.render.bind(this));
                this.renderer.render( this.scene, this.camera );
            }
        }
        new Sketch();

        // return() => {
        //     document.removeEventListener('mousemove', onMouseMove, false);
        //     document.removeEventListener("resize", Sketch.resize.bind(this));
        // }
    
        }, []);

    return (
        <>
            <div id="back-mesh-container"></div>
        </>
    )
}

export default RechardModel
