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

    const PapayaContainer = useRef();

    let frag = true;

    useEffect(() => {

        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight*1.5 );
        renderer.setClearColor(0x111111, 1);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        
        var width = PapayaContainer.current.offsetWidth;
        var height = PapayaContainer.current.offsetHeight;
        PapayaContainer.current.appendChild(renderer.domElement );

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
        camera.position.set(0, 0, 5);

        let time = 0;
        let paused = false;

        const material = new THREE.ShaderMaterial({
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
        
        const geometry = new THREE.SphereBufferGeometry( 1, 462, 462);

        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        //add particle
        const ParticleMaterial = new THREE.ShaderMaterial({
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
        const positions = new Float32Array(N*3);
        const particlegeometry = new THREE.BufferGeometry();

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
        particlegeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const points = new THREE.Points( particlegeometry, ParticleMaterial );
        scene.add( points );

        const setupResize = () => {
            // window.addEventListener("resize", resize.bind(this))
            window.addEventListener("resize", bindedResize)
        }

        const resize = () => {
            width = PapayaContainer.current.offsetWidth;
            height = PapayaContainer.current.offsetHeight;
            renderer.setSize(width, height);
            // composer.setSize(width, height);
            camera.aspect = width / height;

            camera.updateProjectionMatrix();
        }

        const render = () => { 
            
            if(frag){
                
                time += 0.05;
                material.uniforms.time.value = time;
                ParticleMaterial.uniforms.time.value = time;
                points.rotation.y = time/10;
                
                renderer.render( scene, camera );
                window.requestAnimationFrame(render.bind(this));
            }else{
                console.log('///////////////false')
            }
        }
        
        const bindedResize = resize.bind(this)
        setupResize();
        resize();
        render();

        return() => {
            // document.removeEventListener('mousemove', mouseEvents, false);
            // document.removeEventListener('mouseout', mouseEvents, false);
            window.removeEventListener("resize", bindedResize);
            frag = false;
        }

    }, []);

    return (
        <>
             <div ref={PapayaContainer} id="papaya-mesh-container"></div>
        </>
    )
}

export default PapayaModel
