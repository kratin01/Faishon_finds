import React from "react";
import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 w-[50%] h-[50%] top-0 rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 w-[50%] h-[50%] bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Effortlessly Find The
        <br className="sm:block hidden" />
        Best Fashion Deals.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discovering the best fashion deals has never been easier. With our
        platform, you can effortlessly navigate through a curated selection of
        shops, ensuring you always find quality clothing at unbeatable prices.
        Say goodbye to endless searching and hello to convenient savings on your
        favorite styles.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
