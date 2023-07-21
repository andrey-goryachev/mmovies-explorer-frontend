import React, {useContext, useEffect, useState} from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {filterMovies, filterShortMovies, optimizeMovies} from "../../utils/utils";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import moviesApi from "../../utils/MoviesApi";

function Movies({savedMoviesList, handleSaveMovie, handleDeleteMovie, handlePreloader}) {
  const currentUser = useContext(CurrentUserContext)
  const [checkboxShortMovies, setCheckboxShortMovies] = useState(localStorage.getItem(`${currentUser.email}_checkboxShortMovies`))
  const [filteredMovies, setFilteredMovies] = useState([])
  const [notFoundMovies, setNotFoundMovies] = useState(false)
  const [allMovies, setAllMovies] = useState([])
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false)
  const [shortFilteredMoviesList, setFilteredShortMoviesList] = useState([])

  const handleFilteredMovies = (allMovies, searchText, checkboxShortMovies) => {
    const filteredMoviesList = filterMovies(allMovies, searchText, checkboxShortMovies)
    if (filteredMoviesList.length === 0) {
      setNotFoundMovies(true)
    } else {
      setNotFoundMovies(false)
    }
    setFilteredMovies(filteredMoviesList)
    setFilteredShortMoviesList(filterShortMovies(filteredMoviesList))
    localStorage.setItem(`${currentUser.email}_movies`, JSON.stringify(filteredMoviesList))
  }

  const handleSearchText = (searchText) => {
    localStorage.setItem(`${currentUser.email}_searchText`, searchText)
    localStorage.setItem(`${currentUser.email}_checkboxShortMovies`, checkboxShortMovies)

    if (allMovies.length === 0) {
      handlePreloader(true)
      moviesApi
        .getMovies()
        .then(movies => {
          setAllMovies(movies)
          handleFilteredMovies(optimizeMovies(movies), searchText, checkboxShortMovies)
        })
        .catch(() => {
          setErrorLoadingMovies(true)
        })
        .finally(() => {
          handlePreloader(false)
        })
    } else {
      handleFilteredMovies(allMovies, searchText, checkboxShortMovies)
    }
  }

  const handleCheckboxShortMovies = () => {
    setCheckboxShortMovies(!checkboxShortMovies);
    localStorage.setItem(`${currentUser.email}_checkboxShortMovies`, !checkboxShortMovies);
  }

  useEffect(() => {
    setCheckboxShortMovies(localStorage.getItem(`${currentUser.email}_checkboxShortMovies`) === 'true')
  }, [currentUser])

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email}_movies`)) {
      const movies = JSON.parse(localStorage.getItem(`${currentUser.email}_movies`))
      setFilteredMovies(movies)
      setFilteredShortMoviesList(filterShortMovies(movies))
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
      {!errorLoadingMovies && <MoviesCardList movies={checkboxShortMovies ? shortFilteredMoviesList : filteredMovies}
                                              savedMoviesList={savedMoviesList}
                                              handleSaveMovie={handleSaveMovie}
                                              handleDeleteMovie={handleDeleteMovie}
      />
      }
    </section>
  );
}

export default Movies;
