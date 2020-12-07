import React from 'react';
import spinner from '../../assets/spinner.svg';

const Spinner = () => {
   return (
      <div className={"spinner__wrapper"}>
         <img className="spinner__image" src={spinner} alt="Состояние загрузки" />
      </div>
   );
};
export default Spinner
