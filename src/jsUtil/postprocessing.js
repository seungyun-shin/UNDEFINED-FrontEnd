
/**
 * Pixelation shader
 */
const PostProcessing = {

    uniforms: {
        'tDiffuse': {
            value: null
        },
        'resolution': {
            value: null
        },
        'pixelSize': {
            value: 1
        },
        'time': {
            value: 0
        },
        'howmuchrgbshifticanhaz': {
            value: 0
        }
    },
    vertexShader:
    /* glsl */  
    `
        varying highp vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
    fragmentShader:
    /* glsl */
    `
        uniform sampler2D tDiffuse;
        uniform float pixelSize;
        uniform vec2 resolution;
        uniform float time;
        uniform float howmuchrgbshifticanhaz;

        varying highp vec2 vUv;
        float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }

        void main(){

            vec2 shift = vec2(0.01, 0.01) * howmuchrgbshifticanhaz * 2.;

            // make bw
            vec4 t = texture2D(tDiffuse, vUv);
            vec4 t1 = texture2D(tDiffuse, vUv + shift);
            vec4 t2 = texture2D(tDiffuse, vUv - shift);
            // vec3 color = vec3((t.r + t.b + t.g)/3.); // last number can make darker
            // vec3 color1 = vec3((t1.r + t1.b + t1.g)/3.);
            // vec3 color2 = vec3((t2.r + t2.b + t2.g)/3.);
            
            // vec3 color = vec3((t.rbg)/1.6); // last number can make darker
            // vec3 color1 = vec3((t1.rbg)/1.6);
            // vec3 color2 = vec3((t2.rbg)/1.6);

            vec3 color = vec3((t.rbg)); // last number can make darker
            vec3 color1 = vec3((t1.rbg));
            vec3 color2 = vec3((t2.rbg));

            color = vec3(color1.r, color.b, color2.g);

            //rgb shift


            // noise
            float val = hash(vUv + time)*0.1;

            vec2 dxy = pixelSize / resolution;
            vec2 coord = dxy * floor( vUv / dxy );
            gl_FragColor = texture2D(tDiffuse, vUv);

            // gl_FragColor = vec4(val);

            // make black and white
            // gl_FragColor = vec4(color, 1.);

            gl_FragColor = vec4(color*howmuchrgbshifticanhaz, 1.);
            // gl_FragColor = vec4(color*howmuchrgbshifticanhaz, 0.5);

            gl_FragColor = vec4(color + vec3(val), 1.);
    }`
};

export default PostProcessing;