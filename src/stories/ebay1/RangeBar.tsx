import React from 'react';
import './RangeBar.css';

interface RangeBarProps {
    complemention: string;
    onChange: (value: string) => void;
}

export const RangeBar = ({
    complemention = '0%',
    ...props
}: RangeBarProps) => {
    const getSliderClass = () => {
        switch (complemention) {
            case '25%':
                return 'slider25';
            case '50%':
                return 'slider50';
            case '75%':
                return 'slider75';
            case '100%':
                return 'slider100';
            default:
                return '';
        }
    };


    return (
        <div className="RangeBar">
            <div className={`slider ${getSliderClass()}`} data-value={complemention} />
        </div>
    );
};

export default RangeBar;
