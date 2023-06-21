import React from 'react';
import './Button.css';
import iconLeft from '/src/stories/assets/image.png';
import Image from "next/image";

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
  icon?: 'None' | 'Left' | 'Right' | 'Only';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'grey',
  size = 'md',
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
      {(icon === 'Left' && state !== 'Skeleton') && <span><img src="test" className="icon-left" />{label}</span>}
      {icon === 'Only' && <Image src={iconLeft} alt={''} className={'icon-left'}/>}
      {(icon === 'None' && state !== 'Skeleton') && <span>{label}</span>}
      {(icon === 'Right' && state !== 'Skeleton') && <span>{label}<img src="src/stories/assets/image.png" className="icon-left" /></span>}
      {state === 'Skeleton' && <span></span>}
    </button>
  );
};

export default Button;
