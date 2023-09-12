"use client";

import Image from "next/image";

import { Diplomata, Aboreto } from "next/font/google";

import masonry1 from "../../public/masonry-1.jpg";
import masonry2 from "../../public/masonry-2.jpg";
import masonry3 from "../../public/masonry-3.jpg";
import masonry4 from "../../public/masonry-4.jpg";
import masonry5 from "../../public/masonry-5.jpg";
import masonry6 from "../../public/masonry-6.jpg";
import masonry7 from "../../public/masonry-7.jpg";
import masonry8 from "../../public/masonry-8.jpg";
import masonry9 from "../../public/masonry-9.jpg";
import masonry10 from "../../public/masonry-10.jpg";
import masonry11 from "../../public/masonry-11.jpg";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const diplomata = Diplomata({ subsets: ["latin"], weight: "400" });
const aboreto = Aboreto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const gridRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(".masonry-1 img.potrait", {
        yPercent: -50,
        scrollTrigger: {
          scrub: 0.2,
          // markers: true,
          start: "top 10px",
          end: "bottom 710px",
        },
      });

      gsap.to(".masonry-1 img.landscape", {
        yPercent: -50,
        scrollTrigger: {
          scrub: 0.2,
          // markers: true,
          start: "top 10px",
          end: "bottom 310px",
        },
      });

      gsap.to("h1", {
        y: -100,
        scrollTrigger: {
          scrub: 0.2,
          start: "top 400px",
          end: "bottom top",
          // markers: true,
        },
      });

      const tl = gsap.timeline();

      tl.from(".masonry-1 > div", {
        y: 150,
        stagger: 0.1,
        autoAlpha: 0,
      }).from(
        "h1",
        {
          y: 50,
          stagger: 0.1,
          autoAlpha: 0,
        },
        "<+0.5"
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="p-10">
      <div
        ref={gridRef}
        className="masonry-1 hidden lg:grid w-full sm:w-11/12 xl:w-3/5 mx-auto lg:grid-cols-2 lg:grid-rows-9 gap-10 relative"
      >
        <h1
          className={
            "absolute invisible bg-white text-7xl text-black font-bold z-20 top-[420px] -left-10" +
            " " +
            aboreto.className
          }
        >
          Capture <br /> your <br /> moments
        </h1>

        <h1
          className={
            "absolute invisible bg-black text-7xl text-white font-bold z-20 top-[820px] -right-20" +
            " " +
            aboreto.className
          }
        >
          Define <br /> your <br /> reality
        </h1>

        <h1
          className={
            "absolute invisible bg-white text-7xl text-black font-bold z-20 top-[1850px] -left-10" +
            " " +
            aboreto.className
          }
        >
          Embrace <br /> the <br /> nature
        </h1>

        <h1
          className={
            "absolute invisible bg-black text-7xl text-white font-bold z-20 top-[2800px] -right-10" +
            " " +
            aboreto.className
          }
        >
          Explore <br /> the <br /> beauty
        </h1>
        <div className="overflow-hidden invisible row-span-2 h-[700px] relative">
          <Image
            alt="picture of a woman"
            fill={true}
            src={masonry1.src}
            className="brightness-100 object-cover scale-150 origin-top potrait"
          />
        </div>
        <div className="overflow-hidden invisible h-[300px] relative">
          <Image
            alt="picture of a plant"
            fill={true}
            src={masonry2.src}
            className="brightness-100 object-cover scale-150 origin-top landscape"
          />
        </div>
        <div className="overflow-hidden invisible row-span-2 h-[700px] relative">
          <Image
            alt="picture of a san fransico bridge"
            fill={true}
            src={masonry3.src}
            className="brightness-100 object-cover scale-150 origin-top potrait"
          />
        </div>
        <div className="overflow-hidden invisible h-[300px] relative">
          <Image
            alt="picture of crow on a fence"
            fill={true}
            src={masonry4.src}
            className="brightness-100 object-cover scale-150 origin-top landscape"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 h-[300px] relative">
          <Image
            alt="picture of an electric tower"
            fill={true}
            src={masonry5.src}
            className="brightness-100 object-cover object-cover scale-150 origin-top landscape"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 row-span-2 h-[700px] relative">
          <Image
            alt="picture of a building with stairs"
            fill={true}
            src={masonry6.src}
            className="brightness-100 object-cover scale-150 origin-top potrait"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 row-span-2 h-[700px] relative">
          <Image
            alt="picture of a horse"
            fill={true}
            src={masonry8.src}
            className="brightness-100 object-cover scale-150 origin-top potrait"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 h-[300px] relative">
          <Image
            alt="picture of woman in black and white outfit"
            fill={true}
            src={masonry7.src}
            className="brightness-100 object-cover object-cover scale-150 origin-top landscape"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 h-[300px] relative">
          <Image
            alt="picture of boat with colony of birds"
            fill={true}
            src={masonry9.src}
            className="brightness-100 object-cover object-cover scale-150 origin-top landscape"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 row-span-3 relative">
          <Image
            alt="picture of woman at the beach"
            fill={true}
            src={masonry11.src}
            className="brightness-100 object-cover scale-150 origin-top potrait"
          />
        </div>
        <div className="overflow-hidden invisible bg-gray-300 row-span-2 h-[700px] relative">
          <Image
            alt="picture of road sign in the city"
            fill={true}
            src={masonry10.src}
            className="brightness-100 object-cover scale-150 origin-top potrait"
          />
        </div>
      </div>
    </main>
  );
}
