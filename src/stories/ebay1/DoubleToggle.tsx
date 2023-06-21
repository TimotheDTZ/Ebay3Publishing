import React, { useState } from 'react';
import './DoubleToggle.css';

type DoubleToggleProps = {
    labelLeft: string;
    labelRight: string;
    Side: 'left' | 'right';
    onChange: (side: 'left' | 'right') => void;
};

export const DoubleToggle = ({
    labelLeft = 'Left',
    labelRight = 'Right',
    Side = 'right',
    onChange,
    ...props
}: DoubleToggleProps) => {
    const handleToggle = () => {
        const newSide = Side === 'left' ? 'right' : 'left';
        onChange(newSide);
    };

    return (
        <div className="DoubleToggle">
            <label className="DoubleToggle-label">{labelLeft}</label>
            <div
                className={`DoubleToggle-toggle ${Side === 'right' ? 'DoubleToggle-toggle--right' : ''}`}
                onClick={handleToggle}
            ></div>
            <label className="DoubleToggle-label">{labelRight}</label>
        </div>
    );
};

export default DoubleToggle;
