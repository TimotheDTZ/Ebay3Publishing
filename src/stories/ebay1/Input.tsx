// Input.tsx
import React from 'react';
import './Input.css';

export interface InputProps {
    label: string;
    state: 'default' | 'focus' | 'hover' | 'pressed' | 'valid' | 'error' | 'disabled';
    withValue: boolean;
    value?: string;
    helper: boolean;
    helperText?: string;
    icon: 'none' | 'left' | 'right' | 'button';
}

export const Input = ({
    label = 'Label',
    state = 'default',
    withValue = false,
    value = 'Value',
    helper = false,
    helperText = 'Helper text',
    icon = 'none',
}: InputProps) => {
    const inputClass = `input ${state}`;

    return (
        <div>
            <input className={inputClass} type="text" value={withValue ? value : ''} />
            {helper && <div>{helperText}</div>}
            {icon === 'left' && <div>Icon à gauche de l input</div>}
            {icon === 'right' && <div>Bouton à droite de l input</div>}
            {icon === 'button' && <button>Button</button>}
        </div>
    );
};
