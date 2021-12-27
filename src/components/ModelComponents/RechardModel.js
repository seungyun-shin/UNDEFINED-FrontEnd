import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";
import { BufferAttribute } from 'three';

// reset Styles
import "../../App.scss"

//R3F
import { Canvas, useFrame, extend  } from '@react-three/fiber'

import RechardFragment from '../../shaders/RechadShader/RechardFragment'
import RechardVertex from '../../shaders/RechadShader/RechardVertex'

function RechardModel() {

    const canvasContainer = useRef();

    let frag = true;

    useEffect(() => {
    
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight*1.5 );
    renderer.setClearColor(0x000000, 1);

    // const container = document.getElementById("back-mesh-container");
    var width = canvasContainer.current.offsetWidth;
    var height = canvasContainer.current.offsetHeight;
    // container.appendChild( renderer.domElement );
    canvasContainer.current.appendChild( renderer.domElement );

    const geometry = new THREE.PlaneBufferGeometry( 1, 1 );
    var material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
    material = new THREE.ShaderMaterial({
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

        const mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );

        const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
        camera.position.set(0, 0, 1);

        const count = 40;
        const particleCnt = 5000;
        const time = 0;

        const imageAspect = 1;


        //mouse event
        const mouse = new THREE.Vector2();

        const onMouseMove = ( event ) => {

            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
        
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            
            material.uniforms.mouse.value = mouse;
        }

    const resize = () => {

        
        if(frag){
            var width = canvasContainer.current.offsetWidth;
            var height = canvasContainer.current.offsetHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;

            // this.imageAspect = 1080/1920;
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
            height = 1;
            camera.fov = (2*(180/Math.PI)*Math.atan(height/(2*dist))) ;

            // //if(w/h>1)
            if(width/height>1){
                mesh.scale.x = camera.aspect;
                //this.plane.scale.y = this.camera.aspect;
            }else{
                mesh.scale.y = 1/camera.aspect;
            }

            camera.updateProjectionMatrix();
        }else{
            console.log('///////////////false')
        }
    }

    const animate = () => {

        if(frag){
            // this.mesh.rotation.x += 0.01; 
            // this.mesh.rotation.y += 0.02;
            material.uniforms.time.value += 0.05;
            // this.renderer.render( this.scene, this.camera );
            window.requestAnimationFrame(animate.bind(this));
            renderer.render( scene, camera );
        }else{
        console.log('///////////////false')
        }
    }

        window.addEventListener( 'mousemove', onMouseMove, false );
        const bindedResize = resize.bind(this)
        window.addEventListener("resize", bindedResize)
        resize();
        animate();

        return() => {
            document.removeEventListener('mousemove', onMouseMove, false);
            document.removeEventListener("resize", bindedResize);
            frag = false;
        }
    
        }, []);

    return (
        <>
            <div id="back-mesh-container" ref={canvasContainer}></div>
        </>
    )
}

export default RechardModel
