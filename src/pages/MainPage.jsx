import React from 'react';
import { Card, CategoriesGroup, Sort, Spinner } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setNewCategory } from '../redux/reducer/filtersReducer';
import { fetchDataStore } from '../redux/reducer/storeReducer';
import { setCart } from '../redux/reducer/cartReducer';


const MainPage = () => {

   const CategoryesType = ["Экшен", "Хоррор", "Приключение", "Ролевые", "Гонки"];

   /* hooks */
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = React.useState(false)

   const items = useSelector(({ store }) => store.dataStore);
   const { category, sortBy } = useSelector(({ filters }) => filters);
   const cartItems = useSelector(({ cart }) => cart.cart);


   React.useEffect(() => {

      const fetch = async () => {
         setIsLoading(true)
         await dispatch(fetchDataStore(category, sortBy))
         setIsLoading(false)
      }
      fetch()
   }, [category, sortBy])

   /* function */

   const getCategoryIndex = index => dispatch(setNewCategory(index))
   const addObjToCart = obj => dispatch(setCart(obj));

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <CategoriesGroup
                  activeCategory={category}
                  getCategoryIndex={getCategoryIndex}
                  items={CategoryesType} />
               <Sort activeSortBy={sortBy.type} />
            </div>
            <h2 className="content__title">Все игры</h2>
            <div className="content__items">
               {!isLoading
                  ? items.map(item => <Card
                     countCurrentObj={cartItems[item.id] && cartItems[item.id].length}
                     addObjToCart={addObjToCart}
                     key={item.id}  {...item} />)
                  : <Spinner />

               }
            </div>
         </div>
      </div>
   );
};


export default MainPage;
