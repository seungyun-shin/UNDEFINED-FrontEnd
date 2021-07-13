const IcoshadrenPixelVertex = `

    varying highp vec2 vUv;
    
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`
export default IcoshadrenPixelVertex;