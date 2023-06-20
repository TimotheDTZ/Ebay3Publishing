import React from 'react';
import './AlertRebirth.css';

interface AlertRebirthProps {
    alertStyle: 'danger' | 'success' | 'information' | 'warning' | 'trick';
}

export const AlertRebirth = ({
    alertStyle = 'danger',
    ...props
}: AlertRebirthProps) => {
    let buttonClassName = '';
    let labelClassName = '';
    let alertLabel = '';

    switch (alertStyle) {
        case 'danger':
            buttonClassName = 'danger';
            labelClassName = 'red';
            alertLabel = 'Alert label';
            break;
        case 'success':
            buttonClassName = 'success';
            labelClassName = 'green';
            alertLabel = 'Alert label';
            break;
        case 'information':
            buttonClassName = 'information';
            labelClassName = 'blue';
            alertLabel = 'Alert label';
            break;
        case 'warning':
            buttonClassName = 'warning';
            labelClassName = 'orange';
            alertLabel = 'Alert label';
            break;
        case 'trick':
            buttonClassName = 'trick';
            alertLabel = 'Alert label';
            break;
        default:
            break;
    }

    return (
        <div>
            <button className={`alert-button ${buttonClassName}`}>
                <img src="image.png" alt="Alert icon" className="icon" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {alertLabel && <span className={`label ${labelClassName}`}>{alertLabel}</span>}
                    {(buttonClassName === "trick") && <span className={`label ${labelClassName}`}>{alertLabel}</span>}
                </div>
            </button>
        </div>
    );
};

export default AlertRebirth;
