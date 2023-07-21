import React from 'react';
import './Navigation.css'
import {Link, useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";


function Navigation({ isPopup, openPopup, closePopup, isLogged }) {
  let location = useLocation()
  let pathLocation = location.pathname

  return (
    <>
      {isLogged && <nav className={`nav ${isPopup ? 'nav_style_popup' : ''}`}>
        <ul className={`nav__list ${isPopup ? 'nav__list_style_popup' : ''}`}>
          {isPopup && <li className={'nav__item'}>
            <Link
              className={`link nav__link ${isPopup ? 'nav__link_style_popup' : ''} ${pathLocation === paths.main ? 'nav__link_active' : ''}`}
              to={paths.main}
            >
              Главная
            </Link>
          </li>}
          <li className={'nav__item'}>
            <Link
              className={`link nav__link ${isPopup ? 'nav__link_style_popup' : ''} ${pathLocation === paths.movies ? 'nav__link_active' : ''}`}
              to={paths.movies}
            >
              Фильмы
            </Link>
          </li>
          <li className={'nav__item'}>
            <Link
              className={`link nav__link ${isPopup ? 'nav__link_style_popup' : ''} ${pathLocation === paths.savedMovies ? 'nav__link_active' : ''}`}
              to={paths.savedMovies}
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className={`nav__profile-info ${isPopup ? 'nav__profile-info_style_popup' : ''}`}>
          <Link
            className={`link nav__link nav__link_place_profile-info ${isPopup ? 'nav__link_place_profile-info_style_popup' : ''}`}
            to={paths.profile}
            onClick={closePopup}
          >
            <p className={'nav__text-link'}>Аккаунт</p>
            <div className={'nav__profile-img'}>
            </div>
          </Link>
          {!isPopup && <button className={'button nav__profile-img nav__profile-img_type_burger'} type={'button'}
                               onClick={openPopup}></button>}
        </div>
      </nav>
      }
    </>

  );
}

export default Navigation;
