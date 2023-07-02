import React from 'react';
import './Profile.css'

function Profile(props) {
  return (
    <section className={'profile'}>
      <h2 className={'profile__header'}>Привет, Виталий!</h2>
      <form className={'profile__form'} name={'profile'}>
        <div className={'profile__inputs'}>
          <label className={'profile__label'}>
            Имя
            <input className={'profile__input'} type="text" placeholder={'Виталий'}/>
          </label>
          <label className={'profile__label'}>
            E-mail
            <input className={'profile__input'} type="email" placeholder={'pochta@yandex.ru'}/>
          </label>
        </div>
        <div className={'profile__buttons'}>
          <button className={'profile__button'}>Редактировать</button>
          <button className={'profile__button'}>Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
