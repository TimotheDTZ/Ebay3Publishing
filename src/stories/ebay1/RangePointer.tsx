import React from 'react';
import './RangePointer.css';

export interface RangePointerProps {
    status: 'Default' | 'Focus';
}

export const RangePointer = ({
    status = 'Default',
    ...props
}: RangePointerProps) => {
    const className = `RangePointer${status === 'Focus' ? ' focus' : ''}`;
    return <div className={className}></div>;
};

export default RangePointer;
