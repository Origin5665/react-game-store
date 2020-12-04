import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartImage from '../assets/images/oops.webp'

const EmptyCart = () => {
   return (
      <div className="content">
         <div className="container container--cart">
            <div className="cart cart--empty">
               <h2>Корзина пустая </h2>

               <img src={emptyCartImage} alt="Empty cart" />
               <Link to="/" className="button button--black"><span>Вернуться назад</span></Link>
            </div>
         </div>
      </div>
   )
}

export default EmptyCart
