import { useState, useRef, useEffect } from "react";
import css from "./HomeHero.module.scss";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroScrollImage from "./HeroScrollImage/HeroScrollImage";
import TitleList from "../TitleList/TitleList";
import TCanvas from "../Canvas/TCanvas";

const cx = classNames.bind(css);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomeHero = () => {
  const [blended, setBlended] = useState<boolean>(false);
  const [black, setBlack] = useState<boolean>(false);

  useGSAP(() => {
    // center icon pin
    ScrollTrigger.create({
      trigger: ".top-sec",
      pin: ".center_icon",
      start: "top center",
      end: "bottom center",
    });

    // center icon anim
    gsap.to(".center_icon", {
      marginTop: 165,
      scale: 1,
      scrollTrigger: {
        trigger: ".bottom-sec",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // icon color anim
    ScrollTrigger.create({
      trigger: ".middle-sec",
      start: "top center",
      onEnter: () => {
        setBlended(true);
      },
      onLeaveBack: () => {
        setBlended(false);
      },
    });

    ScrollTrigger.create({
      trigger: ".title-sec",
      start: "top center",
      onEnter: () => {
        setBlack(true);
        setBlended(false);
      },
      onLeaveBack: () => {
        setBlack(false);
        setBlended(true);
      },
    });
  });

  window.onload = function () {
    gsap.to(".blur_box", {
      opacity: 0,
    });
  };

  // 캔버스 이미지 영역
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const canvasImg = new Image();

    canvasImg.crossOrigin = "Anonymous";
    canvasImg.src = "../images/img-middle.png";

    canvasImg.onload = () => {
      const ImgW = canvasImg.width;
      const imgH = canvasImg.height;

      if (canvas && context) {
        canvas.width = ImgW;
        canvas.height = imgH;

        // canvas에서 이미지 그리기
        context.drawImage(canvasImg, 0, 0, ImgW, imgH);
      }
    };
  }, []);

  return (
    <div className={cx("hero")}>
      {/* <div className={cx("blur_box")}></div> */}
      <div className={cx("top-sec", blended && "is-blended")}>
        <div className={cx("center_icon", black && "is-black")}>&</div>
        {/* 상단 이미지 영역 */}
        <div className={cx("image-sec")}>
          <HeroScrollImage />
        </div>

        {/* 중간 이미지 영역 */}
        <div className={cx("middle-sec")}>
          <div className={cx("canvas-image")}>
            <TCanvas scroll={true} />
          </div>
        </div>

        {/* 타이틀 리스트 영역 */}
        <div className={cx("title-sec")} style={{ paddingTop: "150px" }}>
          <TitleList />
        </div>
      </div>

      <div className={cx("bottom-sec")}>
        <div className={cx("bottom_cont")}>
          <div className={cx("bottom_item", "bottom_item_left")}>HNINE</div>
          <div className={cx("bottom_item", "bottom_item_right")}>Publish</div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
