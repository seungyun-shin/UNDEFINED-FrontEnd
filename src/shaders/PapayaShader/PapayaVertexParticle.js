const PapayaVertexParticle = `

uniform float time;
varying vec2 vUv;
varying vec2 vUv1;
varying vec4 vPosition;

// uniform sample2D texture1;
// uniform sample2D texture2;
uniform vec2 pixels;
uniform vec2 uvRate1;

void main(){
    vUv = uv;

    vec3 p = position;

    p.y += 0.1 * (sin(p.y * 5. + time)*0.5 + 0.5);
    p.z += 0.05 * (sin(p.y * 10. + time)*0.5 + 0.5);
     
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.);
    gl_PointSize = 10. * (1. / - mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
`
export default PapayaVertexParticle;