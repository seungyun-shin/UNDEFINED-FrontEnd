import React, { useRef, useEffect } from 'react'
import * as THREE from "three";
// import { BufferAttribute } from 'three';

// reset Styles
import "../../App.scss"

//R3F
// import { Canvas, useFrame, extend  } from '@react-three/fiber'

//gsap 
// import gsap from 'gsap'

//dat.gui
// import * as dat from "dat.gui"

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

    const DigitalContainer = useRef();
    let frag = true;

    useEffect(() => {

        
        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor(0x000000, 1);
        renderer.physicallyCorrectLights = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        
        let width = DigitalContainer.current.offsetWidth;
        let height = DigitalContainer.current.offsetHeight;
        DigitalContainer.current.appendChild(renderer.domElement );

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
        camera.position.set(0, 0, 2);
        
        let time = 0;
        let paused = false;
        let count = 40;
        
        const raycaster = new THREE.Raycaster(); 

        let mouse = {x:0, y:0};

        const materialSqures = new THREE.ShaderMaterial({
        
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

        const geometrySquares = new THREE.PlaneBufferGeometry(0.1, 0.1);
        
        const squares = new THREE.InstancedMesh(geometrySquares, materialSqures, count**2)  

        const dummy = new THREE.Object3D();

        let counter = 0;
        for(let i = -count/2; i < count/2; i++){                  
            for(let j = -count/2; j < count/2; j++){
                dummy.position.set( i/10 + 0.05, j/10 + 0.05, 0);

                dummy.updateMatrix();

                squares.setMatrixAt( counter++, dummy.matrix );
            }
        }

        scene.add(squares);
        squares.position.z = 0.01;

        // addPoints

        const materialPoints = new THREE.ShaderMaterial({
                    
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


        const pointsGeometry = new THREE.BufferGeometry();
        let vertices = []; 

        for(let i = -count/2; i < count/2; i++){                  
            for(let j = -count/2; j < count/2; j++){
                  vertices.push( i/10, j/10, 0);
            }
        }
        pointsGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

        const particles = new THREE.Points( pointsGeometry, materialPoints );

        scene.add(particles);
        particles.position.z = 0.008;

        //add Mesh
        let video = document.getElementById('video');
                console.log(video);
                // video.autoplay = true;
                // video.src = mainVideo;

                let texture = new THREE.VideoTexture( video );
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                texture.format = THREE.RGBFormat;
                
                video.play();

                const material = new THREE.ShaderMaterial({
                    
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
                
                const geometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );

                const mesh = new THREE.Mesh( geometry, material );
                scene.add( mesh );

                const test = new THREE.Mesh(new THREE.PlaneBufferGeometry(0.3,0.3), new THREE.MeshBasicMaterial({color: 0x00ff00}))
                test.position.z = -0.3
                scene.add(test)

                //add mesh
                const lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff, transparent: true, opacity: 0.19});

                const points = [];

                for (let i = -count/2; i< count/2; i++){
                    points.push( new THREE.Vector3( - 5, i/10 +0.005, 0 ) );
                    points.push( new THREE.Vector3( 5, i/10 +0.005, 0 ) );
                }

                for (let i = -count/2; i< count/2; i++){
                    points.push( new THREE.Vector3( i/10 +0.005, -5, 0 ) );
                    points.push( new THREE.Vector3( i/10  +0.005, 5, 0 ) );
                }

                const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );

                const lines = new THREE.LineSegments( lineGeometry, lineMaterial );

                scene.add(lines)

                lines.position.z = 0.09;

                const setupResize = () => {
                    // window.addEventListener("resize", resize.bind(this))
                    window.addEventListener("resize", bindedResize)
                }

                const mouseMove = () => {
                    const testPlane = new THREE.Mesh(new THREE.PlaneGeometry(5,5), new THREE.MeshBasicMaterial())
                    window.addEventListener( 'mousemove', function(event){
                        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                        raycaster.setFromCamera( mouse, camera );

                        let intersects = raycaster.intersectObjects( [testPlane] );

                        if(intersects.length>0){
                            materialSqures.uniforms.mouse.value = intersects[0].point;
                        }                
                    }, false );
                }

                const resize = () => {
                    width = DigitalContainer.current.offsetWidth;
                    height = DigitalContainer.current.offsetHeight;
                    renderer.setSize(width, height);
                    camera.aspect = width / height;

                    let imageAspect = 1080/1920;
                    let a1; let a2;
                    if(height/width>imageAspect){
                        a1 = (width/height) * imageAspect;
                        a2 = 1;
                    }else{
                        a1 = 1;
                        a2 = (height/width) / imageAspect;
                    }

                    material.uniforms.resolution.value.x = width;
                    material.uniforms.resolution.value.y = height;
                    material.uniforms.resolution.value.z = a1;
                    material.uniforms.resolution.value.w = a2;

                    //optional - cover with quad
                    const dist = camera.position.z;
                    height = 0.8;
                    camera.fov = (2*(180/Math.PI)*Math.atan(height/(2*dist))) + 6;

                    // //if(w/h>1)
                    if(width/height>1){
                        mesh.scale.x = camera.aspect;
                        //this.plane.scale.y = this.camera.aspect;
                    }else{
                        mesh.scale.y = 1/camera.aspect;
                    }

                    camera.updateProjectionMatrix();
                }

                const render = () => { 

                    if(paused) return;
                    time += 0.05;

                    scene.rotation.x = -mouse.y/5
                    scene.rotation.y = mouse.x/5

                    mesh.position.x = mouse.x/13
                    mesh.position.y = mouse.y/13


                    material.uniforms.time.value = time;
                    materialSqures.uniforms.time.value = time;
                    materialPoints.uniforms.time.value = time;
                    window.requestAnimationFrame(render.bind(this));
                    renderer.render( scene, camera );
                }

                const bindedResize = resize.bind(this)
                setupResize();
                mouseMove();
                resize();
                render();

                return() => {
                    document.removeEventListener('mousemove', mouseMove, false);
                    window.removeEventListener("resize", bindedResize);
                    frag = false;
                }
    
        }, []);

    return (
        <>  
            {/* <video id="video" src="../video/sheeps.mp4" muted playsInline/> */}
            <video id="video" muted playsInline loop="true">
                <source src={mainVideo} type="video/mp4" />
            </video>
            <div ref={DigitalContainer} id="digitalScreen-mesh-container"></div>
            
            
        </>
    )
}

export default DigitalScreenModel
