import React, { useRef, useMemo, useCallback, Component, useEffect } from 'react'
import * as THREE from "three";
// reset Styles
import "../../App.scss"

import fragmentJS from '../../shaders/ParticleTransitShader/fragment.js'
import vertexJS from '../../shaders/ParticleTransitShader/vertex.js'

//gsap 
import gsap from 'gsap'

//dat.gui
import * as dat from "dat.gui"

// shader texture
import mask from '../../imgs/particle.jpeg'
import t1 from '../../imgs/wing.png'
import t2 from '../../imgs/skallet.png'
import t3 from '../../imgs/universe.png'
import t4 from '../../imgs/pill.png'

let OrbitControls = require("three-orbit-controls")(THREE);

//timeline
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();

const MeshModel = () => {
 
    useEffect(() => {

      class Sketch{
        constructor(){

          this.renderer = new THREE.WebGLRenderer( { antialias: true } );
          this.renderer.setSize( window.innerWidth, window.innerHeight );
          // this.renderer.setClearColor( '#232323' );
          document.getElementById('mesh-container').appendChild( this.renderer.domElement );

          this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 3000 );
          this.camera.position.z = 1000;
          this.scene = new THREE.Scene();

          this.raycaster = new THREE.Raycaster();
          this.mouse = new THREE.Vector2();
          this.point = new THREE.Vector2();

          this.textures = [
            new THREE.TextureLoader().load(t1),
            new THREE.TextureLoader().load(t2),
            new THREE.TextureLoader().load(t3),
            new THREE.TextureLoader().load(t4),
        ]
        this.mask = new THREE.TextureLoader().load(mask);
        this.time = 0;
        // this.move = 0;
        // this.minimove = 0;
        // this.smove = 0;
        // this.transitionToggle = true;
        this.implementCount = 0
        this.initial = true;
        
        this.textureIndexslice1 = 0
        this.textureIndexslice2 = 1 
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);
          
        this.addMesh();
        this.mouseEffects();
        this.render();
        // this.settings();
        // this.indexPlus();
        }

        settings() { 
          let that = this;
          this.settings = {
            howmuchrgbshifticanhaz: 1,
          };
          this.gui = new dat.GUI();
          this.gui.add(this.settings, "howmuchrgbshifticanhaz", 0, 1, 0.01);
        }

        mouseEffects(){

          this.test = new THREE.Mesh(
            new THREE.PlaneBufferGeometry(2000,2000),
            new THREE.MeshBasicMaterial()
         )

         window.addEventListener('mousedown', (e)=>{
          gsap.to(this.material.uniforms.mousePressed,{
              duration:1,
              value:1,
              ease: "elastic.out(1, 0.3)"
            })
          })

          window.addEventListener('mouseup', (e)=>{
              gsap.to(this.material.uniforms.mousePressed,{
                  duration:1,
                  value:0,
                  ease: "elastic.out(1, 0.3)"
              })
          })

          let debounceTimer
          window.addEventListener('mousewheel', (e)=>{

            if(debounceTimer) clearTimeout(debounceTimer)
            debounceTimer = setTimeout(() => {
              if (this.implementCount%2 == 0){
                tl
                .add('start')
                .add('end')
                .to(this.material.uniforms.transition, {
                  duration:1,
                  value: 1,
                  ease: "ease"
                }, 'start')
                .to(this.material.uniforms.move, {
                  duration:1,
                  value: 1,
                  ease: "ease"
                }, 'start')
                .to(this.material.uniforms.transition, {
                  duration:1,
                  value: 0,
                  ease: "ease"
                })
                .to(this, {
                  duration:0.1,
                  textureIndexslice1: "+=2",
                });
              }else{
                tl
                .add('start')
                .add('end')
                .to(this.material.uniforms.transition, {
                  duration:1,
                  value: 1,
                  ease: "ease"
                }, 'start')
                .to(this.material.uniforms.move, {
                  duration:1,
                  value: 0,
                  ease: "power4"
                }, 'start')
                .to(this.material.uniforms.transition, {
                  duration:1,
                  value: 0,
                  ease: "elastic.out(1, 0.3)"
                })
                .to(this, {
                  duration:0.1,
                  textureIndexslice2: "+=2",
                });
              }
              this.implementCount ++;
              console.log('imple : ', this.implementCount);

              tl2
              .to('.main-title-1', {
                duration:1,
                opacity: 0,
                ease: "ease"
              })
              .to('.main-title-1', {
                duration:1,
                opacity: 1,
                ease: "ease"
              })

            }, 230)

            // if(this.initial){
            //   this.initial = false
            // }else{
            //   this.textureIndex++;
            // }
            
            // this.textureIndex++;
            // console.log(e.wheelDeltaY);

            // if(this.transitionToggle){
            //   tl.to(this.material.uniforms.transition, {
            //     duration:1,
            //     value: 1,
            //     ease: "elastic.out(1, 0.3)"
            //   })
            //   .to(this.material.uniforms.transition, {
            //     duration:1,
            //     value: 0,
            //     ease: "elastic.out(1, 0.3)"
            //   });
            // }
            
            // this.move += e.wheelDeltaY/2500;
            // this.move += e.wheelDeltaY/900;
            // this.minimove += e.wheelDeltaY/12000;
            // this.smove = Math.sin(this.move);
            // this.smove = Math.sin(this.move );
            // console.log('move : ',this.move);
            // console.log('smove :' , this.smove);
            
          })

          window.addEventListener( 'mousemove', (event) =>{
            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            console.log('mouse : ' ,  this.mouse.x, this.mouse.y)

            this.raycaster.setFromCamera( this.mouse, this.camera );

            // calculate objects intersecting the picking ray
            const intersects = this.raycaster.intersectObjects( [this.test] );
            
            if(intersects[0]){
              this.point.x = intersects[0].point.x
              this.point.y = intersects[0].point.y
            }

            this.mesh.rotation.x = -0.1 + this.mouse.x * 0.1;
            this.mesh.rotation.y = 0.5 + this.mouse.y * 0.1;
            this.mesh.rotation.z =  0.3 + this.mouse.y * 0.1;


          }, false );

        }

        addMesh(){

          this.material = new THREE.ShaderMaterial({
            fragmentShader:fragmentJS,
            vertexShader:vertexJS,
            uniforms:{
              progress: {type:"f", value: 0},
              t1: {type:"t", value: this.textures[0]},
              t2: {type:"t", value: this.textures[1]},
              t3: {type:"t", value: this.textures[2]},
              t4: {type:"t", value: this.textures[3]},
              mask: {type:"t", value: this.mask},
              mousePressed: {type:"f", value: 0},
              mouse: {type: "v2", value: null},
              transition: {type: "f", value: null},
              move: {type:"f", value: 0},
              smove: {type:"f", value: 0},
              time: {type:"f", value: 0},
            },
            side: THREE.DoubleSide,
            transparent: true,
            depthTest: false,
            depthWrite: false,
          })

          let number = 512*512;
          this.geometry = new THREE.BufferGeometry(); 
          this.positions = new THREE.BufferAttribute(new Float32Array(number*3), 3);
          this.coordinates = new THREE.BufferAttribute(new Float32Array(number*3), 3);
          this.speeds = new THREE.BufferAttribute(new Float32Array(number), 1);
          this.offset = new THREE.BufferAttribute(new Float32Array(number), 1);
          this.direction = new THREE.BufferAttribute(new Float32Array(number), 1);
          this.press = new THREE.BufferAttribute(new Float32Array(number), 1);

          function rand(a,b){
            return a + (b-a)*Math.random();
          }

          let index = 0;
          for (let i = 0; i < 512; i++){
            // let posX = i - 256;
            let posX = i - 396;
            for(let j = 0; j < 512; j++){
                this.positions.setXYZ(index, posX*2,(j-203)*2,0)
                this.coordinates.setXYZ(index, i, j, 0)
                this.offset.setX(index, rand(-1000, 1000))
                this.speeds.setX(index, rand(0.4, 1))
                this.direction.setX(index, Math.random() > 0.5 ? 1:-1)
                this.press.setX(index, rand(0.4, 1))
                index++;
            }
          } 

          this.geometry.setAttribute("position", this.positions)
          this.geometry.setAttribute("aCoordinates", this.coordinates)
          this.geometry.setAttribute("aOffset", this.offset)
          this.geometry.setAttribute("aSpeed", this.speeds)
          this.geometry.setAttribute("aPress", this.press)
          this.geometry.setAttribute("aDirection", this.direction)

          this.mesh = new THREE.Points( this.geometry, this.material );
          this.mesh.rotation.x = -0.1;
          this.mesh.rotation.y = 0.5;
          this.mesh.rotation.z = 0.3;
          this.scene.add( this.mesh );
        }

        render(){
          this.time++;
          // let next = Math.floor(this.move + 40) % 4;
          // let prev = (Math.floor(this.move) + 1 + 40) % 4;
          // this.smove = Math.sin(this.move );

          // console.log('textureIndexslice1 :', this.textureIndexslice1, this.textureIndexslice2);
          // console.log('prev :', prev);
          // this.smove = this.move % 1;
          // this.mesh.rotation.x += 0.01;
          // this.mesh.rotation.y += 0.02;  
          
          this.material.uniforms.t1.value = this.textures[(this.textureIndexslice1 % 4)];
          this.material.uniforms.t2.value = this.textures[(this.textureIndexslice2 % 4)];

          // this.material.uniforms.t1.value = this.textures[next];
          // this.material.uniforms.t2.value = this.textures[prev]; 

          
          // this.material.uniforms.transition.value = this.settings.progress;
          this.material.uniforms.time.value = this.time;
          // this.material.uniforms.move.value = this.move;
          this.material.uniforms.smove.value = this.smove;
          this.material.uniforms.mouse.value = this.point;
          this.renderer.render( this.scene, this.camera );
          window.requestAnimationFrame(this.render.bind(this));
        }
      }
      new Sketch();

    }, []);

    return (
        <>
          <div id="mesh-container">
          </div>
        </>
    );
}


function ParticleMainModel() {

    useEffect(() => {
      // window.addEventListener('mousewheel', (e)=>{
      //           tl
      //           .to('main-title-1', {
      //             duration:1,
      //             opacity: 0,
      //             ease: "ease"
      //           })
      //           .to('main-title-1', {
      //             duration:1,
      //             opcaity: 1,
      //             ease: "ease"
      //           })
      // })
    })

    return (
        <>
            <MeshModel/>
            <h1 className='main-title-1'>Main Title SSY R is Well</h1>
        </>
    )
}

export default ParticleMainModel
