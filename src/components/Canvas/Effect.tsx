import { useEffect, useRef } from "react";
import { EffectComposer, ShaderPass, RenderPass } from "three-stdlib";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { RipplePass } from "./postprocessing/RipplePass";

extend({ EffectComposer, RenderPass, ShaderPass });

export interface EffectProps {
  enabled?: boolean;
  scroll?: boolean;
}

export const Effect = ({ enabled = false, scroll = false }: EffectProps) => {
  const composerRef = useRef<any>(null);
  const { gl, scene, camera, size } = useThree();

  useEffect(() => {
    composerRef.current!.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    composerRef.current!.render();
  }, 1);

  return (
    <effectComposer ref={composerRef} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      {enabled && <RipplePass enabled={enabled} scroll={scroll} />}
    </effectComposer>
  );
};
