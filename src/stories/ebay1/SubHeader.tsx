import React from 'react';
import './SubHeader.css';

export interface SubHeaderProps {
  device: 'Desktop' | 'Mobile' | 'Mobile w/data';
}

export const SubHeader = ({
  device,
  ...props
}: SubHeaderProps) => {
  return (
    <div className="subheader">
      {device === 'Desktop' && (
        <>
          <div className="subheader__logo">Logo</div>
          <div className="subheader__tab">Tous les produits</div>
          <div className="subheader__tab">Bon plans</div>
          <div className="subheader__tab">Enchères</div>
          <div className="subheader__tab">Produits recommandés</div>
        </>
      )}
      {device === 'Mobile' && (
        <>
          <div className="subheader__image">Image</div>
          <div className="subheader__input">
            <img src="left-icon.png" alt="Left Icon" />
            <input type="text" placeholder="Search" />
            <img src="right-icon.png" alt="Right Icon" />
          </div>
          <div className="subheader__image">Image</div>
        </>
      )}
      {device === 'Mobile w/data' && (
        <>
          <div className="subheader__image">Image</div>
          <div className="subheader__input">
            <img src="left-icon.png" alt="Left Icon" />
            <input type="text" placeholder="Iphone 14 pro max" />
            <img src="right-icon.png" alt="Right Icon" />
          </div>
          <div className="subheader__image">Image</div>
        </>
      )}
    </div>
  );
};

export default SubHeader;
