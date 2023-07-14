import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";
import {useLocation, useNavigate} from "react-router-dom";
import {paths} from "../../utils/conts";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  let location = useLocation()
  let pathLocation = location.pathname
  const navigate = useNavigate()

  return (
    <>
      {(pathLocation === paths.main || pathLocation === paths.profile || pathLocation === paths.movies || pathLocation === paths.savedMovies) &&
        <header className={'header'}>
          <Logo/>
          {pathLocation !== paths.main &&
            <Navigation {...props}/>
          }
          {pathLocation === paths.main && <div className={'header__login'}>
            <button
              className='button header__button header__button_place_login'
              type={'button'}
              onClick={() => {navigate(paths.signup)}}
            >
              Регистрация
            </button>
            <button
              className='button header__button header__button_place_login header__button_style_button'
              type={'button'}
              onClick={() => {navigate(paths.signin)}}
            >
              Войти
            </button>
          </div>}
        </header>}
    </>
  );
}

export default Header;
