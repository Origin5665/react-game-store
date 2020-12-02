import React from 'react'

import { Link } from 'react-router-dom'
import ButtonCart from './ButtonCart'
import HeaderLogo from './HeaderLogo'


const Header = () => {



   return (
      <div className="header">
         <div className="container">
            <Link to="/">
               <HeaderLogo />
            </Link>
            <ButtonCart />
         </div>
      </div>
   )
}

export default Header
