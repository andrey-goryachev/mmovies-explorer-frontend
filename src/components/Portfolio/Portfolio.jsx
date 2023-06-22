import React from 'react';
import './Portfolio.css'

function Portfolio(props) {
  return (
    <div className={'portfolio'}>
      <h3 className={'portfolio__header'}>Портфолио</h3>
      <ul className={'portfolio__list'}>
        <li className={'portfolio__list-item'}>
          <a className={'portfolio__link'} href={'https://andrey-goryachev.github.io/russian-travel/'}>
            <p className={'portfolio__text-link'}>Статичный сайт</p>
            <p className={'portfolio__symbol-link'}>↗</p>
          </a>
        </li>
        <li className={'portfolio__list-item'}>
          <a className={'portfolio__link'} href={'https://andrey-goryachev.github.io/mesto/'}>
            <p className={'portfolio__text-link'}>Адаптивный сайт</p>
            <p className={'portfolio__symbol-link'}>↗</p>
          </a>
        </li>
        <li className={'portfolio__list-item'}>
          <a className={'portfolio__link'} href={'https://gorand.nomoredomains.rocks/'}>
            <p className={'portfolio__text-link'}>Одностраничное приложение</p>
            <p className={'portfolio__symbol-link'}>↗</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
