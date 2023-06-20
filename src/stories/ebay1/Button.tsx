import React from 'react';
import './Button.css';

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
  /**
   * Button variant
   */
  variant?: 'Ghost' | 'Outline' | 'None';
  /**
   * Button state
   */
  state?: 'Default' | 'Disabled' | 'Focused' | 'Hovered' | 'Skeleton';
  /**
   * Icon position
   */
  icon?: 'None' | 'Left' | 'Right' | 'Icon Only';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'grey',
  size = 'md',
  backgroundColor,
  label,
  variant,
  state,
  icon,
  ...props
}: ButtonProps) => {
  const mode = color === 'primary' ? 'storybook-button--primary' : 'storybook-button--grey';
  const variantClass = variant ? `storybook-button--${variant.toLowerCase()}` : '';
  const stateClass = state ? `storybook-button--${state.toLowerCase()}` : '';
  const iconClass = icon ? `storybook-button--icon-${icon.toLowerCase().replace(' ', '-')}` : '';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode, variantClass, stateClass, iconClass].join(' ')}
      {...props}
    >
      {icon === 'Left' && <span><img src="test" className="icon-left" />{label}</span>}
      {icon === 'Icon Only' && <img src="test" />}
      {icon === 'None' && <span>{label}</span>}
      {icon === 'Right' && <span>{label}<img src="test" className="icon-left" /></span>}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

export default Button;
