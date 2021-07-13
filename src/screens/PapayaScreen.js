import React from 'react'

// component
import PapayaModel from '../components/ModelComponents/PapayaModel'

//R3F
import { Canvas, useFrame, extend  } from '@react-three/fiber'

// Deai - R3F
import { softShadows, MeshWobbleMaterial, MeshDistortMaterial, OrbitControls, shaderMaterial, perspectiveCamera } from "@react-three/drei";

function PapayaScreen() {
    return (
        <>  
                <PapayaModel/>
        </>
    )
}

export default PapayaScreen
