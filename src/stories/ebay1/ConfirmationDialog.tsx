// ConfirmationDialog.tsx
import React from 'react';
import './ConfirmationDialog.css';

export interface ConfirmationDialogProps {
    title: string;
    text: string;
    breakpoints: 'sm (16px margin)' | 'sm (18px margin)' | 'md, xl 1440' | 'xl 1280';
    actions: 'Single Button' | 'Double Button' | 'Button Link';
    hasCloseIcon: boolean;
}

export const ConfirmationDialog = ({
    title = 'Title',
    text = 'Text',
    breakpoints = 'sm (16px margin)',
    actions = 'Single Button',
    hasCloseIcon = true,
}: ConfirmationDialogProps) => {
    const renderActions = () => {
        switch (actions) {
            case 'Single Button':
                return (
                    <div className="dialog-actions">
                        <button>Done</button>
                    </div>
                );
            case 'Double Button':
                return (
                    <div className="dialog-actions">
                        <button>Back</button>
                        <button>Done</button>
                    </div>
                );
            case 'Button Link':
                return (
                    <div className="dialog-actions">
                        <button>Done</button>
                        <div className="link-label">Link Label</div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="confirmation-dialog">
            {hasCloseIcon && <div className="close-icon">X</div>}
            <h2>{title}</h2>
            <p>{text}</p>
            {renderActions()}
        </div>
    );
};

export default ConfirmationDialog;
