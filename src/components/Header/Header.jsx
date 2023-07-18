import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";
import {useNavigate} from "react-router-dom";
import {paths} from "../../utils/conts";
import Navigation from "../Navigation/Navigation";


function Header(props) {
  const navigate = useNavigate()

  return (
    <header className={'header'}>
      <Logo/>
      <Navigation {...props}/>
      {!props.isLogged && <div className={'header__login'}>
        <button
          className='button header__button header__button_place_login'
          type={'button'}
          onClick={() => {
            navigate(paths.signup)
          }}
        >
          Регистрация
        </button>
        <button
          className='button header__button header__button_place_login header__button_style_button'
          type={'button'}
          onClick={() => {
            navigate(paths.signin)
          }}
        >
          Войти
        </button>
      </div>}
    </header>
  );
}

export default Header;
