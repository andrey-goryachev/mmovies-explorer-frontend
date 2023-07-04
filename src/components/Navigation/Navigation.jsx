import React from 'react';
import './Navigation.css'
import {Link, useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";

function Navigation({ isPopup, openPopup, closePopup }) {
  let location = useLocation()
  let pathLocation = location.pathname

  return (
    <nav className={`nav ${isPopup ? 'nav_style_popup' : ''}`}>
      {isPopup && <Link
        className={`nav__link ${isPopup ? 'nav__link_style_popup' : ''} ${pathLocation === paths.main ? 'nav__link_active' : ''}`}
        to={paths.main}
      >
        Главная
      </Link>}
      <Link
        className={`nav__link ${isPopup ? 'nav__link_style_popup' : ''} ${pathLocation === paths.movies ? 'nav__link_active' : ''}`}
        to={paths.movies}
      >
        Фильмы
      </Link>
      <Link
        className={`nav__link ${isPopup ? 'nav__link_style_popup' : ''} ${pathLocation === paths.savedMovies ? 'nav__link_active' : ''}`}
        to={paths.savedMovies}
      >
        Сохранённые фильмы
      </Link>

      <div className={`nav__profile-info ${isPopup ? 'nav__profile-info_style_popup' : ''}`}>
        <Link
          className={`nav__link nav__link_place_profile-info ${isPopup ? 'nav__link_place_profile-info_style_popup' : ''}`}
          to={paths.profile}
          onClick={closePopup}
        >
          <p className={'nav__text-link'}>Аккаунт</p>
          <div className={'nav__profile-img'}>
          </div>
        </Link>
        {!isPopup && <button className={'nav__profile-img_burger'} onClick={openPopup}></button>}
      </div>
    </nav>
  );
}

export default Navigation;
