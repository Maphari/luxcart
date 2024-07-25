import { IHeroInformation } from "../types/types";
import { TbTruckDelivery } from "react-icons/tb";
import { Ri24HoursLine, RiSecurePaymentLine } from "react-icons/ri";
import { LiaTruckLoadingSolid, LiaTruckMovingSolid } from "react-icons/lia";
import { MdInfoOutline as InfoIcon } from "react-icons/md";
import { IButtonProperty } from "../types/button";

function classNames(color: string): string {
  return `bg-[#${color}] bg-opacity-60 backdrop-filter backdrop-blur-lg`
}


export const HeroInformationProps: IHeroInformation[] = [
  {
    header: "Free Shipping",
    paragraph: "Free shipping on oder",
    children: <TbTruckDelivery className="text-2xl" />,
    className: classNames("346FC9"),
  },
  {
    header: "support 24/7",
    paragraph: "Contact us anytime",
    children: <Ri24HoursLine className="text-2xl" />,
    className: classNames("C96134"),
  },
  {
    header: "secure payments",
    paragraph: "Encrypted payments",
    children: <RiSecurePaymentLine className="text-2xl" />,
    className: classNames("C9A834"),
  },
  {
    header: "Multiple courier",
    paragraph: "Choose a courier",
    children: <LiaTruckLoadingSolid className="text-2xl" />,
    className: classNames("34C966"),
  },
  {
    header: "Fast delivery",
    paragraph: "Local fast delivery",
    children: <LiaTruckMovingSolid className="text-2xl" />,
    className: classNames("6434C9"),
  },
];


export const ButtonsHero: IButtonProperty[] = [
  {
    type: 'primary',
    name: 'GET STARTED',
  },
  {
    type: 'outlined',
    name: 'LEARN MORE',
    children: <InfoIcon className="text-sm ml-2" />,
  }
]