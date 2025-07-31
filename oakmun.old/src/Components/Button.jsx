import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline','btn--r', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
   ? buttonSize 
   : SIZES[0];

   const buttonClass = `btn ${checkButtonStyle} ${checkButtonSize}`;

   if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    
      <button
        className={buttonClass}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    
  );
};