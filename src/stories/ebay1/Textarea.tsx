import React from 'react';
import './Textarea.css';

export interface TextareaProps {
    label: string;
    withValue?: boolean;
    valueText?: string;
    styleSelector?: 'Valid' | 'Focus' | 'Disabled' | 'Hover' | 'Error' | 'Default';
    helper?: boolean;
}

export const Textarea = ({
    label,
    withValue = false,
    valueText = '',
    styleSelector = 'Default',
    helper = false,
    ...props
}: TextareaProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Ajoutez ici la logique pour gérer le changement de la valeur du Textarea
    };

    return (
        <div className={`textarea-container ${styleSelector}`}>
            {/* <label className="textarea-label">{label}</label> */}
            <textarea
                className={`textarea textarea-${styleSelector.toLowerCase()}`}
                id={'textarea'}
                value={withValue ? valueText : ''}
                onChange={handleChange}
                placeholder={'text'}
            />
            <label for="textarea" className={'textarea-label'}>{label}</label>
            {helper && <div className="textarea-helper">Texte d aide</div>}
        </div>
    );
};

export default Textarea;
