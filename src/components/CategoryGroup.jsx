import React from 'react'
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

const CategoriesGroup = React.memo(({ items, activeCategory, getCategoryIndex }) => {

   const [selectedItem, setSelectedItem] = React.useState(null);


   const onSelectedItem = React.useCallback((item, index) => {
      setSelectedItem(item)
      getCategoryIndex(index)
   }, [])



   return (
      <div className="categories">
         <ul>
            <li onClick={() => onSelectedItem(null, null)} className={selectedItem === null ? "active" : null}>Все</li>
            {items && items.map((item, index) =>
               <li className={selectedItem === item ? "active" : undefined}
                  onClick={() => onSelectedItem(item, index)}
                  key={uuid()}>
                  {item}
               </li>)}
         </ul>
      </div>
   )
})

CategoriesGroup.propTypes = {
   activeCategory: PropTypes.number,
   getCategoryIndex: PropTypes.func,
   items: PropTypes.arrayOf(PropTypes.string.isRequired),


};

CategoriesGroup.defaultProps = {
   items: [],
   getCategoryIndex: null,


};

export default CategoriesGroup;
