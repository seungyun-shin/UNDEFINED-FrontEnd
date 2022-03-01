import React, { useEffect } from 'react'
import * as THREE from "three";

// particle texture
import sprite1 from '../assets/images/models/ParticleScreen/snowflake1.png'
import sprite2 from '../assets/images/models/ParticleScreen/snowflake2.png'
import sprite3 from '../assets/images/models/ParticleScreen/snowflake3.png'
import sprite4 from '../assets/images/models/ParticleScreen/snowflake4.png'
import sprite5 from '../assets/images/models/ParticleScreen/snowflake5.png' 

function ParticleBackgroundScreen() {

    useEffect(() => {

        class Sketch{
            constructor(){
                
                this.renderer = new THREE.WebGLRenderer( { antialias: true } );
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                this.renderer.setClearColor(0x000000, 1);

                this.container = document.getElementById("particle-mesh-container");
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.container.appendChild( this.renderer.domElement );

                this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 2000 );
                // this.camera.position.set(0, 0, 1);
				this.camera.position.z = 1000;
				// scene.fog = new THREE.FogExp2( 0x000000, 0.0008 );

                this.scene = new THREE.Scene();
                this.materials = [];
                this.mouseX = 0;
                this.mouseY = 0;

                this.setupResize();
                this.addMesh();
                this.resize();
                this.time=0;
                this.mouseEvents();
                this.render();
                // this.mouseEvents();
            }

            mouseEvents(){

                window.addEventListener( 'mousemove', (event) =>{
                    this.mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
                    this.mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
        
                    console.log('mouse : ' ,  this.mouseX, this.mouseY);
        
                  }, false );


                // this.mouse = new THREE.Vector2();
                // let that = this;
                // function onMouseMove( event ) {

                //     // calculate mouse position in normalized device coordinates
                //     // (-1 to +1) for both components
                
                //     // that.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                //     // that.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                //     // if ( event.isPrimary === false ) return;

                //     this.mouseX = event.clientX - this.width;
                //     this.mouseY = event.clientY - this.height;
                    
                //     console.log('mouse : ' ,  this.mouseX, this.mouseY);                    
                // }

                // window.addEventListener( 'mousemove', onMouseMove, false );
            }

            setupResize(){
                window.addEventListener("resize", this.resize.bind(this))
            }

            resize(){
                this.width = this.container.offsetWidth;
                this.height = this.container.offsetHeight;
                this.renderer.setSize(this.width, this.height);
                this.camera.aspect = this.width / this.height;
				this.camera.updateProjectionMatrix();
            }
            
            addMesh(){
                this.geometry = new THREE.BufferGeometry();
                this.textureLoader = new THREE.TextureLoader();
                // new THREE.TextureLoader().load(t1),
                this.sprite1 =  new THREE.TextureLoader().load(sprite1);
                this.sprite2 =  new THREE.TextureLoader().load(sprite2);
                this.sprite3 =  new THREE.TextureLoader().load(sprite3);
                this.sprite4 =  new THREE.TextureLoader().load(sprite4);
                this.sprite5 =  new THREE.TextureLoader().load(sprite5);
                // this.sprite2 = this.textureLoader.load(sprite2); 
                // this.sprite3 = this.textureLoader.load(sprite3); 
                // this.sprite4 = this.textureLoader.load(sprite4); 
                // this.sprite5 = this.textureLoader.load(sprite5); 

                console.log(this.sprite1);
                
                this.vertices = []

                for ( let i = 0; i < 10000; i ++ ) {

					const x = Math.random() * 2000 - 1000;
					const y = Math.random() * 2000 - 1000;
					const z = Math.random() * 2000 - 1000;

					this.vertices.push( x, y, z );

				}

                this.geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( this.vertices, 3 ) );
                this.parameters = [
					[[ 1.0, 0.2, 0.5 ], this.sprite2, 20 ],
					[[ 0.95, 0.1, 0.5 ], this.sprite3, 15 ],
					[[ 0.90, 0.05, 0.5 ], this.sprite1, 10 ],
					[[ 0.85, 0, 0.5 ], this.sprite5, 8 ],
					[[ 0.80, 0, 0.5 ], this.sprite4, 5 ]
				];

                for ( let i = 0; i < this.parameters.length; i ++ ) {

					const color = this.parameters[ i ][ 0 ];
					const sprite = this.parameters[ i ][ 1 ];
					const size = this.parameters[ i ][ 2 ];

					this.materials[ i ] = new THREE.PointsMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: false, transparent: true } );
					this.materials[ i ].color.setHSL( color[ 0 ], color[ 1 ], color[ 2 ] );

					const particles = new THREE.Points( this.geometry, this.materials[ i ] );

					particles.rotation.x = Math.random() * 6;
					particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;

					this.scene.add( particles );

				}

                // this.material = new THREE.MeshNormalMaterial({side: THREE.DoubleSide});

                // this.mesh = new THREE.Mesh( this.geometry, this.material );
                // this.scene.add( this.mesh );
            }

            render(){
                // this.mesh.rotation.x += 0.01; 
	            // this.mesh.rotation.y += 0.02;
                const time = Date.now() * 0.00005;
                // console.log(this.mouseX)
				// this.camera.position.x = ( this.mouseX - this.camera.position.x ) * 2;
				// this.camera.position.y = ( -this.mouseY - this.camera.position.y ) * 2;
				// this.camera.lookAt( this.scene.position );

                for ( let i = 0; i < this.scene.children.length; i ++ ) {

					const object = this.scene.children[ i ];

					if ( object instanceof THREE.Points ) {

						object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );

					}

				}

                for ( let i = 0; i < this.materials.length; i ++ ) {

					const color = this.parameters[ i ][ 0 ];

					const h = ( 360 * ( color[ 0 ] + time ) % 360 ) / 360;
					this.materials[ i ].color.setHSL( h, color[ 1 ], color[ 2 ] );

				}

                this.renderer.render( this.scene, this.camera );
                window.requestAnimationFrame(this.render.bind(this));
            }
        }
        new Sketch();

    }, []);

    return (
        <>
            <div id="particle-mesh-container"></div>
        </>
    )
}

export default ParticleBackgroundScreen
