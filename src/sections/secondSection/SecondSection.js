import React, { useEffect } from "react";
import gsap, { Power3, Power0 } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import "./StyleSecond.css";
import FirstSection from "../firstSection/FirstSection";
import FooterSection from "../footerSection/FooterSection";

import logoReact from "../../img/logos/react.svg";
import logoFirebase from "../../img/logos/firebase.svg";
import redux from "../../img/logos/redux.svg";
import bootstrap from "../../img/logos/bootstrap.svg";
import navigation from "../../img/logos/navigation.svg";

const SecondSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  let bodyScrollBar = Scrollbar.init(document.body, {
    damping: 0.1,
    delegateTo: document,
  });

  useEffect(() => {
    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");

    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.back",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * (i + 0.2),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(image, { height: 0 });
    });

    // gsap.set(".panel-text", {
    //   zIndex: (i, target, targets) => targets.length - i,
    // });

    var texts = gsap.utils.toArray(".panel-text");

    var color = ["red", "blue", "purple", "orange"];

    texts.forEach((text, i) => {
      //    text.bg = text.querySelector(".panel-text");
      //    text.bg.style.color = color[i];

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.back",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });

      tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
        text,
        { duration: 1, opacity: 0, y: "0%" },
        0.75
      );
    });

    ScrollTrigger.create({
      trigger: "section.back",
      scroller: ".scroller",
      scrub: true,
      //markers: true,
      pin: true,
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
      invalidateOnRefresh: true,
    });

    let scrollTween;

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
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
  }, []);

  return (
    <div className="scroller">
      <section className="orange requerido">
        <FirstSection />
      </section>

      <section className="back requerido">
        <div className="text-wrap">
          <div className="panel-text blue-text ">
            <h1>Book</h1>
            <p className="d-none d-md-block d-lg-block d-xl-block">
              Sistema de reservas curso react
            </p>
            <a href="">Link here </a>
            <div className="images">
              <img
                id="images"
                width="20%"
                height="20%"
                src={logoReact}
                title="React Native"
              />
              <img
                id="images"
                width="16%"
                height="16%"
                src={navigation}
                title="React Navigation"
                style={{ marginLeft: "5%" }}
              />
            </div>
          </div>
          <div className="panel-text red-text">
            <h1>Por Vos</h1>
            <p className="d-none d-md-block d-lg-block d-xl-block">
              {" "}
              Aplicacion relacinada a la ayuda de personas
            </p>
            <a href="">Link here </a>
            <div className="images">
              <img
                id="images"
                width="20%"
                height="20%"
                src={logoReact}
                title="React Native"
              />
              <img
                id="images"
                width="13%"
                height="13%"
                src={logoFirebase}
                title="Firebase"
                style={{ marginLeft: "5%" }}
              />
              <img
                id="images"
                width="16%"
                height="16%"
                src={redux}
                title="Redux"
                style={{ marginLeft: "5%" }}
              />
            </div>
          </div>
          <div className="panel-text orange-text">
            <h1>Por Vos </h1>
            <h1> (Admin Panel)</h1>
            <p className="d-none d-md-block d-lg-block d-xl-block">
              Panel de administracion de la app por Vos
            </p>
            <a href="https://porvos-ef6a1.web.app/#/login">Link here </a>
            <div className="images">
              <img
                id="images"
                width="20%"
                height="20%"
                src={logoReact}
                title="React Native"
              />
              <img
                id="images"
                width="13%"
                height="13%"
                src={logoFirebase}
                title="Firebase"
                style={{ marginLeft: "5%" }}
              />
            </div>
          </div>
          <div className="panel-text purple-text">
            <h1>Surf Proyect</h1>
            <p className="d-none d-md-block d-lg-block d-xl-block">
              Desarrollo web surf
            </p>
            <a href="https://sad-stonebraker-d34069.netlify.app/">Link here </a>
            <div className="images">
              <img
                id="images"
                width="20%"
                height="20%"
                src={logoReact}
                title="React Native"
              />
              <img
                id="images"
                width="20%"
                height="20%"
                src={bootstrap}
                title="bootstrap"
                style={{ marginLeft: "5%" }}
              />
            </div>
          </div>
        </div>

        <div className="p-wrap">
          <div className="panel blue"></div>
          <div className="panel red"></div>
          <div className="panel orange"></div>
          <div className="panel purple"></div>
        </div>
      </section>

      <section className="orange requerido">
        <FooterSection />
      </section>
    </div>
  );
};

export default SecondSection;
