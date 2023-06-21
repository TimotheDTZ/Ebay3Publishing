import React, { useState } from 'react';
import './Dropdown.css';

export interface DropdownProps {
    isOpen: boolean;
    size: 'lg' | 'md';
    direction: 'left' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const Dropdown = ({
    isOpen = false,
    size = 'md',
    direction = 'bottom-left',
}: DropdownProps) => {
    const [showOptions, setShowOptions] = useState(isOpen);

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className={`dropdown dropdown--${size}`}>
            <div className="dropdown__icon" onClick={handleToggleOptions}>
                <img src="test" className="icon-left" />
            </div>
            {showOptions && (
                <div className={`dropdown__options show dropdown__options--${direction}`}>
                    <div className="dropdown__option">Label 1</div>
                    <div className="dropdown__option">Label 2</div>
                    <div className="dropdown__option">Label 3</div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
