import React from 'react';
import './CheckBoxLabel.css';

export interface CheckBoxLabelProps {
    label: 'Label Only' | 'Label + Helper' | 'Label + Error';
}

const CheckBoxLabel: React.FC<CheckBoxLabelProps> = ({ label }) => {
    return (
        <div className="checkbox-label">
            <label>Label</label>
            {label === 'Label + Helper' && <div className="helper">Helper</div>}
            {label === 'Label + Error' && <div className="error">Error</div>}
        </div>
    );
};

export default CheckBoxLabel;
