import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

// import Preloader from "../Preloader/Preloader";

function MoviesCardList({movies, searchText}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [newMoviesList, setNewMoviesList] = React.useState([])
  const [maxMoviesPage, setMaxMoviesPage] = useState(0)

  const breakpointTab = 768;
  const breakpointMobile = 460;


  useEffect(() => {
    if (width > breakpointTab) {
      setMaxMoviesPage(16);
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

    setNewMoviesList(movies.slice(0, maxMoviesPage))
  }, [movies]);

  return (
    <section className={'movies'}>
      <ul className={'movies__list'}>
        {newMoviesList.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>
        ))}
      </ul>
      {movies && (movies.length > maxMoviesPage) && <div className={'movies__button-container'}>
        <button className={'button movies__button'} type={'button'}>Ещё</button>
      </div>
      }
    </section>
  );
}

export default MoviesCardList;
