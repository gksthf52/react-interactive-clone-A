import css from "./FullText.module.scss";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(css);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const FullText = () => {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [frame, setFrame] = useState(0);

  const frameCount = 131;
  const img = new Image();
  const currentFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/${index
      .toString()
      .padStart(4, "0")}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const updateImage = (index) => {
    img.src = currentFrame(index);
    img.onload = function () {
      contextRef.current.drawImage(img, 0, 0);
    };
  };

  const moveEvent = () => {
    document.addEventListener("mousemove", (e) => {
      const width = window.innerWidth;
      let x = e.clientX;
      let NewValue = ((x - 0) * (147 - 1)) / (width - 0) + 1;

      setFrame(Math.floor(NewValue));
    });
  };

  useEffect(() => {
    updateImage(frame);
  }, [frame]);

  useEffect(() => {
    if (!canvasRef.current) return;

    preloadImages();

    const context = canvasRef.current?.getContext("2d");
    img.src = currentFrame(1);
    img.onload = function () {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      context.drawImage(img, 0, 0);

      contextRef.current = context;
    };

    moveEvent();
  }, []);

  return (
    <div className={cx("full_wrap")}>
      <canvas className={cx("full_item")} ref={canvasRef} />
    </div>
  );
};

export default FullText;
