"use client";
import { Navigation } from "../navigation/Navigation";
import Image from "next/image";
import { PiHandshake as RightHandIcon } from "react-icons/pi";
import HERO_IMAGE from "@/public/img/hero-computer.svg";

export const Hero: React.FC = () => {
  return (
    <>
      <Navigation />
      <section className="hero__container">
        <section className="hero__container__content">
          <div className="w-max flex items-center gap-2 border border-blue-950 py-1 px-2 mb-3">
            <RightHandIcon className="text-xl" />
            <h6 className="text-sm">Welcome to luxcart</h6>
          </div>
          <div>
            <h1 className="text-5xl mb-2">
              Unleash Your<br /> <b>Gaming Potential.</b>
            </h1>
            <p className="text-xs opacity-80">
              Dive into the ultimate gaming experience with the MSI MAG Forge
              M100A.<br />Equipped with stunning visuals and unmatched performance, it’s
              the time to take <br/>your gaming to the next level.
            </p>
          </div>
        </section>
        <section className="">
          <Image
            src={HERO_IMAGE.src}
            alt="A gaming computer"
            width={500}
            height={500}
          />
        </section>
      </section>
    </>
  );
};
