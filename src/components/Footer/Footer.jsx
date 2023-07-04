import React from 'react';
import './Footer.css'
import {useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";

function Footer() {
  let location = useLocation()
  let pathLocation = location.pathname

  return (
    <>
      {(pathLocation === paths.main || pathLocation === paths.movies || pathLocation === paths.savedMovies) && <footer className={'footer'}>
        <h3 className={'footer__header'}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className={'footer__container'}>
          <p className="footer__text">© {new Date().getFullYear()}</p>
          <ul className={'footer__list'}>
            <li className={'footer__list-item'}>
              <a className={'link footer__link'} href="https://practicum.yandex.ru/" target={'_blank'} rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className={'footer__list-item'}>
              <a className={'link footer__link'} href="https://github.com/andrey-goryachev" target={'_blank'} rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </footer>}
    </>
  );
}


export default Footer;
