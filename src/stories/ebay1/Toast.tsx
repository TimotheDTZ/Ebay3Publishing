import React from 'react';
import './Toast.css';

export interface ToastProps {
    toastStyle: 'Danger' | 'Warning' | 'Success' | 'Information';
    input: string;
}

export const Toast = ({
    toastStyle = 'Information',
    input = 'This is a toast message',
    ...props
}: ToastProps) => {
    const getToastClass = () => {
        switch (toastStyle) {
            case 'Danger':
                return 'toast toast-danger';
            case 'Warning':
                return 'toast toast-warning';
            case 'Success':
                return 'toast toast-success';
            case 'Information':
                return 'toast toast-information';
            default:
                return 'toast';
        }
    };

    return <div className={getToastClass()}>{input}</div>;
};

export default Toast;
