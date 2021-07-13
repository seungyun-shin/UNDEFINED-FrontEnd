const DigitalSquaresFragment = `
    
    uniform float time;
    uniform sampler2D texture1; 
    uniform vec4 resolution;

    varying vec2 vUv;
    varying vec4 vPosition;

    varying float vDist;

    void main(){

        vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

        gl_FragColor = vec4(1.0, 1.0, 1.0, 0.9*vDist);
    }
`
export default DigitalSquaresFragment;