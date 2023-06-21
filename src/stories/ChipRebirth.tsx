import React, { FC } from 'react';
import './ChipRebirth.css';

interface ChipRebirthProps {
    size?: 'sm' | 'lg';
    color?: 'primary' | 'default';
    iconLeft?: boolean;
    iconRight?: boolean;
    state?: 'default' | 'hover' | 'focus';
}

export const ChipRebirth = ({
    size = 'sm',
    color = 'primary',
    iconLeft = false,
    iconRight = false,
    state = 'default',
    ...props
}: ChipRebirthProps) => {
    const classNames = [
        'ChipRebirth',
        size,
        color,
        state === 'hover' ? 'hover' : '',
        state === 'focus' ? 'focus' : '',
    ].join(' ');

    return (
        <div className={classNames}>
            {iconLeft && <img className="icon-left" src="icon-left.png" alt="Icon Left" />}
            Label
            {iconRight && <img className="icon-right" src="icon-right.png" alt="Icon Right" />}
        </div>
    );
};

export default ChipRebirth;
