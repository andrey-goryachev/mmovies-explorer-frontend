const paths = {
  main: '/',
  movies: '/movies',
  savedMovies: '/saved-movies',
  profile: '/profile',
  signin: '/signin',
  signup: '/signup'
}

const desktopLagrerProps = {
  breakpoint: 1280,
  numberVisibleCards: 16,
  numberCardsToAdd: 4
}

const desktopProps = {
  breakpoint: 1100,
  numberVisibleCards: 15,
  numberCardsToAdd: 3
}

const tabProps = {
  breakpoint: 840,
  numberVisibleCards: 8,
  numberCardsToAdd: 2
}

const mobileProps = {
  breakpoint: 460,
  numberVisibleCards: 5,
  numberCardsToAdd: 2
}

const shortMoviesDuration = 40
const headerPaths = [paths.movies, paths.savedMovies, paths.profile, paths.main];
const footerPaths = [paths.movies, paths.savedMovies, paths.main];


export {
  paths,
  headerPaths,
  footerPaths,
  shortMoviesDuration,
  desktopLagrerProps,
  desktopProps,
  tabProps,
  mobileProps
}
