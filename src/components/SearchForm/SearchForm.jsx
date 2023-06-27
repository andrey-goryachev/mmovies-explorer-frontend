import React from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <div className={'search-container'}>
      <form className={'search-form'}>
        <input className={'search-form__input'} type="text" placeholder={'Фильм'}/>
        <button className={'search-form__button'} type="submit"></button>
      </form>
      <FilterCheckbox/>
    </div>
  );
}

export default SearchForm;
