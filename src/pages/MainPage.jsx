import React from 'react';
import { Card, CategoriesGroup, Sort, Spinner } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setNewCategory } from '../redux/reducer/filtersReducer';
import { fetchDataStore } from '../redux/reducer/storeReducer';
import { setCart } from '../redux/reducer/cartReducer';

const MainPage = React.memo(() => {

   const CategoryesType = React.useMemo(() => ["Экшен", "Хоррор", "Приключение", "Ролевые", "Гонки"], []);
   const dispatch = useDispatch();

   /* Состояние загрузки */
   const [isLoading, setIsLoading] = React.useState(false)

   /* Обращаемся к хранилищу */
   const items = useSelector(({ store }) => store.dataStore);
   const cartItems = useSelector(({ cart }) => cart.cart);
   const { category, sortBy } = useSelector(({ filters }) => filters);


   /* Получаем товары с базы данных */
   React.useEffect(() => {
      const fetch = async () => {
         setIsLoading(true)
         await dispatch(fetchDataStore(category, sortBy))
         setIsLoading(false)
      }
      fetch()
   }, [dispatch, category, sortBy])


   /* Получить товар по индексу */
   const getCategoryIndex = React.useCallback(index => dispatch(setNewCategory(index)), [dispatch]);
   /* Добавить товар в карзину */
   const addObjToCart = React.useCallback(obj => dispatch(setCart(obj)), [dispatch]);

   return (
      <div className="content">
         <div className="container">
            <div className="content__top">
               <CategoriesGroup
                  activeCategory={category}
                  getCategoryIndex={getCategoryIndex}
                  categoryesType={CategoryesType} />
               <Sort activeSortBy={sortBy.type} />
            </div>
            <h2 className="content__title">Все игры</h2>
            <div className="content__items">
               {!isLoading
                  ? items.map(item => <Card
                     countCurrentObj={cartItems[item.id] && cartItems[item.id].length}
                     addObjToCart={addObjToCart}
                     key={item.id}
                     {...item} />)
                  : <Spinner />
               }
            </div>
         </div>
      </div>
   );
});

export default MainPage;
