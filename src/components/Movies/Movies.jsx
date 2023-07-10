import React from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({movies, searchText, changeSearchText, loadingMovies, handleLoadingMovies, errorLoadingMovies}) {

  return (
    <section className={'movies'}>
      <SearchForm searchText={searchText} changeSearchText={changeSearchText}/>
      {loadingMovies && <Preloader movies={movies}/>}
      {errorLoadingMovies && <div className={'movies__error'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</div>}
      {!errorLoadingMovies && searchText && movies && <MoviesCardList movies={movies} searchText={searchText}/>}
    </section>
  );
}

export default Movies;
