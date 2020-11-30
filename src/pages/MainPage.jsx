import React from 'react';
import { Card, CategoriesGroup, Sort } from '../components';
import Spinner from '../components/common/Spinner';
// import uuid from 'react-uuid';
const MainPage = ({ data }) => {




   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <CategoriesGroup items={["Экшен", "Хоррор", "Приключение", "Ролевые", "Гонки"]} />
               <Sort items={["Популярное", "Цена", "Алфавит"]} />
            </div>
            <h2 className="content__title">Все игры</h2>
            <div className="content__items">

               {data ? data.map(item => <Card key={item.id} {...item} />) : <Spinner />}
            </div>
         </div>
      </div>
   );
};

export default MainPage;
