"use client";

import { IHeroInformation } from "@/app/types/types";

export const HeroInformation: React.FC<IHeroInformation> = ({header, paragraph, children, className}) => {
  return (
    <section className="flex gap-3">
      <div className={`h-11 w-11 rounded ${className} flex items-center justify-center`}>
        {children}
      </div>
      <div className="flex flex-col justify-between text-gray-700">
        <h4 className="text-[1.1rem] font-medium">{header}</h4>
        <p className="text-[0.76rem] opacity-80">{paragraph}</p>
      </div>
    </section>
  );
};
