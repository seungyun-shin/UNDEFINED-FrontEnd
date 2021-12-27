import React, { useRef, useMemo, useCallback, useEffect } from 'react'
import * as THREE from "three";

// reset Styles
import "../../App.scss"

//R3F
import { Canvas, useFrame, extend, render  } from '@react-three/fiber'
let OrbitControls = require("three-orbit-controls")(THREE);

// CREATE raycaster for mouse interaction
const raycaster = new THREE.Raycaster();

function EarthModel() {

    
    const earthContainer = useRef();

    
    // CREATE vector2 for mouse and mobile x,y coordinates
    const mouse = new THREE.Vector2();
    const touch = new THREE.Vector2();

    // DATA IMPORT
    let data = [];
    let xhttp = new XMLHttpRequest();

    useEffect(() => {

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(xhttp.responseText);
                let output = Object.values(response);
                for (let i = 0; i < output.length; i++) {
                    data.push(output[i]);
                }
            }
        };
        xhttp.open("GET", '../countrydata.json', true);
        xhttp.send();
        console.log(data);

        
        // CREATE scene where objects will be placed (kind of like a stage)
        const scene = new THREE.Scene();

        // CREATE camera to see objects (kind of like sitting in the audience)
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

        // CREATE renderer to display the created objects (kind of like the people who place the diferent sets on the stage)
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        earthContainer.current.appendChild( renderer.domElement );

        // CREATE controls so that we can interact with the objects/have interactivity
        const controls = new OrbitControls(camera, renderer.domElement);
        //desable control function 
        controls.minDistance = 12;
        controls.maxDistance = 30;
        controls.enablePan = false;
        controls.update();
        // controls.saveState();

        //CREATE earth
        let earthMap = new THREE.TextureLoader().load('../images/earthmap4k.jpg');
        //earthbumpmap is used to give the texture some "depth" so it is more appealingon eyes and data visuals
        let earthBumpMap = new THREE.TextureLoader().load('../images/earthbump4k.jpg');
        //earthspecmap gives the earth some shininess to the environment, allowing reflextivity of the lights
        let earthSpecMap = new THREE.TextureLoader().load('../images/earthspec4k.jpg');
        //earth is what shpae size of the globe will be
        let earthGeometry = new THREE.SphereGeometry(10, 32, 32)
        //material is how the globe will look like
        let earthMaterial = new THREE.MeshPhongMaterial({
            map: earthMap,
            bumpMap: earthBumpMap,
            bumScale: 0.10,
            specularMap: earthSpecMap,
            specular: new THREE.Color('grey')
        });
        //earth 
        let earth = new THREE.Mesh(earthGeometry, earthMaterial);

        //add the earth to scene
        scene.add(earth);

        //add clouds to the earth object
        let earthCloudGeo = new THREE.SphereGeometry(10, 32, 32);

        //add cloud texture
        let earthCloudsTexture = new THREE.TextureLoader().load('../images/earthhiresclouds4K.jpg');

        //add cloude material
        let earthMaterialClous = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            map: earthCloudsTexture,
            transparent:true,
            opacity:0.39
        });

        //create final texture for clouds
        let earthClouds = new THREE.Mesh(earthCloudGeo, earthMaterialClous);

        //scale above the earth sphere mesh
        earthClouds.scale.set( 1.015, 1.015, 1.015);

        earth.add(earthClouds)


        ///////////////////////////////////////////////////////////////////////////////

        let pointMesh = new THREE.Mesh(
            new THREE.SphereBufferGeometry(0.1, 10, 10),
            new THREE.MeshBasicMaterial({color:0xff0000})
        )
        let point1={
            lat: 50.4501,
            lng: 30.5234
        }

        let point2 = {
            lat: 50.4501,
            lng: 30.5234
        }

        // let lat = (90 - 50.4501) * Math.PI/180;
        // let lng = (180 + 30.5234) * Math.PI/180;

        let lat = 50.4501 * (Math.PI/180);
        let lon = -30.5234 * (Math.PI/180);

        let x = Math.cos(lat) * Math.cos(lon) * 10
        let y = Math.sin(lat) * 10
        let z = Math.cos(lat) * Math.sin(lon) * 10

        pointMesh.position.set(x,y,z)

        pointMesh.rotation.set(0.0, -lon, lat-Math.PI*0.5);

        scene.add(pointMesh)

        ///////////////////////////////////////////////////////////////////////////////

        let lights = [];

        //createSkyBox allows the scene to have more attractiveness to it, having blue starred images around
        function createSkyBox(scene){
            const cubeloader = new THREE.CubeTextureLoader();
            const cubetexture = cubeloader.load([
                '../images/space_right.png',
                '../images/space_left.png',
                '../images/space_top.png',
                '../images/space_bot.png',
                '../images/space_front.png',
                '../images/space_back.png',
            ])

            scene.background = cubetexture;
        };

        //createLights is a function which creates
        function createLights(scene){
            lights[0] = new THREE.PointLight("#004d99", .5, 0);
            lights[1] = new THREE.PointLight("#004d99", .5, 0);
            lights[2] = new THREE.PointLight("#004d99", .7, 0);
            lights[3] = new THREE.AmbientLight("#ffffff");

            lights[0].position.set(200, 0, -400);
            lights[1].position.set(200, 200, 400);
            lights[2].position.set(-200, -200, -50);

            scene.add(lights[0]);
            scene.add(lights[1]);
            scene.add(lights[2]);
            scene.add(lights[3]);
        }

        function addSceneObjects(scene){
            createLights(scene);
            createSkyBox(scene);
        }

        //addSceneObjects adds tjhe items to the scene
        addSceneObjects(scene);

        //change position so we can see the objects
        camera.position.z = 20;

        //Add event listener so dom knows what fiunctions to use when  object are interacted with
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('click', onWindowClick, false);
        // window.addEventListener('touchstart', onTouch, false);

        // Used for showing/hiding the instruction box
        let hidden = false;
        function hideInstructions(){
            hidden = !hidden;
            if(hidden){
                document.querySelector("#instruction-box").style.display = "none";
            } else {
                document.querySelector("#instruction-box").style.display = "flex";
            }
        };

        let instructionClicker = document.getElementById("instructions");
        instructionClicker.addEventListener("click", hideInstructions, false);

        // Create and add coordinates for the globe
        function addCountryCoord(earth, country, language, latitude, longitude, color, region, population, area_sq_mi, gdp_per_capita, climate){
            let pointOfInterest = new THREE.OctahedronGeometry(0.1, 0);
            let lat = latitude * (Math.PI/180);
            let lon = -longitude * (Math.PI/180);
            const radius = 10;
            const phi = (90-lat)*(Math.PI/180);
            const theta = (lon+180)*(Math.PI/180);

            let material = new THREE.MeshBasicMaterial({
                color:color
                // color:"rgb(179, 177, 178)"
            });

            let mesh = new THREE.Mesh(
                pointOfInterest,
                material
            );

            mesh.position.set(
                Math.cos(lat) * Math.cos(lon) * radius,
                Math.sin(lat) * radius,
                Math.cos(lat) * Math.sin(lon) * radius
            );

            mesh.rotation.set(0.0, -lon, lat-Math.PI*0.5);

            mesh.userData.country = country;
            mesh.userData.language = language;
            mesh.userData.color = color;
            mesh.userData.region = region;
            mesh.userData.population = population;
            mesh.userData.area_sq_mi = area_sq_mi;
            mesh.userData.gdp_per_capita = gdp_per_capita;
            mesh.userData.climate = climate;
            
            earthClouds.add(mesh)

        };

        // Variables to get information and change accordingly
        let countryInfo = document.getElementById("country");
        countryInfo.addEventListener("click", changeToCountry);

        // Changes the information so data points can be seen
        function changeToCountry() {
            // Show/hide needed and unneeded elements
            document.querySelector("#instruction-box").style.display = "none";
            document.getElementById("title-box").style.display = "none";
            document.getElementById("info-box").style.display = "flex";

            removeChildren();

            // Get the data from the JSON file
            for (let i = 0; i < data.length; i++){
                if(data[i].Region == 'ASIA (EX. NEAR EAST)'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'yellow', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'NEAR EAST'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'orange', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'NORTHERN AMERICA'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'lightblue', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'WESTERN EUROPE'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'cyan', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'EASTERN EUROPE'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'red', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'BALTICS'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'purple', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'C.W. OF IND. STATES'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'orange', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'NORTHERN AFRICA'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'beige', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'SUB-SAHARN AFRICA'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'brown', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'LATIN AMER. & CARIB'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'gold', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                } else if(data[i].Region == 'OCEANIA'){
                    addCountryCoord(earth, data[i].Country, data[i].Languages, data[i].latitude, data[i].longitude, 'lightgreen', data[i].Region, data[i].Population, data[i].Area_sq_mi, data[i].GPD_per_capita, data[i].Climate);
                }
            }
        };




        function onWindowResize(){
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            // controls.update();
        }

        // Listens for the mouse to intersect object and when clicked returns the data to the inner html
        function onWindowClick(event) {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);

            let intersects = raycaster.intersectObjects(earthClouds.children);

            for (let i = 0; i < intersects.length; i++){
                document.querySelector("#region").innerText = "Region: " + intersects[0].object.userData.region;
                document.getElementById("region").style.color = intersects[0].object.userData.color;
                document.querySelector("#country-info").innerText = "Country: " + intersects[0].object.userData.country;
                document.querySelector("#language").innerText = "Language: " + intersects[0].object.userData.language;
                document.querySelector("#population").innerText = "Population: " + intersects[0].object.userData.population;
                document.querySelector("#area-sq-mi").innerText = "Area(mile^2): " + intersects[0].object.userData.area_sq_mi;
                document.querySelector("#gdp-per-capita").innerText = "GDP Per-Capita: " + intersects[0].object.userData.gdp_per_capita;
                document.querySelector("#climate").innerText = "Climate: " + intersects[0].object.userData.climate;
            }
            // const item = intersects[0];
            // let camDistance
            // if(item){
            //     let point = item.point;
            //     camDistance = camera.position.copy(point).normalize.multiplyScalar(camDistance);
            // }
};


        function animate() {
            requestAnimationFrame(animate);
            render();
            controls.update();
        }

        function render(){
            renderer.render( scene, camera );
        }

        // Removes the points of interest freeing up memory and space to have better performance
        function removeChildren(){
            let destroy = earthClouds.children.length;
            while(destroy--) {
                earthClouds.remove(earthClouds.children[destroy].material.dispose())
                earthClouds.remove(earthClouds.children[destroy].geometry.dispose())
                earthClouds.remove(earthClouds.children[destroy])
            }
        };

        animate();
        changeToCountry();


        }, []);


    return (
        <>
            <div id="earth-model-container"  ref={earthContainer} ></div>
            
            <div id="title-box">
                <div id="title">
                    Our Beautiful Earth
                </div>
                <div id="subtitle">
                    By DAVID GRICE
                </div>
		    </div>

            <div id="instruction-box">

                <div id="instruction-title">
                    INSTRUCTIONS
                </div>

                <div id="instruction-body">

                    <h1>
                        Click and drag your mouse around to see the full globe
                        <br/>
                        Click on the points of interest to display their information
                        <br/>
                        Zoom in and out using your mouse scroll wheel
                        <br/>
                        Have fun exploring the world!
                    </h1>
                    
                </div>

		    </div>

            <div id="display-box">

			<div id="display-box-title">
				Choose an option below!
			</div>

			<button id="country">
				Click here for countries!
			</button>

			<button id="instructions">
				Click here for instructions!
			</button>

		</div>

		<div id="info-box">

			<div id="info-title">
				Information
			</div>

			<div id="region">
				Region: 
			</div>

			<div id="country-info">
				Country: 
			</div>

			<div id="language">
				Language: 
			</div>

			<div id="population">
				Population: 
			</div>

			<div id="area-sq-mi">
				Area(mile^2): 
			</div>

			<div id="gdp-per-capita">
				 GDP Per-Capita: 
			</div>

			<div id="climate">
				 Climate: 
			</div>

		</div>

        </>
    )
}

export default EarthModel
