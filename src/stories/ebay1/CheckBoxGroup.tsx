import React from 'react';
import './CheckBoxGroup.css';

export interface CheckBoxGroupProps {
    title: string;
    position: 'Stacked' | 'Inline';
    options: string[];
    selectedOptions: string[];
    onChange: (selectedOptions: string[]) => void;
}

export const CheckBoxGroup = ({
    title,
    position,
    options,
    selectedOptions,
    onChange,
    ...props
}: CheckBoxGroupProps) => {
    const handleChange = (option: string) => {
        const updatedSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((selectedOption) => selectedOption !== option)
            : [...selectedOptions, option];

        onChange(updatedSelectedOptions);
    };

    return (
        <div className={`checkbox-group ${position.toLowerCase()}`}>
            <h3>{title}</h3>
            {options.map((option) => (
                <label key={option} className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleChange(option)}
                    />
                    <span className="checkbox-checkmark"></span>
                    <span className="checkbox-label">{option}</span>
                </label>
            ))}
        </div>
    );
};

export default CheckBoxGroup;
