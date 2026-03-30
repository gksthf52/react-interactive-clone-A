// eslint-disable-next-line

import css from "./Font.module.scss";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import FullText from "../FullText/FullText";
import VCanvas from "../Canvas/VCanvas";

const cx = classNames.bind(css);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScrollImage = () => {
  useGSAP(() => {
    let fonts = gsap.utils.toArray<HTMLElement>(".font_list");
    let fontItem = gsap.utils.toArray<HTMLElement>(".font_item");

    fonts.forEach((fontList) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: fontList,
          start: "60% bottom",
          end: "50% top",
          scrub: 2,
        },
      });

      tl.to(fontList, {
        fontWeight: 100,
        fontVariationSettings: `"wght" 100`,
        letterSpacing: 1,
        duration: 1,
      });

      tl.to(fontItem, {
        webkitTextStroke: "2px #ddd",
        color: "transparent",
        duration: 0.5,
        delay: -0.2,
      });
    });

    // 이미지 퍼지는 효과
    const imageTrigger = {
      trigger: ".img3",
      start: "-15% bottom",
      end: "center 50%",
      scrub: 1,
    };

    gsap.from(".img1", {
      y: "10vh",
      scrollTrigger: imageTrigger,
    });

    gsap.from(".img2", {
      x: "23vh",
      y: "-25vh",
      scrollTrigger: imageTrigger,
    });

    gsap.from(".img4", {
      x: "-18vh",
      y: "-15vh",
      scrollTrigger: imageTrigger,
    });

    gsap.from(".img5", {
      x: "20vw",
      y: "-50vh",
      scrollTrigger: imageTrigger,
    });

    gsap.from(".img6", {
      x: "-20vh",
      y: "-60vh",
      scrollTrigger: imageTrigger,
    });

    const imageGroupTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img3",
        start: "center center",
        end: `+=${window.innerHeight * 1.46}`,
        scrub: true,
        pin: ".image_inner",
      },
    });
    imageGroupTl.to(".image_inner", {
      scale: 3.2,
      // ScrollTrigger: imageTriggerTop,
    });

    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".img3",
        start: "center center",
        end: `+=${window.innerHeight * 1.46 + window.innerHeight * 1.46}`,
        scrub: true,
        pin: ".img3",
      },
    });
    imageTl.to(".video-wrap", {
      x: `-${window.innerWidth / 2 - window.innerHeight * 0.39}`,
      y: `-${window.innerHeight / 2 - window.innerHeight * 0.2}`,
      width: "100vw",
      height: "100vh",
    });
    imageTl.to(".last-sec", {
      y: "0",
    });
  });

  return (
    <div style={{ position: "relative" }}>
      <div className={cx("font_wrap")}>
        <div className={cx("font_list")}>
          <span className={cx("font_item")}>E</span>
          <span className={cx("font_item")}>X</span>
          <span className={cx("font_item")}>H</span>
          <span className={cx("font_item")}>I</span>
        </div>
        <div className={cx("font_list")}>
          <span className={cx("font_item")}>B</span>
          <span className={cx("font_item")}>I</span>
          <span className={cx("font_item")}>T</span>
          <span className={cx("font_item")}>I</span>
          <span className={cx("font_item")}>O</span>
          <span className={cx("font_item")}>N</span>
        </div>
      </div>
      <div className={cx("image_container")}>
        <div className={cx("image_inner")}>
          <div className={cx("img_row")}>
            <div className={cx("img-content", "img1")}>
              <img
                src="https://www.scalvinimarmi.it/site/assets/files/1047/progetto-scalvini_0000s_0000_bo3b8328-copy.1024x0.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={cx("img_row")}>
            <div className={cx("img-content", "img2")}>
              <img
                src="https://www.scalvinimarmi.it/site/assets/files/1047/mg_5537_copia.640x0.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className={cx("img-content", "img4")}>
              <img
                src="https://www.scalvinimarmi.it/site/assets/files/1047/4.528x0.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={cx("img_row")}>
            <div className={cx("img-content", "img5")}>
              <img
                src="https://www.scalvinimarmi.it/site/assets/files/1047/5.594x0.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className={cx("img-content", "img6")}>
              <img
                src="https://www.scalvinimarmi.it/site/assets/files/1047/dsc02199.1024x0.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className={cx("img-content", "img3")}>
          <div className={cx("video-wrap")}>
            {/* <VCanvas scroll={true} /> */}
            <video
              height="900"
              width="1600"
              autoPlay
              playsInline
              loop
              muted
              src="https://www.scalvinimarmi.it/site/assets/files/1047/loop_hd.mp4"></video>
          </div>
        </div>
      </div>

      <div className={cx("last-sec")}>
        <FullText />
      </div>
    </div>
  );
};

export default HeroScrollImage;
