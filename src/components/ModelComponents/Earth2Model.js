import React, { useRef, useEffect, useState } from 'react'
import { useFrame, useLoader  } from '@react-three/fiber'
import { TextureLoader } from "three";
import * as THREE from "three";
import gsap from 'gsap'

import EarthDayMap from '../../assets/images/models/Earth2Model/8k_earth_daymap.jpg' 
import EarthNormalMap from '../../assets/images/models/Earth2Model/8k_earth_normal_map.jpg' 
import EarthSpecularMap from '../../assets/images/models/Earth2Model/8k_earth_specular_map.jpg' 
import EarthCloudMap from '../../assets/images/models/Earth2Model/8k_earth_clouds.jpg' 

import Landscape from '../../assets/images/textures/skytexture.png'
import Landscape2 from '../../assets/images/textures/test2.jpg'

import countryPoint from "../../assets/etc/countryPoint"

import { LinkStyleCom } from "../../styles/jsStyles/LinkStyle";

import { OrbitControls, Stars } from '@react-three/drei'

function Earth2Model( props ) {

    const [colorMap, normalMap, specularMap, cloudsMap, landscape, landscape2] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap, Landscape, Landscape2])

    const earthRef = useRef();
    const cloudeRef = useRef();
    const thanksPlanet = useRef();
    const projectPlanet = useRef();
    const thanksPlanetCover = useRef();
    const projectPlanetCover = useRef();

    for(let i=0; i < countryPoint.length; i++){
        countryPoint[i].latTransit = countryPoint[i].lat * (Math.PI/180);
        countryPoint[i].lonTransit = -countryPoint[i].lon * (Math.PI/180);

        countryPoint[i].x = Math.cos(countryPoint[i].latTransit) * Math.cos(countryPoint[i].lonTransit) * 2
        countryPoint[i].y = Math.sin(countryPoint[i].latTransit) * 2
        countryPoint[i].z = Math.cos(countryPoint[i].latTransit) * Math.sin(countryPoint[i].lonTransit) * 2

        // countryPoint[i].x = Math.cos(countryPoint[i].lat) * Math.cos(countryPoint[i].lon) * 2
        // countryPoint[i].y = Math.sin(countryPoint[i].lat) * 2
        // countryPoint[i].z = Math.cos(countryPoint[i].lat) * Math.sin(countryPoint[i].lon) * 2
    }

    useFrame(({ clock }) =>{
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 25;
        // earthRef.current.rotation.x = elapsedTime / 26;
        cloudeRef.current.rotation.y = elapsedTime / 27;
        // cloudeRef.current.rotation.x = elapsedTime / 23;
        thanksPlanet.current.rotation.y = -elapsedTime / 13;
        thanksPlanet.current.rotation.x = elapsedTime / 16;
        thanksPlanetCover.current.rotation.y = -elapsedTime / 13;
        thanksPlanetCover.current.rotation.x = elapsedTime / 16;

        projectPlanet.current.rotation.y = elapsedTime / 13;
        projectPlanet.current.rotation.x = -elapsedTime / 23;
        projectPlanetCover.current.rotation.y = elapsedTime / 13;
        projectPlanetCover.current.rotation.x = -elapsedTime / 23;
    });

    // let lat = 50.4501 * (Math.PI/180);
    // let lon = -30.5234 * (Math.PI/180);

    // let x = Math.cos(lat) * Math.cos(lon) * 2
    // let y = Math.sin(lat) * 2
    // let z = Math.cos(lat) * Math.sin(lon) * 2

    
    const infoShowingUp = (e) => {
        
        // console.log(props.countryInfo.current)
        props.countryInfo.current.style.display = 'flex';
        props.countryInfoName.current.innerHTML = `<div class="country-name-show-up">${e.object.userData.name}</div>`;
        // window.open(e.object.userData.url)
        // document.querySelector(".infoContainer").style.display = "flex";
        // document.querySelector(".infoTitle").innerText = "Region: " + e.target.current.userData.name;

        // document.querySelector('.infoTitle').innerHTML = `<div>${e.object.userData.name}</div>`;
        // document.querySelector('.infoTitle').innerHTML = `<Link to=${e.object.userData.url}>Link</Link>`;

        // console.log(e.object.userData.name)
    }

    const infoShowingDown = (e) => {
        props.countryInfo.current.style.display = 'none';
    }

    useEffect(() => {

        const tl = gsap.timeline();

        tl.to('.guide-container', {
            duration: 1,
            opacity: 1,
            ease: "power3.inOut",
        });

    }, [])

    return (
        <>
        <ambientLight intensitt={1}/>
        <Stars radius={300} dept={60} count={20000} factor={7} saturation={0} fade={true}/>
        {/* <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2}/> */}
        <mesh ref={cloudeRef} position={[0, 0, 0]}>
            <sphereGeometry args={[2.05, 32, 32]}/>
            <meshPhongMaterial map={cloudsMap} opacity={0.39} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
        <mesh ref={earthRef} position={[0, 0, 0]}>
            <sphereGeometry args={[2, 32, 32]}/>
            <meshPhongMaterial specularMap={specularMap}/>
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.39} roughness={0.7}/>
            <OrbitControls 
                enableZoom={true} 
                enablePan={true} 
                zoomSpeed={0.6}  
                panSpeed={0.5} 
                rotateSpeed={0.4}
                maxDistance={19}
                minDistance={3}
            />
            
            {countryPoint.map(countryPoint => ( 

                <mesh 
                    position={[countryPoint.x, countryPoint.y, countryPoint.z]}
                    rotation={[0.0, -countryPoint.lon, countryPoint.lat-Math.PI * 0.5]}
                    onClick={() => window.appHistory.push({ pathname: '/MemoryPhotoGallery', state: {countryPoint: countryPoint}})}
                    onPointerDown={() => window.appHistory.push({ pathname: '/MemoryPhotoGallery', state: {countryPoint: countryPoint}})}
                    userData= {{ name: countryPoint.name }}
                    onPointerOver={infoShowingUp}
                    onPointerOut={infoShowingDown}
                    key={countryPoint._id}
                >
                    <sphereGeometry args={[0.02, 32, 32]}/>
                    <meshBasicMaterial color={countryPoint.color}/>
                    {/* <meshStandardMaterial map={landscape} metalness={0.39} roughness={0.7}/> */}
                </mesh>
            ))}
        </mesh>
        <mesh position={[-9, 2, -6]}
            onClick={() => window.appHistory.push('/SSYProject')}
            onPointerDown={() => window.appHistory.push('/SSYProject')}
                    
            ref={projectPlanetCover}
        >
            {/* <sphereGeometry args={[1.05, 32, 32]}/> */}
            <icosahedronBufferGeometry args={[1.35, 1]}/>
            <meshPhongMaterial map={landscape} opacity={0.7} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
        <mesh position={[-9, 2, -6]}
            ref={projectPlanet}
            userData= {{ name: "Project" }}
            onPointerOver={infoShowingUp}
            onPointerOut={infoShowingDown}
        >
            {/* <sphereGeometry args={[1, 32, 32]}/> */}
            <icosahedronBufferGeometry args={[1.30, 1]}/>
            {/* <meshBasicMaterial color={0xff0000}/> */}
            <meshPhongMaterial color={0xffffff} opacity={1} side={THREE.DoubleSide}/>
        </mesh>
        <mesh position={[9, -3, -3]}
            // onClick={() => window.appHistory.push('/Thanks')} 
            onClick={() => window.appHistory.push('/warningscreen')}
            // onPointerDown={() => window.appHistory.push('/Thanks')} 
            ref={thanksPlanetCover}
        >
            <sphereGeometry args={[1.05, 32, 32]}/>
            <tetrahedronBufferGeometry args={[1.5, 3]}/>
            
            <meshPhongMaterial map={landscape2} opacity={0.7} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
        </mesh>
        
        <mesh position={[9, -3, -3]}
            ref={thanksPlanet}
            userData= {{ name: "Appreciate" }}
            onPointerOver={infoShowingUp}
            onPointerOut={infoShowingDown}
        >
            {/* <sphereGeometry args={[1, 32, 32]}/> */}
            <tetrahedronBufferGeometry args={[1.45, 3]}/>
            <meshPhongMaterial color={0x00000} opacity={1} side={THREE.DoubleSide}/>
        </mesh>
        </>
    )
}

export default Earth2Model
