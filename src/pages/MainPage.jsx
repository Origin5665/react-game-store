import React from 'react';
import { Card, CategoriesGroup, Sort } from '../components';
import Spinner from '../components/common/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { setNewCategory } from '../redux/reducer/filtersReducer';



const MainPage = () => {

   const CategoryesType = ["Экшен", "Хоррор", "Приключение", "Ролевые", "Гонки"];

   const dispatch = useDispatch();

   const getCategoryIndex = (index) => {
      console.log((index));
      dispatch(setNewCategory(index))
   };

   const items = useSelector(({ store }) => store.dataStore);



   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <CategoriesGroup
                  getCategoryIndex={getCategoryIndex}
                  items={CategoryesType} />
               <Sort />
            </div>
            <h2 className="content__title">Все игры</h2>
            <div className="content__items">
               {items ? items.map(item => <Card key={item.id} {...item} />) : <Spinner />}
            </div>
         </div>
      </div>
   );
};


export default MainPage;
