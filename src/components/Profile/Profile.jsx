import React, {useState} from 'react';
import './Profile.css'
import {useNavigate} from "react-router-dom";
import {paths} from "../../utils/conts";

function Profile() {
  const navigate = useNavigate();
  const [onEdit, setOnEdit] = useState(false)
  const [saveError, setSaveError] = useState('')

  return (
    <section className={'profile'}>
      <h1 className={'profile__header'}>Привет, Виталий!</h1>
      <form className={'profile__form'} name={'profile'}>
        <div className={'profile__inputs'}>
          <label className={'profile__label'}>
            Имя
            <input className={'profile__input'} type="text" placeholder={'Виталий'} minLength={3} maxLength={30} disabled={!onEdit}/>
          </label>
          <label className={'profile__label'}>
            E-mail
            <input className={'profile__input'} type="email" placeholder={'pochta@yandex.ru'} disabled={!onEdit}/>
          </label>
        </div>
        <div className={'profile__buttons'}>
          {!onEdit && <button className={'button profile__button'} type={'button'} onClick={() => setOnEdit(true)}>Редактировать</button>}
          {!onEdit && <button className={'button profile__button'} type={'button'} onClick={() => {
          setOnEdit(false)
          navigate(paths.main)
        }}>Выйти из аккаунта</button>
          }
          {onEdit && saveError && <p className={'profile__text'}>При обновлении профиля произошла ошибка.</p> }
          {onEdit && <button className={`button profile__button profile__button_type_submit ${saveError && 'profile__button_type_inactive'}`} type={'submit'} disabled={!!saveError} onClick={(e) => {
            e.preventDefault()
            setOnEdit(false)
          }}>Сохранить</button>}
        </div>
      </form>
    </section>

  );
}

export default Profile;
