import React from 'react';
import Modal from './Modal';
import classnames from 'classnames'
import { setNewSort } from '../../redux/reducer/filtersReducer';
import { sortTypes } from '../../utils/utils';
import { useDispatch } from 'react-redux'

const Sort = React.memo(({ activeSortBy }) => {
   const dispatch = useDispatch();
   /* Ссылка на DOM элемент */
   const sortRef = React.useRef();

   /* Состояние модального окна */
   const [isVisible, setIsVisible] = React.useState(false);

   /* Активируем слушатель для модального окна */
   React.useEffect(() => { document.body.addEventListener('click', documentHandler) }, []);

   /* Определяет активный тип сортировки */
   const activeSortType = sortTypes.find((item) => item.type === activeSortBy).name;

   /* Изменяем состояние модального окна */
   const toggleHandler = () => setIsVisible(!isVisible);

   /* Закрываем модальное окно по клику */
   const documentHandler = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      (!path.includes(sortRef.current)) && setIsVisible(false);
   };

   /* Выбираем тип сортировки */
   const isSelectedItem = (type) => { setIsVisible(false); dispatch(setNewSort(type)) };

   return (
      <div ref={sortRef} className="sort">
         <div className="sort__label">
            <svg className={classnames("sort__label-icon", isVisible && "sort__label-icon_active")}
               width="10"
               height="6"
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b >Сортировка по:</b>
            <span onClick={toggleHandler}>{activeSortType}</span>
         </div>
         {isVisible &&
            <Modal
               isSelectedItem={isSelectedItem}
               sortTypes={sortTypes}
               activeSortType={activeSortType}
            />}
      </div>
   );
});

export default Sort;
