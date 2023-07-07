import React from 'react';
import './ErrorPage.css'
import {useNavigate} from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className={'error-page'}>
      <div className={'error-page__container-text'}>
        <h1 className={'error-page__header'}>404</h1>
        <span className={'error-page__text'}>Страница не найдена</span>
      </div>
      <button className={'button error-page__button'} type={'button'} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default ErrorPage;
