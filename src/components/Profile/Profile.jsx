import React, {useContext, useEffect, useState} from 'react';
import './Profile.css'
import {useNavigate} from "react-router-dom";
import {paths} from "../../utils/conts";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import useValidationForm from "../../hooks/useValidationForm";

function Profile({updateUser, logOut}) {
  const currentUser = useContext(CurrentUserContext)
  const [onEdit, setOnEdit] = useState(false)
  const {values, handleChange, resetForm, errors, isValid} = useValidationForm();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(values)
    setOnEdit(false)
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  return (
    <section className={'profile'}>
      <h1 className={'profile__header'}>Привет, {currentUser.name}!</h1>
      <form className={'profile__form'} name={'profile'} noValidate onSubmit={handleSubmit}>
        <div className={'profile__inputs'}>
          <label className={'profile__label'}>
            Имя
            <input className={'profile__input'}
                   name="name"
                   type="text"
                   placeholder={currentUser.name}
                   minLength={3}
                   maxLength={30}
                   onChange={handleChange}
                   value={values.name || ''}
                   disabled={!onEdit}
            />
          </label>
          <div className={'profile__error-validation'}>{errors.name || ''}</div>
          <label className={'profile__label'}>
            E-mail
            <input className={'profile__input'}
                   name="email"
                   type="email"
                   placeholder={currentUser.email}
                   onChange={handleChange}
                   value={values.email || ''}
                   disabled={!onEdit}
            />
          </label>
          <div className={'profile__error-validation'}>{errors.email || ''}</div>
        </div>
        <div className={'profile__buttons'}>
          {!onEdit && <button className={'button profile__button'} type={'button'}
                              onClick={() => setOnEdit(true)}>Редактировать</button>}
          {!onEdit && <button className={'button profile__button'} type={'button'} onClick={() => {
            setOnEdit(false)
            logOut()
          }}>Выйти из аккаунта</button>
          }
          {onEdit && (errors.length === 0) && <p className={'profile__text'}>При обновлении профиля произошла ошибка.</p>}
          {onEdit && <button
            className={`button profile__button profile__button_type_submit ${(!isValid || (currentUser.name === values.name && currentUser.email === values.email)) && 'profile__button_type_inactive'}`}
            type={'submit'}
            disabled={!isValid || (currentUser.name === values.name && currentUser.email === values.email)}
          >Сохранить</button>}
        </div>
      </form>
    </section>

  );
}

export default Profile;
