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
      <h1 className={'auth__header'}>{header}</h1>
      <form className={'auth__form'} name={'login'}>
        <div className={'auth__inputs'}>
          {isRegister && <AuthInput idTag={'username'}
                      typeInput={'text'}
                      placeholder={'Виталий'}
                      labelText={'Имя'}
                      required={true}
                      minLength={3}
                      maxLength={30}
          />}
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
                     maxLength={30}
          />
        </div>
        <button
          className='button auth__button'
          type='submit'
        >
          {buttonText}
        </button>
        {isRegister
          ?
          <span className='auth__text'>
            Уже зарегистрированы?{' '}
            <Link
              className='link auth__link'
              to={paths.signup}
            >
              Войти
            </Link>
          </span>
          :
          <span className='auth__text'>
            Ещё не зарегистрированы?{' '}
            <Link
              className='link auth__link'
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
