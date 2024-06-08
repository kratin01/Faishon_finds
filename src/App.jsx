import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Billing,
  Footer,
  Bussiness,
  CardDeal,
  FeedbackCard,
  GetStarted,
  Clients,
  Stats,
  Testimonials,
  CTA,
} from "./components";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        {/* <h1 className=' text-white'>Jai Shree Shyam</h1> */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Bussiness />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
