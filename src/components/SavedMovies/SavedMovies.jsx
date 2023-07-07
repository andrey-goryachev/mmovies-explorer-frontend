import React from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import {movies} from "../../utils/conts";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  const savedMovies = movies.filter(movie => movie.checked === true)

  return (
    <section className={'saved-movies'}>
      <SearchForm/>
      <MoviesCardList movies={savedMovies} />
    </section>
  );
}

export default SavedMovies;
