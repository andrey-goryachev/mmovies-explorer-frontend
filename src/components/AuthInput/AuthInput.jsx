import React, {useRef, useState} from 'react';
import './AuthInput.css'

  function AuthInput({
                     idTag,
                     labelText,
                     placeholder,
                     typeInput,
                     minLength,
                     maxLength,
                     required
                   }) {
  const [errorInput, setErrorInput] = useState('')
  let refInput = useRef()
  const checkValidity = (input) => {
    if (!input.validity.valid) {
      return input.validationMessage
    } else {
      return ''
    }
  }

  const validationInput = (event) => {
    setErrorInput(checkValidity(event.target))
  }

  return (
    <div className={'auth__container-input'}>
      <label className={'auth__label'} htmlFor={idTag}>{labelText}</label>
      <input className={'auth__input'}
             id={idTag}
             type={typeInput}
             placeholder={placeholder}
             required={required}
             ref={refInput}
             onChange={validationInput}
             minLength={minLength}
             maxLength={maxLength}
      />
      <div className={'auth__error-validation'}>{errorInput ? errorInput : ''}</div>
    </div>
  );
}

export default AuthInput;
