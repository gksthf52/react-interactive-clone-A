import "./App.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import lenis from "./utils/lenis";

import HomeHero from "./components/HomeHero/HomeHero";
import Font from "./components/Font/Font";
import FullText from "./components/FullText/FullText";
import Mask from "./components/Mask/Mask";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useEffect(() => {
    lenis();
  }, []);

  useGSAP(() => {
    // bg anim
    gsap.to(".container", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: ".black-trigger",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
    });
  });

  // ================= cursor event ================= //
  const cursorRef = useRef<HTMLDivElement>(null);
  let xTo: any, yTo: any;

  const onMouseMove = ({ clientX, clientY }: any) => {
    xTo(clientX);
    yTo(clientY);
  };

  const { contextSafe } = useGSAP(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });
    xTo = gsap.quickTo(cursorRef.current, "x", { ease: "power3" });
    yTo = gsap.quickTo(cursorRef.current, "y", { ease: "power3" });
  });

  const handleShowCursor = contextSafe(({ clientX, clientY }: any) => {
    gsap.to(cursorRef.current, { scale: 1, overwrite: "auto", duration: 0.3 });
    gsap.set(cursorRef.current, { x: clientX, y: clientY });
    document.addEventListener("mousemove", onMouseMove);
  });

  const handleHideCursor = contextSafe(() => {
    gsap.to(cursorRef.current, { scale: 0, overwrite: "auto", duration: 0.3 });
    document.removeEventListener("mousemove", onMouseMove);
  });

  return (
    <div className="container">
      <HomeHero />
      <div className="black-trigger"></div>
      <div
        className="sec-mask"
        onMouseEnter={handleShowCursor}
        onMouseLeave={handleHideCursor}
      >
        <Mask />
      </div>
      <Font />

      {/* cursor */}
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
}

export default App;
