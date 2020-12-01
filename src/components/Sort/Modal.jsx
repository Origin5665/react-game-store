import React from 'react'
import uuid from 'react-uuid'

const Modal = ({ selectedItemPopup, setSelectedItemPopup, setIsVisible }) => {

   const sortTypes = [
      { name: "Популярное", type: 'popular' },
      { name: "Цена", type: "price" },
      { name: "Алфавит", type: "alphabet" }
   ];

   const isSelectedItem = (element) => {
      setSelectedItemPopup(element)
      setIsVisible(false)
   }

   console.log("rendered sort")
   return (
      <div className="sort__popup">
         <ul>
            {sortTypes.map(item =>
               <li className={selectedItemPopup === item.name ? "active" : null}
                  onClick={() => { isSelectedItem(item.name) }}
                  key={uuid()}>
                  {item.name}
               </li>)}
         </ul >
      </div >
   )
}

export default Modal
