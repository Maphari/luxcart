"use client";
import { IButton, IButtonProperty } from "@/app/types/button";

export const Button: React.FC<IButtonProperty> = ({ type, name, children, className }) => {
  switch (type) {
    case "primary":
      return <PrimaryButton name={name} type="button" />;
    case "icon":
      return <IconButton name={name} type="button" className={className}>{children}</IconButton>;
    case "outlined":
      return <OutlinedButton name={name} type="button" />;
  }
};

const PrimaryButton: React.FC<IButton> = ({ name, type, className }) => {
  return (
    <button type={type} className={`${className} button-primary`}>
      {name}
    </button>
  );
};

const OutlinedButton: React.FC<IButton> = ({ name, type, className }) => {
  return (
    <button type={type} className={`${className} button-outlined`}>
      {name}
    </button>
  );
};
const IconButton: React.FC<IButton> = ({ name, children, type }) => {
  return (
    <button type={type} className="flex items-center">
      {name && <span>{name}</span>}
      <span className={`text-2xl`}>{children}</span>
    </button>
  );
};
