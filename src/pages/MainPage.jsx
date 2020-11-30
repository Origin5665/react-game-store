import React from 'react';
import { Card, CategoriesGroup, Sort } from '../components';
import Spinner from '../components/common/Spinner';
import SortContainer from '../components/containers/SortContainer';

const MainPage = ({ dataStore }) => {



   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <CategoriesGroup
                  items={["Экшен", "Хоррор", "Приключение", "Ролевые", "Гонки"]} />
               <SortContainer />
            </div>
            <h2 className="content__title">Все игры</h2>
            <div className="content__items">

               {dataStore ? dataStore.map(item => <Card key={item.id} {...item} />) : <Spinner />}
            </div>
         </div>
      </div>
   );
};


export default MainPage;
