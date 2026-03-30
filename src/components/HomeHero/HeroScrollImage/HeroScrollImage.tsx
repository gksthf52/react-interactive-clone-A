import css from "./HeroScrollImage.module.scss";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const cx = classNames.bind(css);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScrollImage = () => {
  useGSAP(() => {
    let triggers = gsap.utils.toArray<HTMLElement>(".hero_trigger");
    let panels = gsap.utils.toArray<HTMLElement>(".panel");
    let items = gsap.utils.toArray<HTMLElement>(".title-item");
    let textsItems = gsap.utils.toArray<HTMLElement>(".text-list-item");

    triggers.forEach((triger, i) => {
      const heroBgTrigger = {
        trigger: triger,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        snap: {
          snapTo: 1,
          duration: 0.6,
          delay: 0.1,
        },
      };

      // ================= HERO BG 영역 ================= //
      gsap.to(panels[i], { y: 0, scrollTrigger: heroBgTrigger });
      gsap.to(panels[i].children, { y: 0, scrollTrigger: heroBgTrigger });
    });

    triggers.forEach((trigger, i) => {
      const triggerItem = {
        trigger: trigger,
        start: "0% top",
        end: "100% top",
        scrub: 0.5,
      };

      // ================= HERO 상단 타이틀 영역 ================= //
      gsap.fromTo(
        items[i],
        {
          y: "0%",
          transformOrigin: "0 100%",
        },
        {
          y: "-115%",
          scrollTrigger: triggerItem,
        }
      );

      gsap.fromTo(
        items[i + 1],
        {
          scale: 0,
          transformOrigin: "0 100%",
        },
        {
          scale: 1,
          scrollTrigger: triggerItem,
        }
      );

      // ================= HERO 하단 텍스트 영역 ================= //
      gsap.to(textsItems[i], {
        fontSize: "0",
        scrollTrigger: triggerItem,
      });
    });
  });

  return (
    <div className={cx("hero_wrap")}>
      {/* 트리거 영역 */}
      <div className={cx("hero_trigger_wrap")}>
        <div className={cx("hero_trigger")}></div>
        <div className={cx("hero_trigger")}></div>
        <div className={cx("hero_trigger")}></div>
        <div className={cx("hero_trigger")}></div>
        <div className={cx("hero_trigger")}></div>
        <div className={cx("hero_trigger")}></div>
      </div>

      <div className={cx("hero_cont")}>
        <div className={cx("hero_cont_inner")}>
          {/* bg 영역 */}
          <div className={cx("hero_bg")}>
            <section className={cx("panel")}>
              <div className={cx("figure")}>
                <video
                  height="900"
                  width="1600"
                  autoPlay
                  playsInline
                  loop
                  muted
                  src="https://player.vimeo.com/progressive_redirect/playback/879543776/rendition/1080p/file.mp4?loc=external&signature=d4f46363051ccef469af077cd4c2fc14d337e4e925f28030c80e02922e0d78eb"></video>
              </div>
            </section>
            <section className={cx("panel")}>
              <div className={cx("figure")}>
                <video
                  height="900"
                  width="1600"
                  autoPlay
                  playsInline
                  loop
                  muted
                  src="https://player.vimeo.com/progressive_redirect/playback/879938356/rendition/1080p/file.mp4?loc=external&amp;signature=6d80f8362f86b78e227f66f77fc8163a6037a1ebc54c2a9ce9732224b101d6cc"></video>
              </div>
            </section>
            <section className={cx("panel")}>
              <div className={cx("figure")}>
                <video
                  height="900"
                  width="1600"
                  autoPlay
                  playsInline
                  loop
                  muted
                  src="https://player.vimeo.com/progressive_redirect/playback/879436609/rendition/720p/file.mp4?loc=external&signature=cd6297404ad1dc6cab9c364310d30228648012c1d8935fc3834ab50e85886bc6"></video>
              </div>
            </section>
            <section className={cx("panel")}>
              <div className={cx("figure")}>
                <video
                  height="900"
                  width="1600"
                  autoPlay
                  playsInline
                  loop
                  muted
                  src="https://player.vimeo.com/progressive_redirect/playback/879556344/rendition/1080p/file.mp4?loc=external&signature=040a91bad928453c9b9742db952b45db38b45eabbb29353119c4ff7438bc4f8e"></video>
              </div>
            </section>
            <section className={cx("panel")}>
              <div className={cx("figure")}>
                <video
                  height="900"
                  width="1600"
                  autoPlay
                  playsInline
                  loop
                  muted
                  src="https://player.vimeo.com/progressive_redirect/playback/879552790/rendition/1080p/file.mp4?loc=external&signature=bdcd1d12d189ee7f644bfa209a8596f127e71ccdaacf60086e5bad57b5943c6f"></video>
              </div>
            </section>
            <section className={cx("panel")}>
              <div className={cx("figure")}>
                <video
                  height="900"
                  width="1600"
                  autoPlay
                  playsInline
                  loop
                  muted
                  src="https://player.vimeo.com/progressive_redirect/playback/904622613/rendition/1080p/file.mp4?loc=external&signature=e927d40e08261e7dd445c13af55616d961db5227e2e5cbdd17b586bcdd5d25bf"></video>
              </div>
            </section>
          </div>

          <div className={cx("hero_text")}>
            {/* 상단 타이틀 영역 */}
            <div className={cx("title")}>
              <div className={cx("title-container")}>
                <div className={cx("title-wrapper")}>
                  <div className={cx("title-item")}>
                    <div className={cx("title-text")}>ADIDAS</div>
                  </div>
                  <div className={cx("title-item")}>
                    <div className={cx("title-text")}>CALVIN KLEIN</div>
                  </div>
                  <div className={cx("title-item")}>
                    <div className={cx("title-text")}>HOURGLASS</div>
                  </div>
                  <div className={cx("title-item")}>
                    <div className={cx("title-text")}>EILISH</div>
                  </div>
                  <div className={cx("title-item")}>
                    <div className={cx("title-text")}>THE OUTSET</div>
                  </div>
                  <div className={cx("title-item")}>
                    <div className={cx("title-text")}>MAC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 하단 텍스트 영역 */}
            <div className={cx("text")}>
              <div className={cx("text-list")}>
                <div className={cx("text-list-item")}>CALVIN KLEIN</div>
                <div className={cx("text-list-item")}>HOURGLASS</div>
                <div className={cx("text-list-item")}>EILISH</div>
                <div className={cx("text-list-item")}>THE OUTSET</div>
                <div className={cx("text-list-item")}>MAC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScrollImage;
