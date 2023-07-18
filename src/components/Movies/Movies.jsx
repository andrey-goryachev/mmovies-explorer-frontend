import React, {useContext, useEffect, useState} from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {filterMovies, filterShortMovies, optimizeMovies} from "../../utils/utils";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";

function Movies({savedMoviesList, handleSaveMovie, handleDeleteMovie, handlePreloader}) {
  const currentUser = useContext(CurrentUserContext)
  const [initialMovies, setInitialMovies] = useState([])
  const [checkboxShortMovies, setCheckboxShortMovies] = useState(false)
  const [filteredMovies, setFilteredMovies] = useState([])
  const [notFoundMovies, setNotFoundMovies] = useState(false)
  const [allMovies, setAllMovies] = useState([])
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false)

  const handleFilteredMovies = (movies, searchText, checkboxShortMovies) => {
    const moviesList = filterMovies(movies, searchText, checkboxShortMovies)
    if (moviesList.length === 0) {
      setNotFoundMovies(true)
    } else {
      setNotFoundMovies(false)
    }
    setInitialMovies(moviesList)
    setFilteredMovies(
      checkboxShortMovies ? filterShortMovies(moviesList) : moviesList
    )
    localStorage.setItem(`${currentUser.email}_movies`, JSON.stringify(moviesList))
  }

  const handleSearchText = (value) => {
    localStorage.setItem(`${currentUser.email}_searchText`, value)
    localStorage.setItem(`${currentUser.email}_checkboxShortMovies`, checkboxShortMovies)

    if (allMovies.length === 0) {
      handlePreloader(true)
      moviesApi
        .getMovies()
        .then(movies => {
          setAllMovies(movies)
          handleFilteredMovies(optimizeMovies(movies), value, checkboxShortMovies)
        })
        .catch(() => {
          setErrorLoadingMovies(true)
        })
        .finally(() => {
          handlePreloader(false)
        })
    } else {
      handleFilteredMovies(allMovies, value, checkboxShortMovies)
    }
  }

  const handleCheckboxShortMovies = () => {
    setCheckboxShortMovies(!checkboxShortMovies);
    !checkboxShortMovies
      ? setFilteredMovies(filterShortMovies(initialMovies))
      : setFilteredMovies(initialMovies);
    localStorage.setItem(`${currentUser.email}_checkboxShortMovies`, !checkboxShortMovies);
  }

  useEffect(() => {
    setCheckboxShortMovies(localStorage.getItem(`${currentUser.email}_checkboxShortMovies`) === 'true')
  }, [currentUser])

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email}_movies`)) {
      const movies = JSON.parse(localStorage.getItem(`${currentUser.email}_movies`))
      setInitialMovies(movies)
      if (localStorage.getItem(`${currentUser.email}_checkboxShortMovies`) === 'true') {
        setFilteredMovies(filterShortMovies(movies))
      } else {
        setFilteredMovies(movies)
      }
    }
  }, [currentUser])


  return (
    <section className={'movies'}>
      <SearchForm handleSearchText={handleSearchText}
                  handleCheckboxShortMovies={handleCheckboxShortMovies}
                  checkboxShortMovies={checkboxShortMovies}
      />
      {errorLoadingMovies &&
        <div className={'movies__error'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер
          недоступен. Подождите немного и попробуйте ещё раз</div>}
      {notFoundMovies &&
        <div className={'movies__error'}>Ничего не найдено</div>}
      {!errorLoadingMovies && <MoviesCardList movies={filteredMovies}
                                              savedMoviesList={savedMoviesList}
                                              handleSaveMovie={handleSaveMovie}
                                              handleDeleteMovie={handleDeleteMovie}
      />
      }
    </section>
  );
}

export default Movies;
