import { LinkProps } from "next/link";
export interface INextLink extends LinkProps {
    href: string;
    name: string;
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    isLoading?: boolean | true;
    position?: 'center' | 'left'
    [key: string]: any;
}