import React, { useState } from 'react';
import './ToggleRebirth.css';

type ToggleRebirthProps = {
    label?: boolean;
    checked?: boolean;
};

export const ToggleRebirth = ({
    label = false,
    checked = false,
    ...props
}: ToggleRebirthProps) => {
    const [toggleState, setToggleState] = useState(checked);

    const handleToggle = () => {
        setToggleState(!toggleState);
    };

    return (
        <div className="toggle-container">
            <label className="toggle-label">{label && 'Toggle Label'}</label>
            <div
                className={`toggle ${toggleState ? 'positive' : 'negative'} ${checked ? 'positive' : 'negative'
                    }`}
                onClick={handleToggle}
            >
                {toggleState ? 'Yes' : 'No'}
            </div>
        </div>
    );
};

export default ToggleRebirth;
