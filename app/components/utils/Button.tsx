"use client";
import { IButton, IButtonProperty } from "@/app/types/button";

export const Button: React.FC<IButtonProperty> = ({ type, name, children, className }) => {
  switch (type) {
    case "primary":
      return <PrimaryButton name={name} type="button" className={className}>{children}</PrimaryButton>;
    case "icon":
      return <IconButton name={name} type="button" className={className}>{children}</IconButton>;
    case "outlined":
      return <OutlinedButton name={name} type="button" className={className}>{children}</OutlinedButton>;
  }
};

const PrimaryButton: React.FC<IButton> = ({ name, type, className, children }) => {
  return (
    <button type={type} className={`${className} flex justify-center items-center button-primary`}>
      {name && <span>{name}</span>}
      <span className={`text-2xl`}>{children}</span>
    </button>
  );
};

const OutlinedButton: React.FC<IButton> = ({ name, type, className, children }) => {
  return (
    <button type={type} className={`${className} flex justify-center items-center button-outlined`}>
      {name && <span>{name}</span>}
      <span className={`text-2xl`}>{children}</span>
    </button>
  );
};
const IconButton: React.FC<IButton> = ({ name, children, type }) => {
  return (
    <button type={type} className="flex justify-center items-center">
      {name && <span>{name}</span>}
      <span className={`text-2xl`}>{children}</span>
    </button>
  );
};
