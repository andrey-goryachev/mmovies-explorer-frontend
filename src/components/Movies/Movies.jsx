import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({movies, searchText, changeSearchText, loadingMovies, handleLoadingMovies}) {

  return (
    <section>
      <SearchForm searchText={searchText} changeSearchText={changeSearchText}/>
      {loadingMovies && <Preloader />}
      {searchText && <MoviesCardList movies={movies} searchText={searchText}/>}
    </section>
  );
}

export default Movies;
