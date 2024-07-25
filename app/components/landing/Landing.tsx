"use-client";
import { Hero } from "./Hero";
import { PopularProducts } from "./PopularProducts";

export const Landing: React.FC = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
    </>
  );
};
