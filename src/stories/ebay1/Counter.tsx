import React, { useState } from 'react';
import './Counter.css';

type CounterProps = {
    size?: 'lg' | 'md' | 'sm';
    dustbin?: boolean;
    disabled?: boolean;
    state?: 'default' | 'hover' | 'disabled';
    initialValue?: number;
};

export const Counter = ({
    size = 'md',
    dustbin = false,
    disabled = false,
    state = 'default',
    initialValue = 0,
    ...props
}: CounterProps) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const renderDustbin = () => {
        if (dustbin) {
            return <span className="dustbin">🗑️</span>;
        }
        return null;
    };

    const getSizeClass = () => {
        if (size === 'lg') {
            return 'counter-lg';
        } else if (size === 'sm') {
            return 'counter-sm';
        }
        return 'counter-md';
    };

    const getStateClass = () => {
        if (state === 'hover') {
            return 'hover';
        } else if (state === 'disabled') {
            return 'disabled';
        }
        return 'default';
    };

    return (
        <div
            className={`counter ${getSizeClass()} ${getStateClass()}`}
            onClick={disabled ? undefined : handleIncrement}>
            {(dustbin) && <span className="dustbin">🗑️</span>}
            {(!dustbin) && <button onClick={disabled ? undefined : handleDecrement}>-</button>}
            <span>{count}</span>
            <button onClick={disabled ? undefined : handleIncrement}>+</button>

        </div>
    );
};

export default Counter;
