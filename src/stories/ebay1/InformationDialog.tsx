// InformationDialog.tsx
import React from 'react';
import './InformationDialog.css';

export interface InformationDialogProps {
    icon: string;
    title: string;
    text: string;
    breakpoints: 'sm (16px margin)' | 'sm (18px margin)' | 'md, xl 1440' | 'xl 1280';
    Status: 'Info' | 'Success' | 'Warning' | 'Danger';
    withAction: boolean;
}

export const InformationDialog = ({
    icon = "https://cdn1.iconfinder.com/data/icons/feather-2/24/info-16.png",
    title = 'Title',
    text = 'Text',
    breakpoints = 'sm (16px margin)',
    Status = 'Info',
    withAction = true,
}: InformationDialogProps) => {
    const renderActions = () => {
        switch (breakpoints) {
            case 'sm (16px margin)':
                return (
                    <div className="dialog-actions">
                        <button>Done</button>
                    </div>
                );
            case 'sm (18px margin)':
                return (
                    <div className="dialog-actions">
                        <button>Back</button>
                        <button>Done</button>
                    </div>
                );
            case 'xl 1280':
                return (
                    <div className="dialog-actions">
                        <button>Back</button>
                        <button>Done</button>
                    </div>
                );
            case 'md, xl 1440':
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
            <img src={icon} alt="icon" />
            <h2>{title}</h2>
            <p>{text}</p>
            {withAction && <div className="dialog-actions"><button>Done</button></div>}
        </div>
    );
};

export default InformationDialog;
