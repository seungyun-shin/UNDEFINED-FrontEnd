import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";
import { BufferAttribute } from 'three';
// reset Styles
import "../../App.scss"

import PapayaFragment from '../../shaders/PapayaShader/PapayaFragment'
import PapayaVertex from '../../shaders/PapayaShader/PapayaVertex'

import PapayaFragmentParticle from '../../shaders/PapayaShader/PapayaFragmentParticle'
import PapayaVertexParticle from '../../shaders/PapayaShader/PapayaVertexParticle'

let OrbitControls = require("three-orbit-controls")(THREE);

function PapayaModel() {

    useEffect(() => {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                this.renderer.setClearColor(0x000000, 1);
                
                this.container = document.getElementById('mesh-container');
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                
                this.container.appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera(
                     70, 
                     window.innerWidth / window.innerHeight, 
                     0.01, 
                     1000 
                );

                this.camera.position.set(0, 0, 5);
                this.control = new OrbitControls(this.camera, this.renderer.domElement);
                this.control.enableDamping = true;
                this.control.dampingFactor = 0.3;
                this.control.enableZoom = true;
                this.control.zoomSpeed = 1.2;
                // this.control.rotateSpeed = 0.25;

                this.time = 0;
                this.paused = false;

                this.scene = new THREE.Scene();

                this.setupResize();
                this.addMesh(); 
                this.addParticles();
                this.resize();
                this.render();
            }

            // settings() { 
            //     let that = this;
            //     this.settings = {
            //         time: 0,
            //     };
            //     this.gui = new dat.GUI();
            //     this.gui.add(this.settings, "time", 0, 100, 0.01);
            // }

            setupResize(){
                window.addEventListener("resize", this.resize.bind(this));
            }
            
            resize(){
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.renderer.setSize(this.width, this.height);
                this.camera.aspect = this.width / this.height;
                this.camera.updateProjectionMatrix();
            }

            addMesh(){
                let that = this;
                // this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                this.material = new THREE.ShaderMaterial({
                    extensions: {
                        derivatives: "#extension GL_OES_standard_derivatives : enable"
                    },
                    fragmentShader:PapayaFragment,
                    vertexShader:PapayaVertex,
                    uniforms:{
                        time: { type: "f", value: 0},
                        resolution: { type: "v4", value: new THREE.Vector4()},
                        uvRate1: {
                            value: new THREE.Vector2(1, 1)
                        }
                    },
                    side: THREE.DoubleSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                    // wireframe:true,
                  })
                
                this.geometry = new THREE.SphereBufferGeometry( 1, 462, 462);

                this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.mesh );

            }
            addParticles(){

                this.ParticleMaterial = new THREE.ShaderMaterial({
                    extensions: {
                        derivatives: "#extension GL_OES_standard_derivatives : enable"
                    },
                    fragmentShader:PapayaFragmentParticle,
                    vertexShader:PapayaVertexParticle,
                    uniforms:{
                        time: { type: "f", value: 0},
                        resolution: { type: "v4", value: new THREE.Vector4()},
                        uvRate1: {
                            value: new THREE.Vector2(1, 1)
                        }
                    },
                    side: THREE.DoubleSide,
                    transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                    // wireframe:true,
                  })

                  
                let N = 6000;
                let positions = new Float32Array(N*3);
                this.particlegeometry = new THREE.BufferGeometry();

                let inc = Math.PI*(3 - Math.sqrt(5));
                let off = 2/N;
                let rad = 1.7;

                for(let i = 0; i < N; i++){
                    let y = i * off - 1 + (off / 2);
                    let r = Math.sqrt(1 - y*y);
                    let phi = i * inc;

                    positions[3*i] = rad*Math.cos(phi)*r;
                    positions[3*i+1] = rad*y;
                    positions[3*i+2] = rad*Math.sin(phi) * r;
                }
                this.particlegeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

                this.points = new THREE.Points( this.particlegeometry, this.ParticleMaterial );
                this.scene.add( this.points );
            }

            stop(){
                this.paused = true;
            }

            play(){
                this.paused = false;
                this.render();
            }

            render(){
                // this.mesh.rotation.x += 0.01; 
	            // this.mesh.rotation.y += 0.02;
                if(this.paused) return;
                this.time += 0.05;
                this.material.uniforms.time.value = this.time;
                this.ParticleMaterial.uniforms.time.value = this.time;
                this.points.rotation.y = this.time/10;
                window.requestAnimationFrame(this.render.bind(this));
                this.renderer.render( this.scene, this.camera );
            }
        }
        new Sketch();
    }, []);

    return (
        <>
             <div id="mesh-container"></div>
        </>
    )
}

export default PapayaModel
