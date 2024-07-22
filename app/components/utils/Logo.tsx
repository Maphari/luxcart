"use client";

import React from "react";
import Image from "next/image";
import { ILogo } from "@/app/types/logo";

export const Logo: React.FC<ILogo> = ({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} logo-container`}
      {...rest}
      priority
    />
  );
};
