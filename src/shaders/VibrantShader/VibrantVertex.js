const BoilerVertexJS = `

uniform float time;

// uniform sample2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec4 vPosition;
varying vec3 vColor;

varying vec3 vNormal;

void main(){
    vUv = uv;
    vNormal = normal;
    // vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
    // gl_PointSize = 50. * (1. / - mvPosition.z);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);

}`

export default BoilerVertexJS;