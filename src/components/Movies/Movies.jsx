import React, {useEffect, useState} from 'react';
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({movies, searchText, changeSearchText, loadingMovies, handleLoadingMovies, errorLoadingMovies}) {
  // const [moviesLocalStorage, setMoviesLocalStorage] = useState([])
  // const [moviesLocalStorageExists, setMoviesLocalStorageExists] = useState(false)
  // const [moviesEdited, setMoviesEdited] = useState([])
  //
  // useEffect(() => {
  //   setMoviesLocalStorage(JSON.parse(localStorage.getItem('movies')))
  //   console.log('moviesLocalStorage')
  //   console.log(moviesLocalStorage)
  // }, [])
  //
  // useEffect(() => {
  //   console.log('moviesLocalStorage.length')
  //   console.log(moviesLocalStorage.length)
  //   if (moviesLocalStorage.length === 0) {
  //     setMoviesLocalStorageExists(false)
  //     setMoviesEdited(movies)
  //   } else {
  //     setMoviesLocalStorageExists(true)
  //     setMoviesEdited(moviesLocalStorage)
  //   }
  // }, [moviesLocalStorage])


  return (
    <section className={'movies'}>
      <SearchForm searchText={searchText} changeSearchText={changeSearchText}/>
      {loadingMovies && <Preloader movies={movies}/>}
      {errorLoadingMovies &&
        <div className={'movies__error'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер
          недоступен. Подождите немного и попробуйте ещё раз</div>}
      {/*{moviesLocalStorageExists*/}
      {/*  ? !errorLoadingMovies && movies && <MoviesCardList movies={moviesEdited}/>*/}
      {/*  : !errorLoadingMovies && searchText && movies && <MoviesCardList movies={moviesEdited}/>*/}
      {/*}*/}
      {!errorLoadingMovies && searchText && movies && <MoviesCardList movies={movies}/>
      }
    </section>
  );
}

export default Movies;
