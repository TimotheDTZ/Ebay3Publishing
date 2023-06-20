import React from 'react';
import './RatingsRebirth.css';

interface RatingsRebirthProps {
    size?: 'Sm' | 'Md';
    showLink?: boolean;
    rate?: number;
}

/**
 * Component for displaying ratings with stars
 */
export const RatingsRebirth = ({
    size = 'Md',
    showLink = false,
    rate = 0,
}: RatingsRebirthProps) => {
    const filledStars = Math.floor(rate);
    const hasHalfStar = rate % 1 !== 0;

    const getStarClassName = (index: number) => {
        if (index < filledStars) {
            return 'RatingsRebirth__star RatingsRebirth__star--filled';
        }
        if (index === filledStars && hasHalfStar) {
            return 'RatingsRebirth__star RatingsRebirth__star--half-filled';
        }
        return 'RatingsRebirth__star';
    };

    return (
        <div className={`RatingsRebirth RatingsRebirth--size-${size}`}>
            {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={getStarClassName(index)} />
            ))}
            {showLink && <a href="#" className="RatingsRebirth__link">Link</a>}
        </div>
    );
};

export default RatingsRebirth;
