import React from 'react';
import './CheckBox.css';

interface CheckBoxProps {
    label?: boolean;
    checked?: 'Checked' | 'Indeterminate' | 'None';
    state?: 'Default' | 'Hover' | 'Focus' | 'Disabled' | 'Error';
    helper?: boolean;
}

export const CheckBox = ({
    label = false,
    checked = 'None',
    state = 'Default',
    helper = false,
    ...props
}: CheckBoxProps) => {
    const getCheckBoxClass = (): string => {
        let className = 'checkbox';

        if (state !== 'Default') {
            className += ` checkbox--${state.toLowerCase()}`;
        }

        return className;
    };

    const renderLabel = (): React.ReactNode => {
        if (label) {
            return <span className="checkbox-label">Label</span>;
        }
        return null;
    };

    const renderHelperText = (): React.ReactNode => {
        if (helper) {
            return <span className="checkbox-helper">Helper text</span>;
        }
        return null;
    };

    return (
        <div className={getCheckBoxClass()}>
            <label className="checkbox-container">
                <input type="checkbox" checked={checked === 'Checked'} />
                <span className="checkbox-checkmark"></span>
            </label>
            {renderLabel()}
            {renderHelperText()}
        </div>
    );
};

export default CheckBox;
