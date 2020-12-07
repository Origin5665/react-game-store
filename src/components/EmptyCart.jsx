import React from 'react';
import { Link } from 'react-router-dom';
import emptyCartImage from '../assets/images/oops.webp';
import { Button } from '../components/'

const EmptyCart = () => {
   return (
      <div className="content">
         <div className="container container--cart">
            <div className="cart cart--empty">
               <h2>Корзина пустая </h2>
               <img src={emptyCartImage} alt="Ваша карзина пустая" />
               <Link to="/" ><Button className="button button--black">Вернуться назад</Button></Link>
            </div>
         </div>
      </div>
   )
}

export default EmptyCart
