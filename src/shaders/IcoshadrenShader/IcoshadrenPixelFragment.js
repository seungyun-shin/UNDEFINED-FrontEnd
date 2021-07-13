const IcoshadrenPixelFragment = `
    
    uniform sampler2D tDiffuse;
    uniform float pixelSize;
    uniform vec2 resolution;
    varying highp vec2 vUv;
    
    void main(){
        vec2 dxy = pixelSize / resolution;
        vec2 coord = dxy * floor( vUv / dxy );
        gl_FragColor = texture2D(tDiffuse, coord);
    }
`
export default IcoshadrenPixelFragment;