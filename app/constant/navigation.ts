import { IButtons, INavLinks } from "../types/types";

export const NavLinks: INavLinks[] = [
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

export const ButtonsAction: IButtons[] = [
    {
      name: "LOG IN",
      type: "outlined",
    },
    {
      name: "SIGN UP",
      type: "primary",
    },
  ];