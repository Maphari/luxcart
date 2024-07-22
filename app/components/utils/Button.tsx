"use client";
import { IButton, IButtonProperty } from "@/app/types/button";

export const Button: React.FC<IButtonProperty> = ({
  type,
  name,
  children,
  className,
}) => {
  switch (type) {
    case "primary":
      return <PrimaryButton name={name} type="button" />;
    case "icon":
      return (
        <IconButton
          name={name}
          type="button"
          children={children}
          className={className}
        />
      );
    case "outlined":
      return <OutlinedButton name={name} type="button" />;
    case "secondary":
    //     return <SecondaryButton name="Secondary" type="button" />
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
const SecondaryButton = () => {};
const IconButton: React.FC<IButton> = ({
  name,
  children,
  childClass,
  type,
}) => {
  return (
    <button type={type} className="flex items-center gap-5 p-3">
      <span className={`${childClass} text-2xl`}>{children}</span>
      {name && <span>{name}</span>}
    </button>
  );
};
