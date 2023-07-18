const paths = {
  main: '/',
  movies: '/movies',
  savedMovies: '/saved-movies',
  profile: '/profile',
  signin: '/signin',
  signup: '/signup'
}
const breakpointDesktop = 1024;
const breakpointTab = 768;
const breakpointMobile = 460;

const shortMoviesDuration = 40
const headerPaths = [paths.movies, paths.savedMovies, paths.profile, paths.main];
const footerPaths = [paths.movies, paths.savedMovies, paths.main];


export {
  paths,
  headerPaths,
  footerPaths,
  shortMoviesDuration,
  breakpointTab,
  breakpointMobile,
  breakpointDesktop
}
