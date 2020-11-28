import React from 'react'
import { Link, Route } from 'react-router-dom'
import ButtonCart from './ButtonCart'
import HeaderLogo from './HeaderLogo'


const Header = () => {
   return (
      <div className="header">
         <div className="container">
            <Link to="/">
               <HeaderLogo />
            </Link>
            <Link to="/cart">
               <Route path="/" exact>
                  <ButtonCart />
               </Route>
            </Link>
         </div>
      </div>
   )
}

export default Header
