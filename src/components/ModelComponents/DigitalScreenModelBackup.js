import React, { useRef, useMemo, useCallback, useEffect, useState } from 'react'
import * as THREE from "three";
import { BufferAttribute } from 'three';

// reset Styles
import "../../App.scss"

//R3F
import { Canvas, useFrame, extend  } from '@react-three/fiber'

//gsap 
import gsap from 'gsap'

//dat.gui
import * as dat from "dat.gui"

import DigitalScreenFragment from '../../shaders/DigitalScreenShader/DigitalScreenFragment'
import DigitalScreenVertex from '../../shaders/DigitalScreenShader/DigitalScreenVertex'

import DigitalSquaresFragment from '../../shaders/DigitalScreenShader/DigitalSquaresFragment'
import DigitalSquaresVertex from '../../shaders/DigitalScreenShader/DigitalSquaresVertex'

import DigitalParticleFragment from '../../shaders/DigitalScreenShader/DigitalParticleFragment'
import DigitalParticleVertex from '../../shaders/DigitalScreenShader/DigitalParticleVertex'

// import mainVideo from '../../video/sheeps.mp4'
import mainVideo from '../../assets/videos/Tunnel.mp4'

// let OrbitControls = require("three-orbit-controls")(THREE);


function DigitalScreenModel() {

    useEffect(() => {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                this.renderer.setClearColor(0x000000, 1);

                this.container = document.getElementById("digitalScreen-mesh-container");
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.container.appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
                this.camera.position.set(0, 0, 2);
                // this.control = new OrbitControls(this.camera, this.renderer.domElement);
                // this.control.enableDamping = true;
                // this.control.dampingFactor = 0.3;
                // this.control.enableZoom = true;
                // this.control.zoomSpeed = 1.2;
                
                this.scene = new THREE.Scene();

                this.time=0;

                this.paused = false;
                this.count = 40;

                this.raycaster = new THREE.Raycaster(); 

                this.mouse = {x:0, y:0};

                this.setupResize();
                this.addSquares();
                this.addPoints();
                this.addMesh();
                this.addLines();

                this.mouseMove()

                this.resize();
                this.render();
            }

            mouseMove(){
                let that = this;
                this.testPlane = new THREE.Mesh(new THREE.PlaneGeometry(5,5), new THREE.MeshBasicMaterial())
                window.addEventListener( 'mousemove', function(event){
                    that.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                	that.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                    that.raycaster.setFromCamera( that.mouse, that.camera );

                    let intersects = that.raycaster.intersectObjects( [that.testPlane] );


                    if(intersects.length>0){
                        // console.log(intersects[0].point);
                        that.materialSqures.uniforms.mouse.value = intersects[0].point;
                    }
                    // for ( let i = 0; i < intersects.length; i ++ ) {

                    //     intersects[ i ].object.material.color.set( 0xff0000 );

                    // }

                }, false );
            }

            settings() { 
                let that = this;
                this.settings = {
                    progress: 0,
                };
                this.gui = new dat.GUI();
                this.gui.add(this.settings, "progress", 0, 1, 0.01);
            }

            setupResize(){
                window.addEventListener("resize", this.resize.bind(this))
            }

            resize(){
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.renderer.setSize(this.width, this.height);
                this.camera.aspect = this.width / this.height;

                this.imageAspect = 1080/1920;
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
                const height = 0.8;
                this.camera.fov = (2*(180/Math.PI)*Math.atan(height/(2*dist))) + 6;

                // //if(w/h>1)
                if(this.width/this.height>1){
                    this.mesh.scale.x = this.camera.aspect;
                    //this.plane.scale.y = this.camera.aspect;
                }else{
                    this.mesh.scale.y = 1/this.camera.aspect;
                }

                this.camera.updateProjectionMatrix();

            }

            addPoints(){

                this.materialPoints = new THREE.ShaderMaterial({
                    
                    uniforms:{
                        time : { type: "f", value: 0}, 
                        mouse : { type: "v3", value: new THREE.Vector3()}, 
                        resolution: { type: "v4", value: new THREE.Vector4()},
                    },
                    side: THREE.DoubleSide,
                    transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                    fragmentShader:DigitalParticleFragment,
                    vertexShader:DigitalParticleVertex,
                  });


                this.pointsGeometry = new THREE.BufferGeometry();
                let vertices = []; 

                for(let i = -this.count/2; i < this.count/2; i++){                  
                    for(let j = -this.count/2; j < this.count/2; j++){
                          vertices.push( i/10, j/10, 0);
                    }
                }
				this.pointsGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

                this.particles = new THREE.Points( this.pointsGeometry, this.materialPoints );

                this.scene.add(this.particles);
                this.particles.position.z = 0.008;
            }

            addLines(){
                let lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.19});

                const points = [];

                for (let i = -this.count/2; i< this.count/2; i++){
                    points.push( new THREE.Vector3( - 5, i/10 +0.005, 0 ) );
                    points.push( new THREE.Vector3( 5, i/10 +0.005, 0 ) );
                }

                for (let i = -this.count/2; i< this.count/2; i++){
                    points.push( new THREE.Vector3( i/10 +0.005, -5, 0 ) );
                    points.push( new THREE.Vector3( i/10  +0.005, 5, 0 ) );
                }

                let lineGeometry = new THREE.BufferGeometry().setFromPoints( points );

                this.lines = new THREE.LineSegments( lineGeometry, lineMaterial );

                this.scene.add(this.lines)

                this.lines.position.z = 0.09;
            }

            addSquares(){
                
                this.materialSqures = new THREE.ShaderMaterial({
                    
                    uniforms:{
                        time : { type: "f", value: 0}, 
                        mouse : { type: "v3", value: new THREE.Vector3()}, 
                        // texture1: { type: "t", value: texture }, 
                        resolution: { type: "v4", value: new THREE.Vector4()},
                        uvRate1: {
                            value: new THREE.Vector2(1, 1)
                        }
                    },
                    side: THREE.DoubleSide,
                    transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                    fragmentShader:DigitalSquaresFragment,
                    vertexShader:DigitalSquaresVertex,
                  });

                  this.geometrySquares = new THREE.PlaneBufferGeometry(0.1, 0.1);
                  
                //   this.squares = new THREE.Mesh(this.geometrySquares, this.materialSqures)
                  this.squares = new THREE.InstancedMesh(this.geometrySquares, this.materialSqures, this.count**2)  

                  let dummy = new THREE.Object3D();

                  let counter = 0;
                  for(let i = -this.count/2; i < this.count/2; i++){                  
                      for(let j = -this.count/2; j < this.count/2; j++){
                            dummy.position.set( i/10 + 0.05, j/10 + 0.05, 0);

                            dummy.updateMatrix();

                            this.squares.setMatrixAt( counter++, dummy.matrix );
                      }
                  }

                  this.scene.add(this.squares);
                  this.squares.position.z = 0.01;
            }

            addMesh(){

                let video = document.getElementById('video');
                console.log(video);
                // video.autoplay = true;
                // video.src = mainVideo;

                let texture = new THREE.VideoTexture( video );
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.format = THREE.RGBFormat;
                
                video.play();

                // this.geometry = new THREE.PlaneBufferGeometry( 1, 1 );
                // this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                let that = this;
                this.material = new THREE.ShaderMaterial({
                    
                    uniforms:{
                        time : { type: "f", value: 0}, 
                        texture1: { type: "t", value: texture }, 
                        resolution: { type: "v4", value: new THREE.Vector4()},
                        uvRate1: {
                            value: new THREE.Vector2(1, 1)
                        }
                    },
                    side: THREE.DoubleSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                    fragmentShader:DigitalScreenFragment,
                    vertexShader:DigitalScreenVertex,
                  })
                
                this.geometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );

                this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.mesh );

                this.test = new THREE.Mesh(new THREE.PlaneBufferGeometry(0.3,0.3), new THREE.MeshBasicMaterial({color: 0x00ff00}))
                this.test.position.z = -0.3
                this.scene.add(this.test)
            }

            render(){
                // this.mesh.rotation.x += 0.01; 
	            // this.mesh.rotation.y += 0.02;
                if(this.paused) return;
                this.time += 0.05;

                this.scene.rotation.x = -this.mouse.y/5
                this.scene.rotation.y = this.mouse.x/5

                this.mesh.position.x = this.mouse.x/13
                this.mesh.position.y = this.mouse.y/13


                this.material.uniforms.time.value = this.time;
                this.materialSqures.uniforms.time.value = this.time;
                this.materialPoints.uniforms.time.value = this.time;
                window.requestAnimationFrame(this.render.bind(this));
                this.renderer.render( this.scene, this.camera );
            }
        }
        new Sketch();
    
        }, []);

    return (
        <>  
            {/* <video id="video" src="../video/sheeps.mp4" muted playsInline/> */}
            <video id="video" muted playsInline loop="true">
                <source src={mainVideo} type="video/mp4" />
            </video>
            <div id="digitalScreen-mesh-container"></div>
            
            
        </>
    )
}

export default DigitalScreenModel
