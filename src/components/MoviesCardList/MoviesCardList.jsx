import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList( {movies} ) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [newMoviesList, setNewMoviesList] = React.useState([])
  const [maxMoviesPage, setMaxMoviesPage] = useState(0)

  const breakpointTab = 768;
  const breakpointMobile = 460;


  useEffect(() => {
    if (width > breakpointTab) {
      setMaxMoviesPage(16);
    }
    if (width <= breakpointTab) {
      setMaxMoviesPage(8);
    }
    if (width <= breakpointMobile) {
      setMaxMoviesPage(5);
    }

    setNewMoviesList(movies.slice(0, maxMoviesPage))
  }, [maxMoviesPage]);

  return (
    <section className={'movies'}>
      <ul className={'movies__list'}>
        {newMoviesList.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>
        ))}
      </ul>
      {(movies.length > maxMoviesPage) && <div className={'movies__button-container'}>
        <button className={'button movies__button'} type={'button'}>Ещё</button>
      </div>
      }

    </section>
  );
}

export default MoviesCardList;
