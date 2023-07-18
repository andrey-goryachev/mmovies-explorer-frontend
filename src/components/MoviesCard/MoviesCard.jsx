import React, {useEffect, useState} from 'react';
import './MoviesCard.css'
import {useLocation} from "react-router-dom";
import {paths} from "../../utils/conts";


function MoviesCard({movie, userSaved, handleSaveMovie, handleDeleteMovie}) {
  const {image, nameRU, trailerLink, duration} = movie
  const [checkboxValue, setCheckboxValue] = useState(userSaved)

  let location = useLocation()
  let pathLocation = location.pathname

  const hours = Math.trunc(duration / 60)
  const minutes = duration % 60

  const handleCheckbox = () => {
    if (pathLocation === paths.movies) {
      handleSaveMovie(movie)
    }
    if (pathLocation === paths.savedMovies) {
      handleDeleteMovie(movie)
    }
  }

  // useEffect(() => {
  //   checkboxValue ? handleSaveMovie(movie) : handleDeleteMovie(movie)
  // }, [checkboxValue])

  return (
    <li className={'movie'}>
      <a className={'link movie__link'} href={trailerLink} target={'_blank'} rel="noreferrer">
        <img className={'movie__image'} src={image}
             alt={`кадр из фильма ${nameRU}`}/>
        <div className={'movie__container-header'}>
          <h2 className={'movie__header'}>{nameRU}</h2>
          <label className={'movie__label'}>
            {/*<input className={'movie__checkbox'}*/}
            {/*       type={"checkbox"}*/}
            {/*       // defaultChecked={checkboxValue}*/}
            {/*       // onChange={() => {*/}
            {/*       //   setCheckboxValue(!checkboxValue)*/}
            {/*       // }}*/}
            {/*       // value={checkboxValue}*/}
            {/*/>*/}
            <input className={'movie__checkbox'}
                   type={"checkbox"}
                   checked={checkboxValue}
              // defaultChecked={checkboxValue}
                    onChange={() => {
                      setCheckboxValue(!checkboxValue)
                    }}
              // value={checkboxValue}
            />
            {/*{(pathLocation === paths.movies) &&*/}
              <span
                className={`movie__visible-checkbox ${(pathLocation === paths.savedMovies) && 'movie__visible-checkbox_type_cross'}`}
                onClick={handleCheckbox}
              >

              </span>

            {/*}*/}
            {/*{(pathLocation === paths.savedMovies) &&*/}
            {/*  // <button className={'button movie__button'} type={'button'}></button>*/}
            {/*  // : <span className={`movie__visible-checkbox`}></span>*/}
            {/*}*/}
          </label>
        </div>
        <span className={'movie__span'}>{`${hours === 0 ? '' : `${hours}ч`}${minutes}м`}</span>
      </a>
    </li>
  );
}

export default MoviesCard;
