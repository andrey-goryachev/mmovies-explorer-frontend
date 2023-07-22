import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {desktopLagrerProps, desktopProps, mobileProps, paths, tabProps} from "../../utils/conts";
import {useLocation} from "react-router-dom";


function MoviesCardList({movies, savedMoviesList, handleSaveMovie, handleDeleteMovie}) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [visibleMoviesList, setVisibleMoviesList] = useState([])
  const [maxMoviesPage, setMaxMoviesPage] = useState(16)
  const [numberCardToAdd, setNumberCardToAdd] = useState(4)
  const [isMounted, setIsMounted] = useState(true)

  let location = useLocation()
  let pathLocation = location.pathname

  const increaseNumberMovies = () => {
    const visibleMoviesListLength = visibleMoviesList.length
    let numberCards = visibleMoviesListLength + numberCardToAdd
    const differenceCards = movies.length - visibleMoviesListLength
    const differenceLength = numberCards - maxMoviesPage
    const divisionResult = differenceLength % numberCardToAdd
    if (divisionResult !== 0) {
      const addNumber = numberCardToAdd - divisionResult
      numberCards = numberCards + addNumber
    }
    if (differenceCards > 0) {
      const slicedMovies = movies.slice(visibleMoviesListLength, numberCards)
      setVisibleMoviesList([...visibleMoviesList, ...slicedMovies])
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
    const updateWidth = () => {
      setWidth(document.documentElement.clientWidth)
    }

    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  useEffect(() => {
    if (pathLocation === paths.movies) {
      if ((width > desktopProps.breakpoint) ) {
          setMaxMoviesPage(desktopLagrerProps.numberVisibleCards);
        setNumberCardToAdd(desktopLagrerProps.numberCardsToAdd)
      }
      if (width <= desktopProps.breakpoint && width > tabProps.breakpoint) {
          setMaxMoviesPage(desktopProps.numberVisibleCards);
        setNumberCardToAdd(desktopProps.numberCardsToAdd)
      }
      if (width <= tabProps.breakpoint && width > mobileProps.breakpoint) {
          setMaxMoviesPage(tabProps.numberVisibleCards);
        setNumberCardToAdd(tabProps.numberCardsToAdd)
      }
      if (width <= mobileProps.breakpoint && width > 0) {
          setMaxMoviesPage(mobileProps.numberVisibleCards);
        setNumberCardToAdd(mobileProps.numberCardsToAdd)
      }

      return () => setIsMounted(false);
    }
  }, [width, isMounted, pathLocation, visibleMoviesList.length])

  useEffect(() => {
    if (movies.length) {
      const slicedMovies = movies.slice(0, maxMoviesPage)
      setVisibleMoviesList(slicedMovies)
    }
  }, [movies])

  return (
    <section className={'movies'}>
      <ul className={'movies__list'}>
        {visibleMoviesList.map((movie) => (
          <MoviesCard key={movie.movieId || movie.id }
                      movie={movie}
                      userSaved={findSavedCard(savedMoviesList, movie)}
                      handleSaveMovie={handleSaveMovie}
                      handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </ul>
      {movies && (movies.length > maxMoviesPage) && (visibleMoviesList.length < movies.length) && (pathLocation === paths.movies) &&
        <div className={'movies__button-container'}>
          <button className={'button movies__button'} type={'button'} onClick={increaseNumberMovies}>Ещё</button>
        </div>
      }
    </section>
  );
}

export default MoviesCardList;
