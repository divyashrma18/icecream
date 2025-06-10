import React, { useEffect, useRef } from "react";
import "./Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const iceRef = useRef(null);
  const chatRef = useRef(null);
  const chat1Ref = useRef(null);
  const chat2Ref = useRef(null);
  const sectionRef = useRef(null);
  const section1HeadingRef = useRef(null);
  const section1ParaRef = useRef(null);

  // Section2 spin animations
  useEffect(() => {
    gsap.fromTo(
      ".three",
      { rotate: -180 },
      {
        rotate: -270,
        duration: 1.8,
        ease: "power2.out",
        transformOrigin: "left bottom",
        scrollTrigger: {
          trigger: ".section2",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".two",
      { rotate: -360 },
      {
        rotate: -270,
        duration: 1.8,
        ease: "power2.inOut",
        transformOrigin: "right bottom",
        scrollTrigger: {
          trigger: ".section2",
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          markers: false,
        },
      }
    );
  }, []);

  // Section1 text reveal on scroll
  useEffect(() => {
    const heading = section1HeadingRef.current;
    const paragraph = section1ParaRef.current;

    gsap.set([heading, paragraph], { opacity: 0, x: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(heading, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }).to(paragraph, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }, "+=0.2");
  }, []);

  // Hero section intro animation on load
  useEffect(() => {
    const h2 = document.querySelector(".hero h2");
    const ice = iceRef.current;
    const heroTextH3 = document.querySelector(".hero-text h3");
    const heroTextP = document.querySelector(".hero-text p");

    gsap.set([h2, ice, heroTextH3, heroTextP], { opacity: 0 });
    gsap.set(h2, { x: 200 });
    gsap.set(ice, { y: 200 });
    gsap.set([heroTextH3, heroTextP], { y: 50 });

    const tl = gsap.timeline();

    tl.to(h2, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }).to(ice, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")
      .to(heroTextH3, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "+=0.2")
      .to(heroTextP, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.3");
  }, []);

  // Hero assets scroll-based transition
  useEffect(() => {
    const ice = iceRef.current;
    const chat = chatRef.current;
    const chat1 = chat1Ref.current;
    const chat2 = chat2Ref.current;
    const section2 = document.querySelector(".section2");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        endTrigger: section2,
        end: "top+=100 top",
        scrub: true,
      },
    });

    tl.to(ice, {
      x: -400,
      y: 830,
      ease: "power1.out",
    }, 0)
      .to(chat, {
        x: 40,
        y: 680,
        ease: "power1.out",
      }, 0)
      .to(chat1, {
        x: -1000,
        y: 850,
        ease: "power1.out",
      }, 0)
      .to(chat2, {
        x: -780,
        y: 1150,
        ease: "power1.out",
      }, 0)
      .to(ice, {
        x: -10,
        y: 1600,
        ease: "power1.out",
      });
  }, []);

  return (
    <>
      <div className="hero">
        <Navbar />
        <h2>CHOCOLATE</h2>

        <img ref={iceRef} src="./images/1.png" alt="Ice cream" className="ice" />
        <img src="./images/coffee.png" alt="Coffee" className="cof" />

        <div className="hero-text">
          <h3>Creamy Chocolate</h3>
          <p>
            Indulge in the rich, velvety texture of our creamy chocolate ice
            cream — a dreamy blend of sweetness and cocoa delight.
          </p>
        </div>

        <img ref={chatRef} src="./images/chat.png" alt="Chat" className="chat" />
        <img ref={chat1Ref} src="./images/chat.png" alt="Chat" className="chat1" />
        <img ref={chat2Ref} src="./images/chat.png" alt="Chat" className="chat2" />
      </div>

      <div className="section1" ref={sectionRef}>
        <div className="section1-img">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#D7B89C"
              d="M48.1,-69.6C58.4,-58.8,60,-39.4,63.8,-22.1C67.5,-4.7,73.5,10.5,71,24.6C68.6,38.7,57.7,51.6,44.5,58.8C31.3,65.9,15.6,67.2,-0.5,68C-16.7,68.7,-33.4,68.8,-45.6,61.3C-57.7,53.9,-65.4,38.8,-72.3,22.4C-79.2,5.9,-85.4,-11.9,-80,-25.2C-74.5,-38.4,-57.5,-47,-42.2,-56.3C-27,-65.5,-13.5,-75.3,2.7,-79.1C18.9,-82.8,37.8,-80.5,48.1,-69.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="section1-text">
          <h3 ref={section1HeadingRef}>Pure Chocolate Bliss</h3>
          <p ref={section1ParaRef}>
            Dive into the decadence of our handcrafted chocolate ice cream —
            smooth, rich, and made to melt hearts with every bite. Each scoop is
            a celebration of cocoa, churned to perfection for an irresistibly
            creamy texture. Made with the finest ingredients, it’s a comforting
            treat that brings warmth and joy with every taste. Whether you're
            savoring it solo or sharing with someone special, this chocolate
            delight promises a moment of pure happiness.
          </p>
        </div>
      </div>

      <div className="section2 flex">
        <div className="curve1">
          <img src="./images/section2.png" alt="Strawberry" className="straw" />
          <img src="./images/three.png" alt="Decoration" className="three" />
          <h3 className="sweet">Sweet Strawberry</h3>
        </div>

        <div className="curve2">
          <img src="./images/c1.png" alt="Chocolate" className="c1" />
          <h3 className="sweet">Creamy Chocolate</h3>
        </div>

        <div className="curve3">
          <img src="./images/wtf.png" alt="Pistachio" className="wtf" />
          <img src="./images/two.png" alt="Decoration" className="two" />
          <h3 className="sweet">Nutty Pistachio</h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
