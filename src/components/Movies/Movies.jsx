import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {movies} from "../../utils/conts";
import Header from "../Header/Header";

function Movies() {
  return (
    <section>
      <SearchForm/>
      <MoviesCardList movies={movies}/>
    </section>
  );
}

export default Movies;
