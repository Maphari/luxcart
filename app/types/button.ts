export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string;
    className?: string;
    children?: React.ReactNode;
    childClass?: string;
}

export interface IButtonProperty extends Pick<IButton, 'name'| 'className' | 'children' | 'childClass' | 'onClick'> {
    type: 'primary' | 'outlined' | 'secondary' | 'icon';
}