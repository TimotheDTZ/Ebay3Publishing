// SearchBar.tsx
import React, { useState } from 'react';
import './SeachBar.css';

export interface SearchBarProps {
    attribute?: 'Icon left' | 'Icon right' | 'is open';
    hover?: boolean;
}

export const SearchBar = ({ attribute = 'Icon left', hover = false, ...props }: SearchBarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle input change here
    };

    return (
        <div className={`container`}>

            {attribute === 'Icon left' && <img src="/path/to/left-icon.png" alt="Icon Left" className="icon-left" />}
            {attribute === 'Icon right' && <img src="/path/to/right-icon.png" alt="Icon Right" className="icon-right" />}
            <input type="text" className="input" onChange={handleInputChange} />

            {attribute === 'is open' && (
                <div className="location-list">
                    <p>Location 1</p>
                    <p>Location 2</p>
                    <p>Location 3</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
