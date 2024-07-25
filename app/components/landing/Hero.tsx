"use client";
import { Navigation } from "./Navigation";
import { PiHandshake as RightHandIcon } from "react-icons/pi";
import { Button } from "../utils/Button";
import { ButtonsHero, HeroInformationProps } from "@/app/constant/hero";
import { IHeroInformation } from "@/app/types/types";
import { HeroInformation } from "../utils/HeroInformation";
import { IButtonProperty } from "@/app/types/button";

export const Hero: React.FC = () => {
  return (
    <section className="hero__main">
      <Navigation />
      <section className="hero__container">
        <section className="hero__container__content">
          <div className="hero__container__content-welcome w-max flex items-center gap-2 py-1 px-2 mb-3">
            <RightHandIcon className="text-xl" />
            <h6 className="text-sm">Welcome to luxcart</h6>
          </div>
          <div className="hero__container__content-header">
            <h1>
              Unleash Your <b>Gaming Potential.</b>
            </h1>
            <p>
              Dive into the ultimate gaming experience with the MSI MAG Forge
              M100A. Equipped with stunning visuals and unmatched performance,
              it’s the time to take your gaming to the next level.
            </p>
          </div>
          <div className="flex flex-wrap hero__container__content-bottom">
            {ButtonsHero.map((item: IButtonProperty, index: number) => (
              <Button key={index} type={item.type} name={item.name}>
                {item.type === "outlined" && item.children}
              </Button>
            ))}
          </div>
          <section className="flex flex-wrap items-center gap-4 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mt-5 rounded p-5 shadow-lg">
            {HeroInformationProps.map(
              (item: IHeroInformation, index: number) => (
                <HeroInformation
                  key={index}
                  header={item.header}
                  paragraph={item.paragraph}
                  className={item.className}
                >
                  {item.children}
                </HeroInformation>
              )
            )}
          </section>
        </section>
      </section>
    </section>
  );
};
