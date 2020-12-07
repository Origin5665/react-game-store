import React from 'react';
import ButtonCart from './ButtonCart';
import HeaderLogo from './HeaderLogo';

const Header = () => {

   return (
      <div className="header">
         <div className="container">

            <HeaderLogo />

            <ButtonCart />
         </div>
      </div>
   )
}

export default Header
