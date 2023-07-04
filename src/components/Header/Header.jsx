import React from 'react';
import './Header.css'
import Logo from "../Logo/Logo";
import {Link, useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  let location = useLocation()
  let pathLocation = location.pathname

  return (
    <>
      {(pathLocation === paths.main || pathLocation === paths.profile || pathLocation === paths.movies || pathLocation === paths.savedMovies) &&
        <header className={'header'}>
          <Logo/>
          {pathLocation !== paths.main &&
            <Navigation {...props}/>
          }
          {pathLocation === paths.main && <div className={'header__login'}>
            <Link
              className='header__link header__link_place_login'
              to={paths.signin}
            >
              Регистрация
            </Link>
            <Link
              className='header__link header__link_place_login header__link_style_button'
              to={paths.signup}
            >
              Войти
            </Link>
          </div>}

          {/*{pathLocation !== paths.main && */}
          {/*  <div className={'header__profile-info'}>*/}
          {/*  <Link*/}
          {/*    className='header__link header__link_place_profile-info'*/}
          {/*    to={paths.profile}*/}
          {/*  >*/}
          {/*    <p>Аккаунт</p>*/}
          {/*    <div className={'header__profile-img'}>*/}
          {/*    </div>*/}
          {/*  </Link>*/}
          {/*  /!*<Link*!/*/}
          {/*  /!*  className='header__link header__link_type_burger'*!/*/}
          {/*  /!*  to={paths.profile}*!/*/}
          {/*  /!*>*!/*/}
          {/*  <button className={'header__profile-img_burger'}></button>*/}
          {/*  /!*</Link>*!/*/}
          {/*</div>*/}
          {/*}*/}
        </header>}
    </>
  );
}

export default Header;
