const PapayaFragmentParticle = `

uniform float time;
varying vec2 vUv;
varying vec2 vUv1;
varying vec4 vPosition;      

// uniform sample2D texture1;
// uniform sample2D texture2;
uniform vec4 resolution;

void main(){
    gl_FragColor = vec4(0.826, 0.999, 0.999, 0.4);
}
`
export default PapayaFragmentParticle;