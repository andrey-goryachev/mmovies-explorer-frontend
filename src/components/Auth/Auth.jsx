import React from 'react';
import './Auth.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {paths} from "../../utils/conts";
import AuthInput from "../AuthInput/AuthInput";

function Auth({header, buttonText, isRegister}) {
  return (
    <div className={'auth'}>
      <Logo/>
      <h2 className={'auth__header'}>{header}</h2>
      <form className={'auth__form'} name={'login'}>
        <div className={'auth__inputs'}>
          <AuthInput idTag={'username'}
                     typeInput={'text'}
                     placeholder={'Виталий'}
                     labelText={'Имя'}
                     required={true}
                     minLength={3}
          />
          <AuthInput idTag={'email'}
                     typeInput={'email'}
                     placeholder={'pochta@yandex.ru'}
                     labelText={'E-mail'}
                     required={true}
          />
          <AuthInput idTag={'password'}
                     typeInput={'password'}
                     placeholder={'Пароль'}
                     labelText={'Пароль'}
                     required={true}
                     minLength={8}
          />
        </div>
        <button
          className='auth-form__button'
          type='submit'
        >
          {buttonText}
        </button>
        {isRegister
          ?
          <span className='auth-form__text'>
            Уже зарегистрированы?{' '}
            <Link
              className='auth-form__link'
              to={paths.signup}
            >
              Войти
            </Link>
          </span>
          :
          <span className='auth-form__text'>
            Ещё не зарегистрированы?{' '}
            <Link
              className='auth-form__link'
              to={paths.signin}
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
