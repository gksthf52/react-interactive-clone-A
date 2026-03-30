import css from "./Mask.module.scss";
import classNames from "classnames/bind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

const cx = classNames.bind(css);
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Mask = () => {
  useGSAP(() => {});

  return (
    <div className={cx("mask_wrap")}>
      <div className={cx("mask_row", "flow-right")}>
        <div className={cx("mask_item")}>Creative Technologists.</div>
        <div className={cx("mask_item")}>Creative Technologists.</div>
        <div className={cx("mask_item")}>Creative Technologists.</div>
      </div>
      <div className={cx("mask_row", "flow-left")}>
        <div className={cx("mask_item")}>Creative Technologists.</div>
        <div className={cx("mask_item")}>Creative Technologists.</div>
        <div className={cx("mask_item")}>Creative Technologists.</div>
      </div>
      <div className={cx("mask_row", "flow-right")}>
        <div className={cx("mask_item")}>Creative Technologists.</div>
        <div className={cx("mask_item")}>Creative Technologists.</div>
        <div className={cx("mask_item")}>Creative Technologists.</div>
      </div>
    </div>
  );
};

export default Mask;
