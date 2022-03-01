import React, { useEffect } from 'react'
import * as THREE from "three";
// import { BufferAttribute } from 'three';

// reset Styles
import "../../App.scss"

//R3F
// import { Canvas, useFrame, extend  } from '@react-three/fiber'

import Boilerfragment from '../../shaders/BoilerShader/BoilerFragment'
import BoilerVertex from '../../shaders/BoilerShader/BoilerVertex'

function BoilerModel() {

    useEffect(() => {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                document.getElementById('boilerContainer').appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
                this.camera.position.z = 1;
                this.scene = new THREE.Scene();

                this.addMesh();
                this.time=0;
                this.render();
            }

            addMesh(){
                this.geometry = new THREE.PlaneBufferGeometry( 1, 1 );
                this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});
                this.material = new THREE.ShaderMaterial({
                    fragmentShader:Boilerfragment,
                    vertexShader:BoilerVertex,
                    uniforms:{
                    },
                    side: THREE.DoubleSide,
                    transparent: true,
                    depthTest: false,
                    depthWrite: false,
                  })

                this.mesh = new THREE.Mesh( this.geometry, this.material );
                this.scene.add( this.mesh );
            }

            render(){
                this.mesh.rotation.x += 0.01; 
	            this.mesh.rotation.y += 0.02;
                this.time++;
                this.renderer.render( this.scene, this.camera );
                window.requestAnimationFrame(this.render.bind(this));
            }
        }
        new Sketch();
    
        }, []);

    return (
        <>
            <div id="boilerContainer"></div>
        </>
    )
}

export default BoilerModel
