import React, {useEffect} from 'react';
import './Auth.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {paths} from "../../utils/conts";
import useValidationForm from "../../hooks/useValidationForm";

function Auth({header, buttonText, isRegister, errorAuth, handleAuth, fieldsBlocking}) {
  const { values, handleChange, resetForm, errors, isValid } = useValidationForm();

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAuth(values)
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <div className={'auth'}>
      <Logo/>
      <h1 className={'auth__header'}>{header}</h1>
      <form className={'auth__form'} name={'login'} onSubmit={handleSubmit}>
        <div className={'auth__inputs'}>
          {isRegister && <div className={'auth__container-input'}>
            <label className={'auth__label'} htmlFor={'name'}>{'Имя'}</label>
            <input className={`auth__input ${fieldsBlocking && 'auth__label_disabled'}`}
                   name={'name'}
                   id={'name'}
                   type={'text'}
                   placeholder={'Виталий'}
                   required={true}
                   onChange={handleChange}
                   title="Пожалуйста, введите только латиницу, кириллицу, пробел или дефис."
                   minLength={3}
                   maxLength={30}
                   value={values.name || ''}
                   readOnly={fieldsBlocking}
            />
            <div className={'auth__error-validation'}>{errors.name || ''}</div>
          </div>}
          <div className={'auth__container-input'}>
            <label className={`auth__label`} htmlFor={'email'}>{'E-mail'}</label>
            <input className={`auth__input ${fieldsBlocking && 'auth__label_disabled'}`}
                   name={'email'}
                   id={'email'}
                   type={'email'}
                   placeholder={'pochta@yandex.ru'}
                   required={true}
                   onChange={handleChange}
                   value={values.email || ''}
                   readOnly={fieldsBlocking}
            />
            <div className={'auth__error-validation'}>{errors.email || ''}</div>
          </div>

          <div className={'auth__container-input'}>
            <label className={'auth__label'} htmlFor={'password'}>{'Пароль'}</label>
            <input className={`auth__input ${fieldsBlocking && 'auth__label_disabled'}`}
                   name={'password'}
                   id={'password'}
                   type={'password'}
                   placeholder={'Пароль'}
                   required={true}
                   minLength={8}
                   maxLength={30}
                   onChange={handleChange}
                   value={values.password || ''}
                   readOnly={fieldsBlocking}
            />
            <div className={'auth__error-validation'}>{errors.password || ''}</div>
          </div>
        </div>
        {<div className={'auth__error'}>{errorAuth}</div>}
        <button
          className={`button auth__button ${(!isValid || fieldsBlocking) && 'auth__button_disabled'}`}
          type='submit'
          disabled={!isValid}
        >
          {buttonText}
        </button>
        {isRegister
          ?
          <span className='auth__text'>
            Уже зарегистрированы?{' '}
            <Link
              className='link auth__link'
              to={paths.signin}
            >
              Войти
            </Link>
          </span>
          :
          <span className='auth__text'>
            Ещё не зарегистрированы?{' '}
            <Link
              className='link auth__link'
              to={paths.signup}
            >
              Регистрация
            </Link>
          </span>
        }
      </form>
    </div>
  );
}

export default Auth;
