import * as THREE from "three";
import { Plane, useTexture } from "@react-three/drei";
import { publicPath } from "../../utils/file";

export interface PlaneProps {
  imageUrl: string;
}

export const ImagePlane = ({ imageUrl = "" }: PlaneProps) => {
  const texture = useTexture(publicPath(imageUrl));

  const material = (texture: THREE.Texture) =>
    new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: texture },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });

  return <Plane material={material(texture)} scale={2} />;
};

// --------------------------------------------------------
const vertexShader = `
varying vec2 v_uv;

void main() {
  v_uv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const fragmentShader = `
uniform sampler2D u_texture;
varying vec2 v_uv;

void main() {
  vec4 color = texture2D(u_texture, v_uv);
  gl_FragColor = color;
}
`;
