import React from 'react';
import './MoviesCard.css'


function MoviesCard({movie}) {
  const {image, name, duration, checked} = movie

  return (
    <div className={'movie'}>
      <img className={'movie__image'} src={image} alt="кадр из фильма"/>
      <div className={'movie__container-header'}>
        <h2 className={'movie__header'}>{name}</h2>
        <label className={'movie__label'}>
          <input className={'movie__checkbox'} type={"checkbox"} defaultChecked={checked}/>
          <span className={'movie__visible-checkbox'}></span>
        </label>
      </div>
      <span className={'movie__span'}>{duration}</span>
    </div>
  );
}

export default MoviesCard;
