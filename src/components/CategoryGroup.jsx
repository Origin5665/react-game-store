import React from 'react'
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const CategoriesGroup = React.memo(({ categoryesType, getCategoryIndex }) => {

   /* Активная категория, по умолчанию null */
   const [selectedItem, setSelectedItem] = React.useState(null);

   /* Выбираем категорию */
   const onSelectedItem = (item, index) => { setSelectedItem(item); getCategoryIndex(index) };


   return (
      <div className="categories">
         <ul>
            <li onClick={() => onSelectedItem(null, null)} className={selectedItem === null ? "active" : null}>Все</li>
            {categoryesType && categoryesType.map((item, index) =>
               <li className={selectedItem === item ? "active" : undefined}
                  onClick={() => onSelectedItem(item, index)}
                  key={uuid()}>
                  {item}
               </li>)}
         </ul>
      </div>
   );
});

CategoriesGroup.propTypes = {
   getCategoryIndex: PropTypes.func,
   categoryesType: PropTypes.arrayOf(PropTypes.string.isRequired),
};

CategoriesGroup.defaultProps = {
   items: [],
   getCategoryIndex: null,
};

export default CategoriesGroup;
