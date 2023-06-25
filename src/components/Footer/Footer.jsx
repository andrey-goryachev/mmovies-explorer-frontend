import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <footer className={'footer'}>
      <h3 className={'footer__header'}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className={'footer__container'}>
        <p className="footer__text">© {new Date().getFullYear()}</p>
        <ul className={'footer__list'}>
          <li className={'footer__list-item'}>
            <a className={'footer__link'} href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li className={'footer__list-item'}>
            <a className={'footer__link'} href="https://github.com/andrey-goryachev">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer;
