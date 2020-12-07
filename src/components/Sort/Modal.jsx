import React from 'react'
import uuid from 'react-uuid'


const Modal = ({ sortTypes, activeSortType, isSelectedItem }) => {

   return (
      <div className="sort__popup">
         <ul>
            {sortTypes.map(item =>
               <li className={activeSortType === item.name ? "active" : null}
                  onClick={() => { isSelectedItem(item) }}
                  key={uuid()}>
                  {item.name}
               </li>)}
         </ul >
      </div >
   );
};

export default Modal
