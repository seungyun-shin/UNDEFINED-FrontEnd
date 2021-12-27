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
import maskimg from '../../assets/images/models/particle.jpeg'
import t1 from '../../assets/images/models/back10.jpg'
// import t1 from '../../assets/images/models/particleMain.jpg'
import t2 from '../../assets/images/models/skallet.png'
import t3 from '../../assets/images/models/universe.png'
import t4 from '../../assets/images/models/pill.png'

// let OrbitControls = require("three-orbit-controls")(THREE);

//timeline
const tl = gsap.timeline();
const tl2 = gsap.timeline();
const tl3 = gsap.timeline();

const MeshModel = () => {

    const particleContainer = useRef();
    let frag = true;
 
    useEffect(() => {

      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer( { antialias: true } );
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize( window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);
      
      // const container = document.getElementById("back-mesh-container");
      var width = particleContainer.current.offsetWidth;
      var height = particleContainer.current.offsetHeight;
      // container.appendChild( renderer.domElement );
      particleContainer.current.appendChild( renderer.domElement );

      let camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 3000 );
      camera.position.z = 1000;

      let raycaster = new THREE.Raycaster();
      let mouse = new THREE.Vector2();
      let point = new THREE.Vector2();

      let textures = [
        new THREE.TextureLoader().load(t1),
        new THREE.TextureLoader().load(t2),
        new THREE.TextureLoader().load(t3),
        new THREE.TextureLoader().load(t4),
      ]
      
      const mask = new THREE.TextureLoader().load(maskimg);
      let time = 0;
      let smove = 0;
      
      let implementCount = 0
      let initial = true;
      
      let textureIndexslice1 = 0
      let textureIndexslice2 = 1 
      
      let imageAspect = 1;

      const material = new THREE.ShaderMaterial({
        fragmentShader:fragmentJS,
        vertexShader:vertexJS,
        uniforms:{
          progress: {type:"f", value: 0},
          t1: {type:"t", value: textures[0]},
          t2: {type:"t", value: textures[1]},
          t3: {type:"t", value: textures[2]},
          t4: {type:"t", value: textures[3]},
          mask: {type:"t", value: mask},
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
      const geometry = new THREE.BufferGeometry(); 
      const positions = new THREE.BufferAttribute(new Float32Array(number*3), 3);
      const coordinates = new THREE.BufferAttribute(new Float32Array(number*3), 3);
      const speeds = new THREE.BufferAttribute(new Float32Array(number), 1);
      const offset = new THREE.BufferAttribute(new Float32Array(number), 1);
      const direction = new THREE.BufferAttribute(new Float32Array(number), 1);
      const press = new THREE.BufferAttribute(new Float32Array(number), 1);

      function rand(a,b){
        return a + (b-a)*Math.random();
      }

      let index = 0;
      for (let i = 0; i < 512; i++){
        let posX = i - 256;
        for(let j = 0; j < 512; j++){
            positions.setXYZ(index, posX*2, (j-203)*2, 0)
            coordinates.setXYZ(index, i, j, 0)
            offset.setX(index, rand(-1000, 1000))
            speeds.setX(index, rand(0.4, 1))
            direction.setX(index, Math.random() > 0.5 ? 1:-1)
            press.setX(index, rand(0.4, 1))
            index++;
        }
      } 

      geometry.setAttribute("position", positions)
      geometry.setAttribute("aCoordinates", coordinates)
      geometry.setAttribute("aOffset", offset)
      geometry.setAttribute("aSpeed", speeds)
      geometry.setAttribute("aPress", press)
      geometry.setAttribute("aDirection", direction)

      const mesh = new THREE.Points( geometry, material );
      scene.add( mesh );

      const settings = () => {

        let settings = {
          howmuchrgbshifticanhaz: 1,
        };

        const gui = new dat.GUI();
        gui.add(settings, "howmuchrgbshifticanhaz", 0, 1, 0.01);

      }

      const mouseEffects = () => {

        const test = new THREE.Mesh(
          new THREE.PlaneBufferGeometry(2000,2000),
          new THREE.MeshBasicMaterial()
       )

       window.addEventListener('mousedown', (e)=>{
        gsap.to(material.uniforms.mousePressed,{
            duration:1,
            value:1,
            ease: "elastic.out(1, 0.3)"
          })
        })

        window.addEventListener('mouseup', (e)=>{
            gsap.to(material.uniforms.mousePressed,{
                duration:1,
                value:0,
                ease: "elastic.out(1, 0.3)"
            })
        })

        let debounceTimer
        window.addEventListener('mousewheel', (e)=>{

          if(debounceTimer) clearTimeout(debounceTimer)
          debounceTimer = setTimeout(() => {
            if (implementCount%2 == 0){
              tl
              .add('start')
              .add('end')
              .to(material.uniforms.transition, {
                duration:1,
                value: 1,
                ease: "ease"
              }, 'start')
              .to(material.uniforms.move, {
                duration:1,
                value: 1,
                ease: "ease"
              }, 'start')
              .to(material.uniforms.transition, {
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
              .to(material.uniforms.transition, {
                duration:1,
                value: 1,
                ease: "ease"
              }, 'start')
              .to(material.uniforms.move, {
                duration:1,
                value: 0,
                ease: "power4"
              }, 'start')
              .to(material.uniforms.transition, {
                duration:1,
                value: 0,
                ease: "elastic.out(1, 0.3)"
              })
              .to(this, {
                duration:0.1,
                textureIndexslice2: "+=2",
              });
            }
            implementCount ++;

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
        })

        window.addEventListener( 'mousemove', (event) =>{
          mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

          // console.log('mouse : ' ,  this.mouse.x, this.mouse.y)

          raycaster.setFromCamera( mouse, camera );

          // calculate objects intersecting the picking ray
          const intersects = raycaster.intersectObjects( [test] );
          
          if(intersects[0]){
            point.x = intersects[0].point.x
            point.y = intersects[0].point.y
          }

          // this.mesh.rotation.x = -0.1 + this.mouse.x * 0.1;
          // this.mesh.rotation.y = 0.5 + this.mouse.y * 0.1;
          // this.mesh.rotation.z =  0.3 + this.mouse.y * 0.1;
          mesh.rotation.x =  mouse.x * 0.1;
          mesh.rotation.y =  mouse.y * 0.1;
          mesh.rotation.z =  mouse.y * 0.1;


        }, false );

      }

      const render = () => {

        time++;
         
          
        material.uniforms.t1.value = textures[(textureIndexslice1 % 4)];
        material.uniforms.t2.value = textures[(textureIndexslice2 % 4)];

        material.uniforms.time.value = time;
        material.uniforms.smove.value = smove;
        material.uniforms.mouse.value = point;
        renderer.render( scene, camera );
        window.requestAnimationFrame(render.bind(this));

      }

      const resize = () => {

        width = particleContainer.current.offsetWidth;
        height = particleContainer.current.offsetHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;

        // camera.updateProjectionMatrix();
    }

      
      const bindedResize = resize.bind(this)
      resize();
      mouseEffects();
      render();
      // settings();

      // window.addEventListener( 'mousemove', onMouseMove, false );
      // window.addEventListener("resize", bindedResize)

        return() => {
          window.removeEventListener("mousemove", mouseEffects);
          window.removeEventListener("mousedown", mouseEffects);
          window.removeEventListener("mouseup", mouseEffects);
          window.removeEventListener("mousewheel", mouseEffects);
            // document.removeEventListener('mousemove', onMouseMove, false);
            // document.removeEventListener("resize", bindedResize);
            frag = false;
        }


    }, []);

    return (
        <>
          <div ref={particleContainer} id="particle-mesh-container"></div>
        </>
    );
}


function ParticleMainModel() {

    useEffect(() => {

    })

    return (
        <>
            <MeshModel/>
        </>
    )
}

export default ParticleMainModel
