import { Suspense, useEffect, useMemo, useRef, VFC } from "react";
import { ShaderPass } from "three-stdlib";
import { useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { publicPath } from "../../../utils/file";
import { RippleRenderer } from "./ripple";
import { RippleScrollRenderer } from "./rippleScroll";

extend({ ShaderPass });

type RipplePassType = {
  enabled?: boolean;
  scroll?: boolean;
};

export const RipplePass: VFC<RipplePassType> = (props) => {
  const { enabled = true, scroll = false } = props;

  return (
    <Suspense fallback={null}>
      <Ripple enabled={enabled} scroll={scroll} />
    </Suspense>
  );
};

// ========================================================
type RippleType = {
  enabled?: boolean;
  scroll?: boolean;
};

const Ripple: VFC<RippleType> = (props) => {
  const { enabled = true, scroll = false } = props;

  const shaderRef = useRef<any>(null);

  const rippleTexture = useTexture(publicPath("/textures/brush.png"));
  const effect = useMemo(
    () => new RippleRenderer(rippleTexture),
    [rippleTexture],
  );
  const effectScroll = useMemo(
    () => new RippleScrollRenderer(rippleTexture),
    [rippleTexture],
  );

  const shader = useMemo(() => {
    return {
      uniforms: {
        tDiffuse: { value: null },
        u_displacement: { value: null },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    };
  }, []);

  useEffect(() => {
    return () => {
      if (scroll) {
        effectScroll.dispose();
      } else {
        effect.dispose();
      }
    };
  }, [effect]);

  useEffect(() => {
    if (!enabled) {
      if (scroll) {
        effectScroll.dispose();
        effectScroll.leavePos();
      } else {
        effect.dispose();
      }
    }
  }, [enabled]);

  useFrame(({ gl }) => {
    if (scroll) {
      effectScroll.update(gl, shaderRef.current!.uniforms.u_displacement);
    } else {
      effect.update(gl, shaderRef.current!.uniforms.u_displacement);
    }
  });

  return (
    <shaderPass
      ref={shaderRef}
      attachArray="passes"
      attach="map"
      args={[shader]}
      enabled={enabled}
    />
  );
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
uniform sampler2D tDiffuse;
uniform sampler2D u_displacement;
varying vec2 v_uv;

float PI = 3.141592653589;

void main() {
  vec2 uv = v_uv;

  vec4 disp = texture2D(u_displacement, uv);
  float theta = disp.r * 2.0 * PI;
  vec2 dir = vec2(sin(theta), cos(theta));
  uv += dir * disp.r * 0.1;

  vec4 color = texture2D(tDiffuse, uv);

  gl_FragColor = color;
  // gl_FragColor = texture2D(u_displacement, v_uv);
}
`;
