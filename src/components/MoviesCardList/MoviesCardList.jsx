import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {breakpointDesktop, breakpointMobile, breakpointTab, paths} from "../../utils/conts";
import {useLocation} from "react-router-dom";

function MoviesCardList({movies, savedMoviesList, handleSaveMovie, handleDeleteMovie}) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [visibleMoviesList, setVisibleMoviesList] = useState([])
  const [maxMoviesPage, setMaxMoviesPage] = useState(0)
  let location = useLocation()
  let pathLocation = location.pathname

  const increaseNumberMovies = () => {
    if (width > breakpointDesktop) {
      setMaxMoviesPage(maxMoviesPage + 4)
    }
    if (width <= breakpointDesktop && width > breakpointTab) {
      setMaxMoviesPage(maxMoviesPage + 3)
    }
    if (width <= breakpointTab) {
      setMaxMoviesPage(maxMoviesPage + 2)
    }
  }

  const changeMaxMoviesPageDependingWidth = () => {
    if (width > breakpointDesktop) {
      setMaxMoviesPage(16);
    }
    if (width <= breakpointDesktop && width > breakpointTab) {
      setMaxMoviesPage(15);
    }
    if (width <= breakpointTab && width > breakpointMobile) {
      setMaxMoviesPage(8);
    }
    if (width <= breakpointMobile && width > 0) {
      setMaxMoviesPage(5);
    }
    if (width === 0) {
      setMaxMoviesPage(0);
    }
  }

  const findSavedCard = (savedMoviesList, movie) => {
    if(savedMoviesList) {
      return savedMoviesList.find((item) => {
        return item.movieId === (movie.id || movie.movieId)
      })
    }
    return false
  }


  useEffect(() => {
    if (pathLocation === paths.movies) {
      changeMaxMoviesPageDependingWidth()
    }
    const updateWidth = () => {
      setWidth(document.documentElement.clientWidth)
    }
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  useEffect(changeMaxMoviesPageDependingWidth, [width])


  useEffect(() => {
    setVisibleMoviesList(movies.slice(0, maxMoviesPage))
  }, [movies, maxMoviesPage]);


  return (
    <section className={'movies'}>
      <ul className={'movies__list'}>
        {visibleMoviesList.map((movie) => (
          <MoviesCard key={movie.movieId || movie.id }
                      movie={movie}
                      userSaved={findSavedCard(savedMoviesList, movie)}
                      // userSaved={true}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </ul>
      {movies && (movies.length > maxMoviesPage) && (pathLocation === paths.movies) &&
        <div className={'movies__button-container'}>
          <button className={'button movies__button'} type={'button'} onClick={increaseNumberMovies}>Ещё</button>
        </div>
      }
    </section>
  );
}

export default MoviesCardList;
