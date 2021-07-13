const DigitalScreenFragment = `
    
    uniform float time;
    uniform sampler2D texture1; 
    uniform vec4 resolution;

    varying vec2 vUv;
    varying vec4 vPosition;

    void main(){

        vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);

        vec4 image = texture2D(texture1,newUV);
        // vec4 image = texture(texture1,newUV);
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        gl_FragColor = image;
    }
`
export default DigitalScreenFragment;