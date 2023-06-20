import React from 'react';
import './Promo.css';
import NavTab from "../NavTab/NavTab";

function Promo(props) {
  return (
    <div className={'promo-container'}>
      <div className={'promo'}>
        <h1 className={'promo__header'}>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <NavTab/>
      </div>
    </div>
  );
}

export default Promo;
