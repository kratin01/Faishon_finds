import styles, { layout } from "../style";
import { features } from "../constants";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] bg-dimBlue ${styles.flexCenter} rounded-full`}> 
      <img src={icon} alt="icon" className=" object-contain w-[50%] h-[50%]" />
    </div>
    <div className=" flex flex-1 flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white leading-[23px] text-[16px]">
      {title}
      </h4>

      <p className="font-poppins font-normal text-dimWhite leading-[24px] text-[14px]">
      {content}
      </p>
     

    </div>
  </div>
);

const Bussiness = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        You Focus On Fashion, <br className="sm:block hidden" /> we’ll Streamline Your Success.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right platform, you can enhance your shopping experience by discovering quality clothing, finding great deals, and saving time. But with so many options available in Delhi's vast market...
        </p>

        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Bussiness;
