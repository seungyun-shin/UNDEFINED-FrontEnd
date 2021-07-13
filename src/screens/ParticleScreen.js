import React, { Component } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

// Style Components
import { Container } from "../styles/jsStyles/homeStyle"

// component
import ParticleMainModel from '../components/ModelComponents/ParticleMainModel'

function ParticleScreen() {
    return (
        <>
            <ParticleMainModel/>
        </>
    )
}


export default ParticleScreen
