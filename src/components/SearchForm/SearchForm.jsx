import React from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <div className={'search-container'}>
      <form className={'search-form'}>
        <div className={'search-form__container'}>
          <input className={'search-form__input'} type="text" placeholder={'Фильм'} required={true}/>
          <button className={'button search-form__button'} type="submit"></button>
        </div>
        <FilterCheckbox/>
      </form>
    </div>
  );
}

export default SearchForm;
