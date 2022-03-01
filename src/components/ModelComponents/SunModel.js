import React, { useRef, useEffect } from 'react'
import * as THREE from "three";
// import { BufferAttribute } from 'three';
// reset Styles
import "../../App.scss"
// import {gsap} from 'gsap';
//dat.gui
// import * as dat from "dat.gui"

import SunFragment from '../../shaders/SunShader/SunFragment'
import SunVertex from '../../shaders/SunShader/SunVertex'

import SunFragment2 from '../../shaders/SunShader/SunFragment2'
import SunVertex2 from '../../shaders/SunShader/SunVertex2'

import SunFragmentAround from '../../shaders/SunShader/SunFragmentAround'
import SunVertexAround from '../../shaders/SunShader/SunVertexAround'

// let OrbitControls = require("three-orbit-controls")(THREE);
// import PapayaFragmentParticle from '../../shaders/PapayaShader/PapayaFragmentParticle'
// import PapayaVertexParticle from '../../shaders/PapayaShader/PapayaVertexParticle'

// let OrbitControls = require("three-orbit-controls")(THREE);

function SunModel() {

    const SunContainer = useRef();

    let frag = true;

    useEffect(() => {

        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor(0x000000, 1);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        var width = SunContainer.current.offsetWidth;
        var height = SunContainer.current.offsetHeight;
        SunContainer.current.appendChild(renderer.domElement );

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.set(0, 0, 2);

        let time = 0;
        // let paused = false;
        let isPlaying = true;

        //addAround
        const materialAround = new THREE.ShaderMaterial({
            fragmentShader:SunFragmentAround,
            vertexShader:SunVertexAround,
            uniforms:{
                time:{value:0},
                uPerlin:{value:null},
                resolution: {value: new THREE.Vector4()},
            },
            side: THREE.BackSide,
          })
        const geometryAround = new THREE.SphereBufferGeometry(1.05, 30, 30);
        const sunAround = new THREE.Mesh(geometryAround, materialAround );
        scene.add( sunAround );

        //addTexture
        const scene1 = new THREE.Scene();
        const cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget( 256, {
            format: THREE.RGBFormat,
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter,
            encoding: THREE.sRGBEncoding // temporary -- to prevent the material's shader from recompiling every frame
        } );

        const cubeCamera1 = new THREE.CubeCamera( 0.1, 10, cubeRenderTarget1 );

        const materialPerlin = new THREE.ShaderMaterial({
            fragmentShader:SunFragment,
            vertexShader:SunVertex,
            uniforms:{
                time:{value:0},
                resolution: {value: new THREE.Vector4()},
            },
            side: THREE.DoubleSide,
            })
        const perlingeometry = new THREE.SphereBufferGeometry(0.9,30, 30);
        const perlin = new THREE.Mesh(perlingeometry, materialPerlin );
        scene1.add( perlin );

        //addObject
        const materialSun = new THREE.ShaderMaterial({
            fragmentShader:SunFragment2,
            vertexShader:SunVertex2,
            uniforms:{
                time:{value:0},
                uPerlin:{value:null},
                resolution: {value: new THREE.Vector4()},
            },
            side: THREE.DoubleSide,
          })

        const geometry = new THREE.SphereBufferGeometry(0.9,30, 30);
        const sun = new THREE.Mesh(geometry, materialSun );
        scene.add( sun );

        const setupResize = () => {
            // window.addEventListener("resize", resize.bind(this))
            window.addEventListener("resize", bindedResize)
        }

        const resize = () => {
            width = SunContainer.current.offsetWidth;
            height = SunContainer.current.offsetHeight;
            renderer.setSize(width, height);
            // composer.setSize(width, height);
            camera.aspect = width / height;

            camera.updateProjectionMatrix();
        }

        const render = () => { 
            
            if(frag){
                
                if(!isPlaying) return;

                cubeCamera1.update( renderer, scene1 );
                materialSun.uniforms.uPerlin.value = cubeRenderTarget1.texture;

                time += 0.05;
                materialSun.uniforms.time.value = time;
                materialPerlin.uniforms.time.value = time;

                sun.rotation.y = time/100;
                // sun.rotation.x = time/100;
                perlin.rotation.y = time/100;
                perlin.rotation.x = time/100;
                // sunAround.rotation.y = time/10;

                window.requestAnimationFrame(render.bind(this));
                renderer.render( scene, camera );

            }else{
                console.log('///////////////false')
            }
        }

        const bindedResize = resize.bind(this)
        resize();
        render();
        setupResize();

        return() => {
            // document.removeEventListener('mousemove', mouseEvents, false);
            // document.removeEventListener('mouseout', mouseEvents, false);
            window.removeEventListener("resize", bindedResize);
            frag = false;
        }

    }, []);

    return (
        <>
             <div ref={SunContainer} id="sun-mesh-container"></div>
        </>
    )
}

export default SunModel
