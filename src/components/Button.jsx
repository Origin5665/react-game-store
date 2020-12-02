import React from 'react'
import classNames from 'classnames';

const Button = ({ children, outline, addObjToCart, className }) => {
   return (
      <button onClick={addObjToCart} className={classNames("button", className, { "button--outline": outline })} >
         { children}
      </button >
   );
};

export default Button;
