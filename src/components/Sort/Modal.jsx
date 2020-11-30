import React from 'react'
import uuid from 'react-uuid'

const Modal = ({ items, selectedItemPopup, setSelectedItemPopup, setIsVisible }) => {


   const isSelectedItem = (element) => {
      setSelectedItemPopup(element)
      setIsVisible(false)
   };

   return (
      <div className="sort__popup">
         <ul>

            {items.map(item =>
               <li className={selectedItemPopup === item.type ? "active" : null}
                  onClick={() => { isSelectedItem(item.name) }}
                  key={uuid()}>{item.name}</li>)}
         </ul >
      </div >
   )
}

export default Modal
