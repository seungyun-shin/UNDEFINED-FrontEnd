import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";
import { BufferAttribute } from 'three';
// reset Styles
import "../../App.scss"
import {gsap} from 'gsap';
//dat.gui
import * as dat from "dat.gui"

import SunFragment from '../../shaders/SunShader/SunFragment'
import SunVertex from '../../shaders/SunShader/SunVertex'

import SunFragment2 from '../../shaders/SunShader/SunFragment2'
import SunVertex2 from '../../shaders/SunShader/SunVertex2'

import SunFragmentAround from '../../shaders/SunShader/SunFragmentAround'
import SunVertexAround from '../../shaders/SunShader/SunVertexAround'

let OrbitControls = require("three-orbit-controls")(THREE);
// import PapayaFragmentParticle from '../../shaders/PapayaShader/PapayaFragmentParticle'
// import PapayaVertexParticle from '../../shaders/PapayaShader/PapayaVertexParticle'

// let OrbitControls = require("three-orbit-controls")(THREE);

function SunModel() {

    const SunContainer = useRef();

    let frag = true;

    useEffect(() => {

        class Sketch{
            constructor(){

                this.scene = new THREE.Scene();
                // this.container = options.dom;
                this.width = SunContainer.current.offsetWidth;
                this.height = SunContainer.current.offsetHeight;

                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                // this.renderer.setClearColor(0xeeeeee, 1);
                this.renderer.setClearColor(0x000000, 1);
                this.renderer.physicallyCorrectLights=true;
                this.renderer.outputEncoding = THREE.sRGBEncoding;
                SunContainer.current.appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
                this.camera.position.set(0, 0, 2);
                this.controls = new OrbitControls(this.camera, this.renderer.domElement);
                this.time = 0;

                this.isPlaying = true;
                
                this.addAround();
                this.addTexture();
                this.addObjects();
                this.resize();
                this.render();
                this.setupResize();
            }

            addAround(){
                let that = this;
                this.materialAround = new THREE.ShaderMaterial({
                    fragmentShader:SunFragmentAround,
                    vertexShader:SunVertexAround,
                    uniforms:{
                        time:{value:0},
                        uPerlin:{value:null},
                        resolution: {value: new THREE.Vector4()},
                    },
                    side: THREE.BackSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                  })

                this.geometry = new THREE.SphereBufferGeometry(1.2, 30, 30);

                this.sunAround = new THREE.Mesh(this.geometry, this.materialAround );

                // this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.sunAround );
            }

            addTexture(){
                this.scene1 = new THREE.Scene();
                this.cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget( 256, {
					format: THREE.RGBFormat,
					generateMipmaps: true,
					minFilter: THREE.LinearMipmapLinearFilter,
					encoding: THREE.sRGBEncoding // temporary -- to prevent the material's shader from recompiling every frame
				} );

                this.cubeCamera1 = new THREE.CubeCamera( 0.1, 10, this.cubeRenderTarget1 );

                this.materialPerlin = new THREE.ShaderMaterial({
                    fragmentShader:SunFragment,
                    vertexShader:SunVertex,
                    uniforms:{
                        time:{value:0},
                        resolution: {value: new THREE.Vector4()},
                    },
                    side: THREE.DoubleSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                  })

                this.geometry = new THREE.SphereBufferGeometry(1,30, 30);

                this.perlin = new THREE.Mesh(this.geometry, this.materialPerlin );

                // this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene1.add( this.perlin );

            }

            settings(){
                
                let that = this;
                this.settings = {
                    progress: 0,
                };
                this.gui = new dat.GUI();
                this.gui.add(this.settings, "progress", 0, 1, 0.01);
            }

            setupResize(){
                window.addEventListener("resize", this.resize.bind(this));
            }

            resize(){
                this.width = SunContainer.current.offsetWidth;
                this.height = SunContainer.current.offsetHeight;
                this.renderer.setSize(this.width, this.height);
                // composer.setSize(width, height);
                this.camera.aspect = this.width / this.height;

                this.camera.updateProjectionMatrix();
            }

            addObjects(){
                // this.geometry = new THREE.PlaneBufferGeometry( 1, 1 );
                // this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                let that = this;
                this.materialSun = new THREE.ShaderMaterial({
                    fragmentShader:SunFragment2,
                    vertexShader:SunVertex2,
                    uniforms:{
                        time:{value:0},
                        uPerlin:{value:null},
                        resolution: {value: new THREE.Vector4()},
                    },
                    side: THREE.DoubleSide,
                    // transparent: true,
                    // depthTest: false,
                    // depthWrite: false,
                  })

                this.geometry = new THREE.SphereBufferGeometry(1,30, 30);

                this.sun = new THREE.Mesh(this.geometry, this.materialSun );

                // this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.sun );
            }

            stop(){
                this.isPlaying=false;
            }
            play(){
                if(!this.isPlaying){
                    this.render()
                    this.isPlaying = true;
                }
            }

            render(){
                if(!this.isPlaying) return;

                this.cubeCamera1.update( this.renderer, this.scene1 );
                this.materialSun.uniforms.uPerlin.value = this.cubeRenderTarget1.texture;
				// this.material.envMap = cubeRenderTarget1.texture;

                this.time += 0.05;
                this.materialSun.uniforms.time.value = this.time;
                this.materialPerlin.uniforms.time.value = this.time;
                window.requestAnimationFrame(this.render.bind(this));
                this.renderer.render( this.scene, this.camera );
            }
        }
        new Sketch();

    }, []);

    return (
        <>
             <div ref={SunContainer} id="sun-mesh-container"></div>
        </>
    )
}

export default SunModel
