import React from 'react';
import './AlertRebirth.css';
import greenCheck from 'remixicon/icons/System/checkbox-circle-fill.svg';
import redDanger from 'remixicon/icons/System/spam-2-fill.svg';
import blueInfo from 'remixicon/icons/System/information-fill.svg';
import yellowWarn from 'remixicon/icons/System/alert-fill.svg';
import yellowTrick from 'remixicon/icons/Others/lightbulb-fill.svg';

import Image from "next/image";

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
    let alertImg;

    switch (alertStyle) {
        case 'danger':
            buttonClassName = 'danger';
            labelClassName = 'red';
            alertLabel = 'Alert label';
            alertImg = redDanger;
            break;
        case 'success':
            buttonClassName = 'success';
            labelClassName = 'green';
            alertLabel = 'Alert label';
            alertImg = greenCheck;
            break;
        case 'information':
            buttonClassName = 'information';
            labelClassName = 'blue';
            alertLabel = 'Alert label';
            alertImg = blueInfo;
            break;
        case 'warning':
            buttonClassName = 'warning';
            labelClassName = 'orange';
            alertLabel = 'Alert label';
            alertImg = yellowWarn;
            break;
        case 'trick':
            buttonClassName = 'trick';
            labelClassName = 'orange';
            alertLabel = 'Alert label';
            alertImg = yellowTrick;
            break;
        default:
            break;
    }

    return (
        <div>
            <button className={`alert-button ${buttonClassName}`}>
                <Image src={alertImg} alt={'Alert icon'} className={'icon'} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {alertLabel && <span className={`label ${labelClassName}`}>{alertLabel}</span>}
                    {(buttonClassName === "trick") && <span className={`label ${labelClassName}`}>{alertLabel}</span>}
                </div>
            </button>
        </div>
    );
};

export default AlertRebirth;
