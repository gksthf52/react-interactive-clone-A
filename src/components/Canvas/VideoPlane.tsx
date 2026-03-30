import { Suspense } from "react";
import { useAspect, useTexture } from "@react-three/drei";

export interface PlaneProps {
  url: string;
}

export const VideoPlane = ({ url = "" }: PlaneProps) => {
  const size = useAspect(1800, 1000);
  const texture = useTexture(url);

  if (!texture) {
    return null;
  }

  return (
    <mesh scale={size}>
      <planeGeometry args={[1, 1]} />
      <Suspense fallback={null}>
        <meshBasicMaterial map={texture} toneMapped={false} />
      </Suspense>
    </mesh>
  );
};
