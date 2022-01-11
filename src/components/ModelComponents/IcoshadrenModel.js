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

import landscape from '../../assets/images/textures/skytexture.png'
import { TetrahedronGeometry } from 'three';

function IcoshadrenModel() {

    const icoshadrenContainer = useRef();

    let frag = true;

    useEffect(() => {

        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize( window.innerWidth, window.innerHeight*1.5 );
        renderer.setSize( window.innerWidth, window.innerHeight*1.5 );
        renderer.setClearColor(0x111111, 1);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        var width = icoshadrenContainer.current.offsetWidth;
        var height = icoshadrenContainer.current.offsetHeight;
        icoshadrenContainer.current.appendChild(renderer.domElement );

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
        // camera.position.set(0, 0, 1.39);
        // camera.position.set(0, 0, 1.5);
        camera.position.set(0, 0, 1.7);
        
        let mouseCmove = {x:0, y:0};

        let time = 0;
        let mouse = 0;
        let noiseblur = 1;
        let meshToggle = 0;

        let lastX = 0;
        let lastY = 0;
        let speed = 0;


        // let t = new THREE.TextureLoader().load(landscape)
        new THREE.TextureLoader().load(landscape,
            (t) =>{
                t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
        
                const geometry = new THREE.IcosahedronGeometry( 0.59, 2 );
                const geometry1 = new THREE.IcosahedronBufferGeometry( 0.60, 2 );
                let length = geometry1.attributes.position.array.length;
                
                let bary= [];
                
                for (let i=0; i< length/3; i++){
                    bary.push(0,0,1, 0,1,0, 1,0,0)
                }
        
                let aBary = new Float32Array(bary);
                geometry1.setAttribute('aBary', new THREE.BufferAttribute(aBary, 3),);
                    
                    let material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                        material = new THREE.ShaderMaterial({
                        fragmentShader:IcoshadrenFragment,
                        vertexShader:IcoshadrenVertex,
                        uniforms:{
                            time : { type: "f", value: 0}, 
                            landscape : { type: "t", value: t }, 
                            resolution: { type: "v4", value: new THREE.Vector4()},
                            mouse : { value:0 }, 
                        },
                        side: THREE.DoubleSide,
                        })
        
                    const material1 = new THREE.ShaderMaterial({
                        fragmentShader:IcoshadrenFragment1,
                        vertexShader:IcoshadrenVertex,
                        uniforms:{
                            time : { type: "f", value: 0}, 
                            landscape : { type: "t", value: t }, 
                            resolution: { type: "v4", value: new THREE.Vector4()},
                            mouse : { value:0 }, 
                        },
                        side: THREE.DoubleSide,
                        })
        
                    const ico = new THREE.Mesh( geometry1, material );
                    const icoLines = new THREE.Mesh( geometry1, material1 );
                    scene.add( ico );
        
                    //add Pixel
                    const composer = new EffectComposer( renderer );
                    composer.addPass( new RenderPass( scene, camera ) );
        
                    const customPass = new ShaderPass( PostProcessing );
                    customPass.uniforms[ "resolution" ].value = new THREE.Vector2( window.innerWidth, window.innerHeight );
                    customPass.uniforms[ "resolution" ].value.multiplyScalar( window.devicePixelRatio );
                    customPass.uniforms[ "noiseblur" ].value = noiseblur;
                    composer.addPass( customPass );

                    const initialpagecheck = () => {
                        
                        if(document.getElementsByClassName('main-title').length == 0){

                            if( document.getElementsByClassName('about-header').length !== 0 || document.getElementsByClassName('earthContainer').length !== 0){
                                
                                ico.visible=false;
                                icoLines.visible=false;

                            }else{
                                
                                gsap.to( camera.position, {
                                    duration: 3,
                                    z: 0.3,
                                } );
                
                                gsap.to( customPass.uniforms[ "noiseblur" ], {
                                    duration: 3,
                                    value: 17.0,
                                });
                            }
                        }
                    }
            
                    const meshanimation = () => {
            
                        document.getElementsByClassName('logo')[0].addEventListener('click', (e) => {
            
                            if(meshToggle == 1){
                                gsap.to( camera.position, {
                                    duration: 3,
                                    z: 1.7,
                                } );
                
                                gsap.to( customPass.uniforms[ "noiseblur" ], {
                                    duration: 3,
                                    value: 1.0,
                                } );
            
                                meshToggle=0;
                            }
                        });
            
                        const menulist = document.querySelectorAll("a"); 
                        for(let i=0; i<menulist.length; i++){

                            if( i == 4 || i == 5){

                                menulist[i].addEventListener('click', (e) => {

                                    ico.visible=false;
                                    icoLines.visible=false;

                                    if(meshToggle == 0){
                                        gsap.to( camera.position, {
                                            duration: 3,
                                            z: 0.3,
                                        } );
                
                                        gsap.to( customPass.uniforms[ "noiseblur" ], {
                                            duration: 3,
                                            value: 37.0,
                                        } );
                
                                        gsap.to(HeaderStyleCom, 1.6, {
                                            y: -70,
                                            opacity: 0,
                                            ease: "power4.out",
                                        })
                
                                        meshToggle=1;
                
                                        }
                                    });
                            }else{
            
                            menulist[i].addEventListener('click', (e) => {

                                ico.visible=true;
                                icoLines.visible=true;

                                if(meshToggle == 0){
                                    gsap.to( camera.position, {
                                        duration: 3,
                                        z: 0.3,
                                    } );
            
                                    gsap.to( customPass.uniforms[ "noiseblur" ], {
                                        duration: 3,
                                        value: 17.0,
                                    } );
            
                                    gsap.to(HeaderStyleCom, 1.6, {
                                        y: -70,
                                        opacity: 0,
                                        ease: "power4.out",
                                    })
            
                                    meshToggle=1;
            
                                    }
                                });
                            }
                        }
                    }
            
                    const mouseEvents = () => {
            
                        document.addEventListener('mousemove', (e) => {
                            speed = Math.sqrt((e.pageX - lastX)**2 +  (e.pageX - lastX)**2) * 0.003;
                            lastX = e.pageX;
                            lastY = e.pageY;
                            mouseCmove.x = ( e.clientX / window.innerWidth ) * 2 - 1;
                            mouseCmove.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
            
                            icoLines.position.x = mouseCmove.x * 0.039;
                            ico.position.x = mouseCmove.x * 0.039;
                            icoLines.position.y = mouseCmove.y * 0.039;
                            ico.position.y = mouseCmove.y * 0.039;
                        })
            
                        document.addEventListener('mouseout', (e) => {
                            speed = 0;
                            lastX = 0;
                            lastY = 0;
                        })
                    }
            
                    const setupResize = () => {
                        window.addEventListener("resize", resize.bind(this))
                    }
            
                    const resize = () => {
                        width = icoshadrenContainer.current.offsetWidth;
                        height = icoshadrenContainer.current.offsetHeight;
                        renderer.setSize(width, height);
                        composer.setSize(width, height);
                        camera.aspect = width / height;
            
                        camera.updateProjectionMatrix();
                    }
            
                    const render = () => { 
                        
                        if(frag){
                            time += 0.001 ;
                            mouse -= (mouse - speed) * 0.005;
                            speed *= 0.99;
            
                            scene.rotation.x = - time * 6;
                            scene.rotation.y =  time * 6;
                            scene.position.z = 0.2 * Math.sin(time*3)
            
                            customPass.uniforms.time.value = time;
                            customPass.uniforms.howmuchrgbshifticanhaz.value = mouse/5;
            
                            material.uniforms.time.value = time;
                            material.uniforms.mouse.value = mouse;
                            material1.uniforms.time.value = time;
                            material1.uniforms.mouse.value = mouse;
            
                            composer.render();
                            window.requestAnimationFrame(render.bind(this));
                            
                        }else{
                            console.log('///////////////false')
                        }
                    }
                    
                    const bindedResize = resize.bind(this)
                    setupResize();
                    mouseEvents();
                    resize();
                    render();
                    meshanimation();
                    initialpagecheck();
                    
                    return() => {
                        document.removeEventListener('mousemove', mouseEvents, false);
                        document.removeEventListener('mouseout', mouseEvents, false);
                        document.removeEventListener("resize", bindedResize);
                        frag = false;
                    }
                }
            )
        // t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
        
        // const geometry = new THREE.IcosahedronGeometry( 0.59, 2 );
        // const geometry1 = new THREE.IcosahedronBufferGeometry( 0.60, 2 );
        // let length = geometry1.attributes.position.array.length;
        
        // let bary= [];
        
        // for (let i=0; i< length/3; i++){
        //     bary.push(0,0,1, 0,1,0, 1,0,0)
        // }

        // let aBary = new Float32Array(bary);
        // geometry1.setAttribute('aBary', new THREE.BufferAttribute(aBary, 3),);
            
        //     let material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
        //         material = new THREE.ShaderMaterial({
        //         fragmentShader:IcoshadrenFragment,
        //         vertexShader:IcoshadrenVertex,
        //         uniforms:{
        //             time : { type: "f", value: 0}, 
        //             landscape : { type: "t", value: t }, 
        //             resolution: { type: "v4", value: new THREE.Vector4()},
        //             mouse : { value:0 }, 
        //         },
        //         side: THREE.DoubleSide,
        //         })

        //     const material1 = new THREE.ShaderMaterial({
        //         fragmentShader:IcoshadrenFragment1,
        //         vertexShader:IcoshadrenVertex,
        //         uniforms:{
        //             time : { type: "f", value: 0}, 
        //             landscape : { type: "t", value: t }, 
        //             resolution: { type: "v4", value: new THREE.Vector4()},
        //             mouse : { value:0 }, 
        //         },
        //         side: THREE.DoubleSide,
        //         })

        //     const ico = new THREE.Mesh( geometry1, material );
        //     const icoLines = new THREE.Mesh( geometry1, material1 );
        //     scene.add( ico );

        //     //add Pixel
        //     const composer = new EffectComposer( renderer );
        //     composer.addPass( new RenderPass( scene, camera ) );

        //     const customPass = new ShaderPass( PostProcessing );
        //     customPass.uniforms[ "resolution" ].value = new THREE.Vector2( window.innerWidth, window.innerHeight );
        //     customPass.uniforms[ "resolution" ].value.multiplyScalar( window.devicePixelRatio );
        //     customPass.uniforms[ "noiseblur" ].value = noiseblur;
        //     composer.addPass( customPass );


        // const initialpagecheck = () => {
        //     if(document.getElementsByClassName('main-title').length == 0){
                    
        //         gsap.to( camera.position, {
        //             duration: 3,
        //             z: 0.3,
        //         } );

        //         gsap.to( customPass.uniforms[ "noiseblur" ], {
        //             duration: 3,
        //             value: 17.0,
        //         } );
        //     }
        // }

        // const meshanimation = () => {

        //     document.getElementsByClassName('logo')[0].addEventListener('click', (e) => {

        //         if(meshToggle == 1){
        //             gsap.to( camera.position, {
        //                 duration: 3,
        //                 z: 1.39,
        //             } );
    
        //             gsap.to( customPass.uniforms[ "noiseblur" ], {
        //                 duration: 3,
        //                 value: 1.0,
        //             } );

        //             meshToggle=0;
        //         }
        //     });

        //     const menulist = document.querySelectorAll("a"); 
        //     for(let i=0; i<menulist.length; i++){

        //         menulist[i].addEventListener('click', (e) => {
        //             if(meshToggle == 0){
        //                 gsap.to( camera.position, {
        //                     duration: 3,
        //                     z: 0.3,
        //                 } );

        //                 gsap.to( customPass.uniforms[ "noiseblur" ], {
        //                     duration: 3,
        //                     value: 17.0,
        //                 } );

        //                 gsap.to(HeaderStyleCom, 1.6, {
        //                     y: -70,
        //                     opacity: 0,
        //                     ease: "power4.out",
        //                 })

        //                 meshToggle=1;

        //                 }
        //             });
        //         }
        // }

        // const mouseEvents = () => {

        //     document.addEventListener('mousemove', (e) => {
        //         speed = Math.sqrt((e.pageX - lastX)**2 +  (e.pageX - lastX)**2) * 0.003;
        //         lastX = e.pageX;
        //         lastY = e.pageY;
        //         mouseCmove.x = ( e.clientX / window.innerWidth ) * 2 - 1;
        //         mouseCmove.y = - ( e.clientY / window.innerHeight ) * 2 + 1;

        //         icoLines.position.x = mouseCmove.x * 0.039;
        //         ico.position.x = mouseCmove.x * 0.039;
        //         icoLines.position.y = mouseCmove.y * 0.039;
        //         ico.position.y = mouseCmove.y * 0.039;
        //     })

        //     document.addEventListener('mouseout', (e) => {
        //         speed = 0;
        //         lastX = 0;
        //         lastY = 0;
        //     })
        // }

        // const setupResize = () => {
        //     window.addEventListener("resize", resize.bind(this))
        // }

        // const resize = () => {
        //     width = icoshadrenContainer.current.offsetWidth;
        //     height = icoshadrenContainer.current.offsetHeight;
        //     renderer.setSize(width, height);
        //     composer.setSize(width, height);
        //     camera.aspect = width / height;

        //     camera.updateProjectionMatrix();
        // }

        // const render = () => { 
            
        //     if(frag){
        //         time += 0.001 ;
        //         mouse -= (mouse - speed) * 0.005;
        //         speed *= 0.99;

        //         scene.rotation.x = - time * 6;
        //         scene.rotation.y =  time * 6;
        //         scene.position.z = 0.2 * Math.sin(time*5)

        //         customPass.uniforms.time.value = time;
        //         customPass.uniforms.howmuchrgbshifticanhaz.value = mouse/5;

        //         material.uniforms.time.value = time;
        //         material.uniforms.mouse.value = mouse;
        //         material1.uniforms.time.value = time;
        //         material1.uniforms.mouse.value = mouse;

        //         composer.render();
        //         window.requestAnimationFrame(render.bind(this));
                
        //     }else{
        //         console.log('///////////////false')
        //     }
        // }
        
        // const bindedResize = resize.bind(this)
        // setupResize();
        // mouseEvents();
        // resize();
        // render();
        // meshanimation();
        // initialpagecheck();

        // return() => {
        //     document.removeEventListener('mousemove', mouseEvents, false);
        //     document.removeEventListener('mouseout', mouseEvents, false);
        //     document.removeEventListener("resize", bindedResize);
        //     frag = false;
        // }

        }, []);


    return (
        <>
            <div ref={icoshadrenContainer} id="mesh-container"></div>
        </>
    )
}

export default IcoshadrenModel
