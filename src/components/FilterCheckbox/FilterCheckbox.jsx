import React from 'react';
import './FilterCheckbox.css'

function FilterCheckbox({checkboxShortMovies, handleCheckboxShortMovies}) {
  return (
    <label className={'label-checkbox'}>
      <input className={'checkbox'}
             type={"checkbox"}
             checked={!!checkboxShortMovies}
             onChange={handleCheckboxShortMovies}
      />
      <span className={'visible-checkbox'}></span>
      <span className={'label-checkbox__text'}>Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
