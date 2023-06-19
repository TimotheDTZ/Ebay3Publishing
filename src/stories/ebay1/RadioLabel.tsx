// RadioLabel.tsx
import React from 'react';
import './RadioLabel.css';

export interface RadioLabelProps {
    withLabel: boolean;
    helperText: string;
    errorText: string;
    option: 'Label Only' | 'Label + Helper' | 'Label + Error';
}

export const RadioLabel = (
    {
        withLabel = true,
        helperText = "Helper text",
        errorText = "Error text",
        option = 'Label Only'
    }: RadioLabelProps) => {
    return (
        <div className="radio-label">
            {withLabel && <div className="label">Label</div>}
            {option === 'Label + Helper' && <div className="helper">{helperText}</div>}
            {option === 'Label + Error' && <div className="error">{errorText}</div>}
        </div>
    );
};

export default RadioLabel;
