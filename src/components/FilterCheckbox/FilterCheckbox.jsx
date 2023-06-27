import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox(props) {
  return (
    <label className={'label-checkbox'}>
      <input className={'checkbox'} type={"checkbox"}  defaultChecked={true}/>
      <span className={'visible-checkbox'}></span>
      <span className={'label-checkbox__text'}>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
