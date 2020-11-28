import React from 'react'
import { Card, CategoriesGroup, Sort } from '../components'

const MainPage = () => {






   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <CategoriesGroup />
               <Sort items={["Популярное", "Цена", "Алфавит"]} />
            </div>
            <h2 className="content__title">Все игры</h2>
            <div className="content__items">
               <Card />
            </div>
         </div>
      </div>
   )
}

export default MainPage;
