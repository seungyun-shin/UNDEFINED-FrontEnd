const RechardVertex = `
varying vec2 vUv;
uniform float time;

void main(){
    vUv = uv;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
    gl_PointSize = 50. * (1. / - mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;

}`

export default RechardVertex;