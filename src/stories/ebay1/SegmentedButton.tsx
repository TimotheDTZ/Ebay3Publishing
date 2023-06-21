import React from 'react';
import './SegmentedButton.css';

export interface SegmentedButtonProps {
    segments: number;
    size: 'medium' | 'small';
}

export const SegmentedButton = ({ segments = 4, size = "medium", ...props }: SegmentedButtonProps) => {
    const renderSegments = () => {
        const segmentClass = size === 'medium' ? 'segmented-button__segment--medium' : 'segmented-button__segment--small';
        const segmentsArray = Array.from({ length: segments }, (_, index) => index + 1);

        return segmentsArray.map((segment) => (
            <div key={segment} className={`segmented-button__segment ${segmentClass}`}>
                Segment {segment}
            </div>
        ));
    };

    return <div className="segmented-button">{renderSegments()}</div>;
};

export default SegmentedButton;
