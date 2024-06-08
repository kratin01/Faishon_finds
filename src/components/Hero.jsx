import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex flex-col ${styles.paddingY} md:flex-row`}
      >
        <div className=" flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  ">
          <div className=" flex flex-row  py-[6px] px-4 bg-discount-gradient items-center rounded-[20px] mb-3 ">
            <img
              src={discount}
              alt="discount"
              className=" w-[32px] h-[32px] mr-2"
            />
            <p className={`${styles.paragraph}`}>
              {/* <span className="text-white">20% </span>Discount For{" "} */}
              <span className="text-white">Get Your Local </span>Fashion
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leadind-[75px]">
              The Next
              <br className=" sm:block hidden" />{" "}
              <span className={`text-gradient `}>Generation</span>{" "}
            </h1>
            <div className=" ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="  font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leadind-[75px]">
            Fashion Finds
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Delhi, a vibrant metropolis, boasts an array of shopping options. Yet, sourcing high-quality, affordable clothing often proves difficult. Shoppers frequently face the challenge of finding stores that provide both excellent quality and reasonable prices. This issue highlights the need for a more accessible directory or guide that specifically targets and lists venues known for their value and quality, helping consumers navigate Delhi’s extensive but sometimes overwhelming market landscape.
          </p>
        </div>

        <div className={` flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img
            src={robot}
            alt="robot"
            className="w-[100%] h-[100%] relative z-[5]"
          />
        
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      </section>
    </>
  );
};

export default Hero;
