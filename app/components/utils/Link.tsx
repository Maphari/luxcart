"use client";
import Link from "next/link";
import { INextLink } from "@/app/types/nextLink";

export const NextLink: React.FC<INextLink> = ({
  href,
  name,
  className,
  children,
  childrenClassName,
  isLoading,
  position,
  ...rest
}) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`nav-link flex ${
        position == "center"
          ? "justify-center items-center"
          : position == "left" && "items-center justify-between"
      }  ${className} ${isLoading && "add-loading"} py-1 px-2 text-sm`}
    >
      <span>{name}</span>
      <span className={`${childrenClassName}`}>{children}</span>
    </Link>
  );
};
