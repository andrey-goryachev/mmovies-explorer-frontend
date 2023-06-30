import React, {useEffect} from 'react';
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {movies} from "../../utils/conts";

function MoviesCardList(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [newMoviesList, setNewMoviesList] = React.useState([])
  const breakpointTab = 768;
  const breakpointMobile = 460;

  useEffect(() => {
    if (width > breakpointTab) {
      setNewMoviesList(movies.slice(0,16))
    }
    if (width <= breakpointTab) {
      setNewMoviesList(movies.slice(0,8))
    }
    if (width <= breakpointMobile) {
      setNewMoviesList(movies.slice(0,5))
    }
  }, []);

  return (
    <section className={'movies'}>
      <div className={'movies__list'}>
        {newMoviesList.map((movie) => (
          <MoviesCard key={movie.id} movie={movie}/>
        ))}
      </div>
      <div className={'movies__button-container'}>
        <button className={'movies__button'}>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
