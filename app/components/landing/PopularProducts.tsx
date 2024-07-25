"use client";

import { IButtonProperty } from "@/app/types/button";
import { Button } from "../utils/Button";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { INavLinks } from "@/app/types/types";
import { NextLink } from "../utils/Link";
import { PopularProductLinks } from "@/app/constant/popularProducts";
import { ProductCard, IProductCard } from "../utils/ProductCard";
import IMAGE from "@/public/img/msi-computer.png";

const ButtonsCarousel: IButtonProperty[] = [
  {
    type: "outlined",
    children: <FaLongArrowAltLeft className="text-xl text-gray-900" />,
  },
  {
    type: "outlined",
    children: <FaLongArrowAltRight className="text-xl text-gray-900" />,
  },
];

const products: IProductCard[] = [
  {
    src: IMAGE.src,
    width: 250,
    height: 0,
    header: "14th Gen Core i5 14600KF 5.3GHz RTX 3060 12GB Budget Gaming PC",
    rating: "4.5",
    price: "$200",
  },
];

export const PopularProducts: React.FC = () => {
  return (
    <section className="popular__container">
      <section className="popular__container-header">
        <div className="popular__container-header__info">
          <h1>Popular Products</h1>
          <p>Browse our popular products</p>
        </div>
        <div className="popular__container-header__buttons">
          {ButtonsCarousel.map((item: IButtonProperty, index: number) => (
            <Button key={index} type={item.type} className="hover:text-white">
              {item.children}
            </Button>
          ))}
        </div>
      </section>
      <section className="popular__container-links">
        {PopularProductLinks.map((item: INavLinks, index: number) => (
          <NextLink
            key={index}
            name={item.name}
            href={item.href}
            isLoading={item.isLoading}
            position={item.position}
            className="transition-all duration-300 ease-linear hover:text-gray-950 border-b-2 border-[#eeeeee] hover:border-gray-800"
          />
        ))}
      </section>
      <section className="popular__container-cards">
        {products.map((product: IProductCard, index: number) => (
          <ProductCard
            key={index}
            src={product.src}
            alt={product.alt}
            header={product.header}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </section>
    </section>
  );
};
