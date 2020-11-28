import React from 'react'
import uuid from 'react-uuid';




const CategoriesGroup = ({ items }) => {

   const [selectedItem, setSelectedItem] = React.useState(null);






   const onSelectedItem = item => setSelectedItem(item)



   return (
      <div className="categories">
         <ul>
            <li onClick={() => setSelectedItem(null)} className={selectedItem === null ? "active" : null}>Все</li>
            {items && items.map(item =>
               <li className={selectedItem === item ? "active" : undefined}
                  onClick={() => onSelectedItem(item)}
                  key={uuid()}>
                  {item}
               </li>)}
         </ul>
      </div>
   )
}

export default CategoriesGroup;
