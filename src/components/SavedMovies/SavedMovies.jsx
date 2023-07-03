import React from 'react';
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import {movies} from "../../utils/conts";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

function SavedMovies() {
  const savedMovies = movies.filter(movie => movie.checked === true)

  return (
    <section>
      <SearchForm/>
      <MoviesCardList movies={savedMovies} />
    </section>
  );
}

export default SavedMovies;
