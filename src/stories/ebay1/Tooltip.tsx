import React, { useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
    text: string;
    alignment: 'left' | 'center';
}

export const Tooltip = ({ text, alignment }: TooltipProps) => {
    const [tooltipText, setTooltipText] = useState(text);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTooltipText(event.target.value);
    };

    return (
        <div className="tooltip">
            <span className="tooltiptext" style={{ textAlign: alignment }}>
                {tooltipText}
            </span>
            <p>{tooltipText}</p>
        </div>
    );
};

Tooltip.defaultProps = {
    text: 'Tooltip text',
    alignment: 'left',
};

export default Tooltip;
