import React from 'react'
import uuid from 'react-uuid';

const CategoriesGroup = React.memo(({ items, getCategoryIndex }) => {

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

export default CategoriesGroup;
