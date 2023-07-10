import React from 'react';
import './Preloader.css'

function Preloader({movies}) {
  return (
    <>
      {movies
        ?
        <p className={'preloader'}>Загружаю фильмы ...</p>
        :
        <p className={'preloader'}>Ничего не найдено</p>
      }
    </>
  );
}

export default Preloader;
