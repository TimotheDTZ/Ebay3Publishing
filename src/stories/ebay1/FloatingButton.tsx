// FloatingButton.tsx
import React from 'react';
import './FloatingButton.css';

export type FloatingButtonProps = {
    status?: 'Focused' | 'Hovered' | 'Pressed' | 'Disabled';
    extended?: boolean;
    label?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FloatingButton = ({
    status = 'Focused',
    extended = false,
    label = 'Label',
    ...props
}: FloatingButtonProps) => {
    const buttonClassName = `FloatingButton ${status ? status : ''}`;

    return (
        <button className={buttonClassName} {...props}>
            {extended && label && <span className="label">{label}</span>}
            <span className="icon">+</span>
        </button>
    );
};
