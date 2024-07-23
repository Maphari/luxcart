"use client";
import React, { useState } from "react";
import LOGO_IMAGE from "@/public/svg/logo.svg";
import { Logo } from "@/app/components/utils/Logo";
import { NextLink } from "@/app/components/utils/Link";
import { IoCartOutline as CartOutlinedIcon } from "react-icons/io5";
import { CgMenuRound as MenuIcon } from "react-icons/cg";
import { IoCloseCircleOutline as CloseIcon } from "react-icons/io5";
import { Button } from "@/app/components/utils/Button";
import { IButtons, INavLinks, ISmallScreenProp } from "@/app/types/types";

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const NavLinks: INavLinks[] = [
    {
      name: "Home",
      href: "/",
      isLoading: true,
      position: "center",
    },
    {
      name: "Shop",
      href: "/shop",
      isLoading: true,
      position: "center",
    },
    {
      name: "About",
      href: "/about",
      isLoading: true,
      position: "center",
    },
    {
      name: "Contact",
      href: "/contact",
      isLoading: true,
      position: "center",
    },
  ];

  const ButtonsAction: IButtons[] = [
    {
      name: "LOG IN",
      type: "outlined",
    },
    {
      name: "SIGN UP",
      type: "primary",
    },
  ];

  return (
    <nav className="navigation relative">
      <section className="navigation_logo">
        <Logo
          src={LOGO_IMAGE.src}
          alt="This is the logo of the luxcart"
          width={60}
          height={0}
          className="w-full h-auto object-cover"
        />
      </section>
      <section className="small-screen-menu">
        <section className="flex items-center gap-5">
          <section className="cart relative">
            <Button type="icon">
              <CartOutlinedIcon className="text-3xl" />
            </Button>
            <div className="absolute -top-[50%] -right-[30%] bg-blue-950 rounded-full w-6 text-sm h-6 flex items-center justify-center text-white">
              3
            </div>
          </section>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <CloseIcon className="text-4xl" />
            ) : (
              <MenuIcon className="text-4xl" />
            )}
          </button>
        </section>
        {isMenuOpen && (
          <section className="absolute top-[90%] left-0 w-full bg-transparent flex items-center justify-center flex-col">
            {NavLinks.map((item: INavLinks, index: number) => (
              <NextLink
                key={index}
                name={item.name}
                href={item.href}
                isLoading={item.isLoading}
                position={item.position}
              />
            ))}
            <section className="w-full mt-5 flex flex-col justify-center items-center gap-2">
              {ButtonsAction.map((btn: IButtons, index: number) => (
                <Button
                  key={index}
                  name={btn.name}
                  type={btn.type}
                  className={`w-full ${
                    btn.type === "outlined" && "font-semibold"
                  }`}
                />
              ))}
            </section>
          </section>
        )}
      </section>
      <section className="nav-linkss flex items-center gap-5">
        <section className="navigation__link">
          {NavLinks.map((item: INavLinks, index: number) => (
            <NextLink
              key={index}
              name={item.name}
              href={item.href}
              isLoading={item.isLoading}
              position={item.position}
            />
          ))}
        </section>
        <section className="navigation__link__action">
          {ButtonsAction.map((btn: IButtons, index: number) => (
            <Button
              key={index}
              name={btn.name}
              type={btn.type}
              className={`${btn.type === "outlined" && "font-semibold"}`}
            />
          ))}
        </section>
        <section className="cart relative">
          <Button type="icon">
            <CartOutlinedIcon className="text-3xl" />
          </Button>
          <div className="absolute -top-[50%] -right-[30%] bg-blue-950 rounded-full w-6 text-sm h-6 flex items-center justify-center text-white">
            3
          </div>
        </section>
      </section>
    </nav>
  );
};
