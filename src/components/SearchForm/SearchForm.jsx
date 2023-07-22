import React, {useContext, useEffect, useState} from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";


function SearchForm({handleSearchText, handleCheckboxShortMovies, checkboxShortMovies}) {
  const currentUser = useContext(CurrentUserContext)
  let location = useLocation()
  let pathLocation = location.pathname
  const [errorInput, setErrorInput] = useState('')
  const [inputValue, setInputValue] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    if (inputValue === '') {
      setErrorInput('Нужно ввести ключевое слово')
      return
    }
    handleSearchText(inputValue)
  }

  const changeInput = (event) => {
    setInputValue(event.target.value)
    setErrorInput('')
  }

  useEffect(() => {
    if (pathLocation === paths.movies && localStorage.getItem(`${currentUser.email}_searchText`)) {
      setInputValue(localStorage.getItem(`${currentUser.email}_searchText`))
    }
  }, [currentUser])


  return (
    <div className={'search-container'}>
      <form className={'search-form'}
            onSubmit={submitForm}
      >
        <div className={'search-form__container'}>
          <input className={'search-form__input'}
                 type="text"
                 placeholder={'Фильм'}
                 onChange={changeInput}
                 value={inputValue || ''}
          />
          <button className={'button search-form__button'}
                  type="submit"

          ></button>
        </div>
        <p className={'search-form__error'}>{errorInput ? errorInput : ''}</p>
        <FilterCheckbox checkboxShortMovies={checkboxShortMovies} handleCheckboxShortMovies={handleCheckboxShortMovies}/>
      </form>
    </div>
  );
}

export default SearchForm;
