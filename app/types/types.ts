export interface INavLinks {
  name: string;
  href: string;
  isLoading: boolean;
  position: 'center' | 'left';
}

export interface IButtons {
    name?: string;
    type: "icon" | "primary" | "outlined" | "secondary";
}

export interface ISmallScreenProp {
    type: "icon" | "primary" | "outlined" | "secondary";
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode
}

export interface IHeroInformation {
  children?: React.ReactNode;
  header: string;
  paragraph: string;
  className?: string;
}
