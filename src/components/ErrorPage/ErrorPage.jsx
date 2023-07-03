import React from 'react';
import './ErrorPage.css'
import {useNavigate} from "react-router-dom";

function ErrorPage(props) {
  const navigate = useNavigate();

  return (
    <div className={'error-page'}>
      <div className={'error-page__container-text'}>
        <h2 className={'error-page__header'}>404</h2>
        <span className={'error-page__text'}>Страница не найдена</span>
      </div>
      <button className={'error-page__button'} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default ErrorPage;
