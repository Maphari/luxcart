"use client";
import React, { useState } from "react";
import LOGO_IMAGE from "@/public/svg/logo.svg";
import { Logo } from "@/app/components/utils/Logo";
import { NextLink } from "@/app/components/utils/Link";
import { MdArrowDropDown as ArrowDownIcon } from "react-icons/md";
import { FaLongArrowAltRight as ArrowRightIcon } from "react-icons/fa";
import { IoCartOutline as CartOutlinedIcon } from "react-icons/io5";
import { Button } from "@/app/components/utils/Button";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const categoryTransitions: string =
    "opacity-90 transition-all duration-500 ease-in-out hover:bg-gray-100 hover:opacity-100";

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <section className="navigation_logo">
        <Logo
          src={LOGO_IMAGE.src}
          alt="This is the logo of the luxcart"
          width={60}
          height={0}
          className="w-full h-auto object-cover"
        />
      </section>
      <section className="navigation__link">
        <NextLink href="/" name="Home" isLoading position="center" />
        <section
          className="navigation__link-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NextLink
            href="/category"
            name="Category"
            className={`gap-1 ${isOpen && "bg-white"}`}
            childrenClassName="text-xl"
            children={<ArrowDownIcon />}
          />
          {isOpen && (
            <section className="navigation__link-container__category">
              <section className="navigation__link-container__category-links px-2 py-1 text-xs opacity-90">
                <NextLink
                  href="#"
                  name="Computer cases"
                  position="left"
                  className={`${categoryTransitions} gap-5 rounded`}
                  children={<ArrowRightIcon />}
                />
                <NextLink
                  href="#"
                  name="GPU's"
                  position="left"
                  className={`${categoryTransitions} gap-5 rounded`}
                  children={<ArrowRightIcon />}
                />
                <NextLink
                  href="#"
                  name="Mother board"
                  position="left"
                  className={`${categoryTransitions} gap-5 rounded`}
                  children={<ArrowRightIcon />}
                />
                <NextLink
                  href="#"
                  name="Monitors"
                  position="left"
                  className={`${categoryTransitions} gap-5 rounded`}
                  children={<ArrowRightIcon />}
                />
              </section>
            </section>
          )}
        </section>
        <NextLink href="/shop" name="Shop" position="center" isLoading />
        <NextLink href="/about" name="About Us" position="center" isLoading />
        <NextLink
          href="/contact"
          name="Contact Us"
          position="center"
          isLoading
        />
        <section className="navigation__link__action">
          <Button type="icon" children={<CartOutlinedIcon />} />
          <section className="flex gap-1">
            <Button type="outlined" name="LOG IN" />
            <Button type="primary" name="SIGN UP" />
          </section>
        </section>
      </section>
    </nav>
  );
};
