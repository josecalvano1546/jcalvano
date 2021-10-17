import React, { useEffect } from "react";

import HeaderSection from "../sections/headerSection/HeaderSection";
import FirstSection from "../sections/firstSection/FirstSection";
import SecondSection from "../sections/secondSection/SecondSection";
import FooterSection from "../sections/footerSection/FooterSection";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const FirstContainer = () => {
  gsap.registerPlugin(ScrollTrigger);

 
    let scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i , autoKill: false },
        duration: 1,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=200%",
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });


  return (
    <>
 

      <section
        className="firstContainer"
        style={{ height: "100vh", position: "sticky", top: "0" }}
      >
        <SecondSection />
      </section>

    </>
  );
};
export default FirstContainer;
