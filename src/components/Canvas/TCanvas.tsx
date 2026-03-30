import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Effect } from "./Effect";
import { ImagePlane } from "./ImagePlane";

export interface CanvasProps {
  scroll?: boolean;
}

const TCanvas = ({ scroll = false }: CanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeEffect, setAtiveEffect] = useState<boolean>(false);

  const checkHeight = () => {
    const scrollY = window.pageYOffset;
    const refY = canvasRef.current?.offsetTop;

    if (
      refY &&
      scrollY > refY - window.innerHeight &&
      scrollY < refY + window.innerHeight
    ) {
      setAtiveEffect(true);
    } else {
      setAtiveEffect(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkHeight);
    return () => {
      window.removeEventListener("scroll", checkHeight);
    };
  }, []);

  useEffect(() => {
    checkHeight();
  }, []);

  return (
    <div ref={canvasRef}>
      <Canvas
        camera={{
          position: [0, 0, 1],
          fov: 50,
          aspect: window.innerWidth / window.innerHeight,
          near: 0.1,
          far: 2000,
        }}
        dpr={window.devicePixelRatio}>
        {/* object */}
        <Suspense fallback={null}>
          <ImagePlane imageUrl="https://cdn.pixabay.com/photo/2016/11/20/09/09/white-1842315_1280.jpg" />
        </Suspense>

        {/* effect */}
        {activeEffect && <Effect enabled={activeEffect} scroll={scroll} />}
      </Canvas>
    </div>
  );
};
export default TCanvas;
