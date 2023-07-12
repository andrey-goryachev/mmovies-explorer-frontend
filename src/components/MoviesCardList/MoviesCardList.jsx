import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies, searchText}) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [newMoviesList, setNewMoviesList] = useState([])
  const [maxMoviesPage, setMaxMoviesPage] = useState(0)

  const breakpointDesktop = 1024;
  const breakpointTab = 768;
  const breakpointMobile = 460;

  const increaseNumberMovies = () => {
    if (width > breakpointDesktop) {
      setMaxMoviesPage (maxMoviesPage + 4)
    }
    if (width <= breakpointDesktop && width > breakpointTab) {
      setMaxMoviesPage (maxMoviesPage + 3)
    }
    if (width <= breakpointTab) {
      setMaxMoviesPage (maxMoviesPage + 2)
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


  useEffect(() => {
    changeMaxMoviesPageDependingWidth()
    const updateWidth = () => {
      setWidth(document.documentElement.clientWidth)
      changeMaxMoviesPageDependingWidth()
    }
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])


  useEffect(() => {
    setNewMoviesList(movies.slice(0, maxMoviesPage))
    localStorage.setItem('moviesList', JSON.stringify(newMoviesList) )
  }, [movies, maxMoviesPage]);


  return (
    <section className={'movies'}>
      <ul className={'movies__list'}>
        {newMoviesList.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>
        ))}
      </ul>
      {movies && (movies.length > maxMoviesPage) && <div className={'movies__button-container'}>
        <button className={'button movies__button'} type={'button'} onClick={increaseNumberMovies}>Ещё</button>
      </div>
      }
    </section>
  );
}

export default MoviesCardList;
