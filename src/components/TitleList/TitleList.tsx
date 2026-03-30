import classNames from "classnames/bind";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "./TitleList.module.scss";

const cx = classNames.bind(style);

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Page() {
  useGSAP(() => {
    // title list anim
    const leftItems = document.querySelectorAll(".item.left");
    leftItems.forEach((item) => {
      const frameTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "bottom 83%",
          end: "top 30%",
          scrub: true,
        },
      });
      frameTl.from(item, {
        x: 0,
      });
      frameTl.to(item, {
        x: "-5vw",
      });
      frameTl.to(item, {
        x: 0,
      });
    });
    const rightItems = document.querySelectorAll(".item.right");
    rightItems.forEach((item) => {
      const frameTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "bottom 83%",
          end: "top 30%",
          scrub: true,
        },
      });
      frameTl.from(item, {
        x: 0,
      });
      frameTl.to(item, {
        x: "5vw",
      });
      frameTl.to(item, {
        x: 0,
      });
    });
  });

  return (
    <div className={cx("and_wrap")}>
      <div className={cx("and_cont")}>
        <div className={cx("title_list")}>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Givenchy</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-01.svg"
                alt="Calvin Klein"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>
              <img
                src="../../images/img-title-02.svg"
                alt="PRADA"
                className={cx("image")}
              />
            </div>
            <div className={cx("item", "right")}>Hourglass</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Mert & Marcus</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-03.svg"
                alt="ZARA"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>
              <img
                src="../../images/img-title-04.jpg"
                alt="Coach"
                className={cx("image")}
              />
            </div>
            <div className={cx("item", "right")}>Stella McCartney</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Craig McDean</div>
            <div className={cx("item", "right")}>Juergen Teller</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Viviane Sassen</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-05.svg"
                alt="Dior"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>
              <img
                src="../../images/img-title-06.svg"
                alt="Vogue"
                className={cx("image")}
              />
            </div>
            <div className={cx("item", "right")}>Vegamour</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Augustinus Bader</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-07.svg"
                alt="ADIDAS"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Steven Klein</div>
            <div className={cx("item", "right")}>Lachlan Bailey</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Willy Vanderperre</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-08.svg"
                alt="BOSS"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>
              <img
                src="../../images/img-title-09.svg"
                alt="MAC"
                className={cx("image")}
              />
            </div>
            <div className={cx("item", "right")}>Johannes Leonardo</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Ilia Beauty</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-10.svg"
                alt="TBWA"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>
              <img
                src="../../images/img-title-11.svg"
                alt="CLINIQUE"
                className={cx("image")}
              />
            </div>
            <div className={cx("item", "right")}>Josh Olins</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Amazon</div>
            <div className={cx("item", "right")}>Ben Hassett</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Dan Jackson</div>
            <div className={cx("item", "right")}>
              <img
                src="../../images/img-title-12.svg"
                alt="INSTAGRAM"
                className={cx("image")}
              />
            </div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>
              <img
                src="../../images/img-title-13.svg"
                alt="GRAFF"
                className={cx("image")}
              />
            </div>
            <div className={cx("item", "right")}>U Beauty</div>
          </div>
          <div className={cx("title_item")}>
            <div className={cx("item", "left")}>Mazarine</div>
            <div className={cx("item", "right")}>Eilish</div>
          </div>
        </div>
      </div>
    </div>
  );
}
