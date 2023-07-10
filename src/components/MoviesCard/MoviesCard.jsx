import React from 'react';
import './MoviesCard.css'
import {useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";


function MoviesCard({movie}) {
  const {image, nameRU, trailerLink, duration} = movie

  let location = useLocation()
  let pathLocation = location.pathname

  return (
    <li className={'movie'}>
      <a className={'link movie__link'} href={trailerLink} target={'_blank'} rel="noreferrer">
        <img className={'movie__image'} src={`https://api.nomoreparties.co/${image.url}`} alt={`кадр из фильма ${nameRU}`}/>
        <div className={'movie__container-header'}>
          <h2 className={'movie__header'}>{nameRU}</h2>
          <label className={'movie__label'}>
            <input className={'movie__checkbox'}
                   type={"checkbox"}
                   // defaultChecked={checked}
            />
            {/*<span className={`movie__visible-checkbox ${(pathLocation === paths.savedMovies) && 'movie__visible-checkbox_type_cross'}`}></span>*/}
            {(pathLocation === paths.savedMovies)
              ? <button className={'button movie__button'} type={'button'}></button>
              : <span className={`movie__visible-checkbox`}></span>
            }
          </label>
        </div>
        <span className={'movie__span'}>{duration}</span>
      </a>
    </li>
  );
}

export default MoviesCard;
