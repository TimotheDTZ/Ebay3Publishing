import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'grey';
  /**
   * Is there outline?
   */
  outline?: boolean;
  /**
   * Ghost button?
   */
  ghost?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'grey',
  size = 'md',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = (color === 'primary') ? 'storybook-button--primary' : 'storybook-button--grey';
  const outlineGhost;
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      <div>{label}</div>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
