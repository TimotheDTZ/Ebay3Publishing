import React from 'react';
import './AlertLabel.css';

type AlertLabelProps = {
    withTitle: boolean;
    withLink: boolean;
    title: string;
    onClick: () => void;
};

export const AlertLabel = ({
    withTitle,
    withLink,
    title,
    onClick,
    ...props
}: AlertLabelProps) => {
    return (

        <div className="alert-label" style={{ display: 'flex', flexDirection: 'column', }} >
            <button onClick={onClick}>
                <img src="image-path.png" alt="Button Image" />
                <span className="title">{title}</span>
            </button>
            {withTitle && (
                <div className="alert-label">
                    <span className="title">{title}</span>
                    <img src="image-path.png" alt="Button Image" />
                </div>
            )}
            {withLink && (
                <div className="alert-label">
                    <a href="#">Clickable Link</a>
                </div>
            )}
        </div>
    );
};

export default AlertLabel;
