import React from 'react';
import './Toast.css';
import greenCheck from 'remixicon/icons/System/checkbox-circle-line.svg';
import redDanger from 'remixicon/icons/System/spam-2-line.svg';
import blueInfo from 'remixicon/icons/System/information-line.svg';
import yellowWarn from 'remixicon/icons/System/alert-line.svg';
import close from 'remixicon/icons/System/close-line.svg';
import Image from "next/image";

export interface ToastProps {
    toastStyle: 'Danger' | 'Warning' | 'Success' | 'Information';
    input: string;
}

export const Toast = ({
    toastStyle = 'Information',
    input = 'This is a toast message',
    ...props
}: ToastProps) => {
    let toastLabel = '';
    let toastImg;

    switch (toastStyle) {
        case 'Danger':
            toastLabel = 'red';
            toastImg = redDanger;
            break;
        case 'Warning':
            toastLabel = 'orange';
            toastImg = yellowWarn;
            break;
        case 'Success':
            toastLabel = 'green';
            toastImg = greenCheck;
            break;
        case 'Information':
            toastLabel = 'blue';
            toastImg = blueInfo;
            break;
        default:
            toastLabel = 'toast';
            break;
    }

    return <div className={`rebirth-toast ${toastLabel}`}>
        <div className={'rebirth-toast-img-container'}>
            <Image src={toastImg} alt={''} className={`rebirth-toast-img`} />
        </div>
        <div className={'rebirth-toast-label-container'}>
            <span className={'toast-label'}>{input}</span>
            <Image src={close} alt={'close'} className={'close-button'} />
        </div>
    </div>;
};

export default Toast;
