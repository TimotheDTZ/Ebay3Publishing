// RadioGroup.tsx
import React from 'react';
import './RadioGroup.css';

export interface Option {
    label: string;
    value: string;
}

export interface RadioGroupProps {
    position: 'Stacked' | 'Inline';
    withLabel: boolean;
    title?: string;
    options: Option[];
}

export const RadioGroup = ({
    position,
    withLabel,
    title,
    options,
    ...props
}: RadioGroupProps) => {
    return (
        <div className={`radio-group`}>
            {withLabel && title && <div className="radio-group title">{title}</div>}
            <div className={`radio-group-options ${position}`}>
                {options.map((option) => (
                    <label key={option.value}>
                        <input type="radio" name="radio-group" value={option.value} />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};
export default RadioGroup;