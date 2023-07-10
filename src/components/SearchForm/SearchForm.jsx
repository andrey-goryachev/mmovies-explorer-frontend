import React, {useContext, useState} from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({searchText , changeSearchText}) {
  const [errorInput, setErrorInput] = useState('')
  const [inputValue, setInputValue] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    if (inputValue === '') {
      setErrorInput('Нужно ввести ключевое слово')
      return
    }
    changeSearchText(inputValue)
  }

  const changeInput = (event) => {
    setInputValue(event.target.value)
    setErrorInput('')
  }


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
                 value={inputValue}
          />
          <button className={'button search-form__button'}
                  type="submit"

          ></button>
        </div>
        <p className={'search-form__error'}>{errorInput ? errorInput : ''}</p>
        <FilterCheckbox/>
      </form>
    </div>
  );
}

export default SearchForm;
