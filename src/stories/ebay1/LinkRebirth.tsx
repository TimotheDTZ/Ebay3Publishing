import React, { ReactNode } from 'react';
import './LinkRebirth.css';

interface LinkRebirthProps {
    iconLeft?: boolean;
    iconRight?: boolean;
    color?: 'default' | 'primary' | 'white';
    size?: 'md' | 'sm';
    state?: 'default' | 'focus' | 'hover';
    children: ReactNode;
}

export const LinkRebirth = ({
    iconLeft = false,
    iconRight = false,
    color = 'default',
    size = 'md',
    state = 'default',
    children = 'Link',
}: LinkRebirthProps) => {
    const className = `link-rebirth ${color} ${size} ${state}`;

    return (
        <a className={className}>
            {iconLeft && <span className="icon-left">Icon Left</span>}
            {children}
            {iconRight && <span className="icon-right">Icon Right</span>}
        </a>
    );
};

export default LinkRebirth;
