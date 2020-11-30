import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
const Card = ({ name, types, edition, imageUrl, price }) => {

   const consoleTypes = ["Playstation", "Xbox"]
   const editionTypes = ["Standart", "Delux", "Ultimate"]

   const [activeType, setActiveType] = React.useState(types[0]);
   const [activeTypeEdition, setActiveTypeEdition] = React.useState(edition[0]);

   const consoleSelectedType = (index) => {
      setActiveType(index)
   };

   const editionSelectedType = (index) => {
      setActiveTypeEdition(index)
   };

   return (
      <div className="pizza-block">
         <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Обложка игры"
         />
         <h4 className="pizza-block__title">{name}</h4>
         <div className="pizza-block__selector">
            {/* Types.Start */}
            <ul>
               {consoleTypes && consoleTypes.map((item, index) =>
                  <li
                     onClick={() => consoleSelectedType(index)}
                     className={classNames({
                        "active": activeType === index,
                        "disabled": !types.includes(index)

                     })} key={item}>{item}</li>)}
            </ul>
            <ul>
               {editionTypes && editionTypes.map((item, index) =>
                  <li
                     onClick={() => editionSelectedType(editionTypes[index])}
                     className={classNames({
                        active: activeTypeEdition === editionTypes[index],
                        disabled: !edition.includes(editionTypes[index])
                     })} key={item}>{item}</li>)}
               {/* Types.End */}
            </ul>
         </div>
         <div className="pizza-block__bottom">
            <div className="pizza-block__price">{price} ₽</div>
            <div className="button button--outline button--add">
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  />
               </svg>
               <span>Добавить</span>
               <i>2</i>
            </div>
         </div>
      </div >
   );
};

Card.propTypes = {
   name: PropTypes.string,
   price: PropTypes.number,
   edition: PropTypes.arrayOf(PropTypes.string.isRequired),
   types: PropTypes.arrayOf(PropTypes.number.isRequired),
   imageUrl: PropTypes.string
};

Card.defaultProps = {
   types: [],
   name: '',
   edition: [],
   imageUrl: '',
   price: 0
};

export default Card;
