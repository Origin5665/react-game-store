import React from 'react'
import uuid from 'react-uuid'
import { useDispatch } from 'react-redux'

const Modal = ({ setNewSort, sortTypes, activeSortType, setIsVisible }) => {
   console.log(activeSortType);
   const dispatch = useDispatch();

   const isSelectedItem = (type) => {
      setIsVisible(false)
      dispatch(setNewSort(type))
   };


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
