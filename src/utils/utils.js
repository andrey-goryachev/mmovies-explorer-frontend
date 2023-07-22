import {shortMoviesDuration} from "./conts";

const filterShortMovies = (movies) => {
  return movies.filter(movie => movie.duration < shortMoviesDuration);
}

const filterMovies = (movies, searchText, checkboxShortMovies) => {
  return movies.filter((movie) => {
    const movieLangRu = String(movie.nameRU).toLowerCase().trim();
    const movieLangEn = String(movie.nameEN).toLowerCase().trim();
    const optimizedSearchText = searchText.toLowerCase().trim();
    return movieLangRu.includes(optimizedSearchText) || movieLangEn.includes(optimizedSearchText)
  })
}

const optimizeMovies = (movies) => {
  movies.forEach(movie => {
    if (!movie.image) {
      movie.image = 'https://paradize.su/wp-content/uploads/2021/10/no-img.jpg';
      movie.thumbnail = 'https://paradize.su/wp-content/uploads/2021/10/no-img.jpg';
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
      movie.image = `https://api.nomoreparties.co${movie.image.url}`
    }
    if(!movie.country) {
      movie.country = '';
    }
    if(!movie.nameEN) {
      movie.nameEN = movie.nameRU;
    }
  });
  return movies
}


export {
  filterMovies,
  filterShortMovies,
  optimizeMovies
}

