import React from 'react';
import './RatingsRebirth.css';
import fullStar from '/src/stories/assets/star-fill.png';
import halfStar from '/src/stories/assets/star-fill-half.png';
import Image from "next/image";

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
    const rateClass = (rate.toString()).replace('.', '-');

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
        <div className={`RatingsRebirth RatingsRebirth--size-${size?.toLowerCase()} RatingsRebirth--rating-${rateClass}`}>
            <div className={'rating-star-container'}>
                <Image src={fullStar} alt={''} className={'star star1'}/>
                <Image src={halfStar} alt={''} className={'star star1-half'}/>
            </div>
            <div className={'rating-star-container'}>
                <Image src={fullStar} alt={''} className={'star star2'}/>
                <Image src={halfStar} alt={''} className={'star star2-half'}/>
            </div>
            <div className={'rating-star-container'}>
                <Image src={fullStar} alt={''} className={'star star3'}/>
                <Image src={halfStar} alt={''} className={'star star3-half'}/>
            </div>
            <div className={'rating-star-container'}>
                <Image src={fullStar} alt={''} className={'star star4'}/>
                <Image src={halfStar} alt={''} className={'star star4-half'}/>
            </div>
            <div className={'rating-star-container'}>
                <Image src={fullStar} alt={''} className={'star star5'}/>
                <Image src={halfStar} alt={''} className={'star star5-half'}/>
            </div>
            {showLink && <a href="#" className="RatingsRebirth__link">(11 ratings)</a>}
        </div>
    );
};

export default RatingsRebirth;
