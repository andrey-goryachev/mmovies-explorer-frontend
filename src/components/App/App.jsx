import './App.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {useEffect, useState} from "react";
import Popup from "../Popup/Popup";
import mainApi from "../../utils/MainApi";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {footerPaths, headerPaths, paths} from "../../utils/conts";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false)
  const [isRunningPreloader, setIsRunningPreloader] = useState(false)
  const [errorAuth, setErrorAuth] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [savedMoviesList, setSavedMoviesList] = useState([]);

  const navigate = useNavigate()

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const handlePreloader = (value) => {
    setIsRunningPreloader(value)
  }

  const handleRegister = async ({name, email, password}) => {
    setIsRunningPreloader(true)
    mainApi
      .createUser({name, email, password})
      .then(res => {
        if (res._id) {
          handleLogin({email, password})
        }
      })
      .catch(e => {
        setErrorAuth(e)
      })
      .finally(() => setIsRunningPreloader(false))
  }

  const handleLogin = async ({email, password}) => {
    setIsRunningPreloader(true)
    mainApi
      .login({email, password})
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token)
          setIsLogged(true)
          navigate(paths.movies)
          setErrorAuth('')
        }
      })
      .catch(e => {
        setErrorAuth(e)
      })
      .finally(() => setIsRunningPreloader(false))
  }

  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsRunningPreloader(true)
      mainApi.getCurrentUser()
        .then(res => {
          setIsLogged(true)
          setCurrentUser(res)
        })
        .catch(e => {
          setErrorAuth(e)
        })
        .finally(() => {
          setDataLoaded(true)
          setIsRunningPreloader(false)
        })
    } else {
      setDataLoaded(true)
    }
  }

  const getCurrentUser = () => {
    setIsRunningPreloader(true)
    if (isLogged) {
      mainApi.getCurrentUser()
        .then(res => {
          setCurrentUser(res)
          setErrorAuth('')
        })
        .catch(e => {
          setErrorAuth(e)
        })
        .finally(() => setIsRunningPreloader(false))
    }
  }

  const updateUser = ({name, email}) => {
    setIsRunningPreloader(true)
    mainApi.updateUser(name, email)
      .then(res => {
        setCurrentUser(res)
      })
      .catch(e => setErrorAuth(e))
      .finally(() => setIsRunningPreloader(false))
  }

  const logOut = () => {
    setIsLogged(false)
    setCurrentUser({})
    localStorage.clear()
    navigate(paths.main)
  }

  const getSavedMovies = () => {
    if (isLogged && currentUser) {
      setIsRunningPreloader(true)
      mainApi.getSavedMovies()
        .then(res => {
          const userMovies = res.filter(m => m.owner === currentUser._id);
          setSavedMoviesList(userMovies);
        })
        .catch(e => {
          setErrorAuth(e)
        })
        .finally(() => setIsRunningPreloader(false))
    }
  }

  const handleSaveMovie = (movie) => {
    mainApi.saveMovie(movie)
      .then(m => {
        setSavedMoviesList([m, ...savedMoviesList])
      })
      .catch(e => {
        setErrorAuth(e)
      })
  }

  const handleDeleteMovie = (movie) => {
    const savedMovie = savedMoviesList.find(item => item.movieId === movie.id || item.movieId === movie.movieId)
    if (savedMovie) {
      mainApi.deleteMovie(savedMovie._id)
        .then(() => {
          const newMoviesList = savedMoviesList.filter(m => {
            return !(movie.id === m.movieId || movie.movieId === m.movieId)
          })
          setSavedMoviesList(newMoviesList)
        })
        .catch(e => {
          setErrorAuth(e)
        })
    }
  }

  useEffect(checkAuth, [])
  useEffect(getCurrentUser, [isLogged])
  useEffect(getSavedMovies, [currentUser, isLogged])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`App`}>
        {!dataLoaded
          ? (<Preloader isRunning={isRunningPreloader}/>)
          : (
            <div className={'page-container'}>
              <Routes>
                {headerPaths.map((path) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Header
                      openPopup={openPopup}
                      closePopup={closePopup}
                      isLogged={isLogged}
                    />}
                  />
                ))
                }
              </Routes>
              <main className={'main'}>
                <Routes>
                  <Route
                    path={paths.main}
                    element={<Main/>}
                  />
                  <Route
                    path={paths.movies}
                    element={
                      <ProtectedRoute
                        element={Movies}
                        savedMoviesList={savedMoviesList}
                        isLogged={isLogged}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteMovie={handleDeleteMovie}
                        handlePreloader={handlePreloader}
                      />
                    }
                  />
                  <Route
                    path={paths.savedMovies}
                    element={
                      <ProtectedRoute
                        element={SavedMovies}
                        isLogged={isLogged}
                        savedMoviesList={savedMoviesList}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteMovie={handleDeleteMovie}
                      />
                    }
                  />
                  <Route
                    path={paths.profile}
                    element={<ProtectedRoute
                      element={Profile}
                      updateUser={updateUser}
                      logOut={logOut}
                      isLogged={isLogged}
                    />}
                  />
                  <Route
                    path={paths.signin}
                    element={!isLogged
                      ? <Login header={'Рады видеть!'}
                               buttonText={'Войти'}
                               isRegister={false}
                               errorAuth={errorAuth}
                               handleAuth={handleLogin}
                      />
                      : <Navigate to={paths.main} replace={true}/>
                    }
                  />
                  <Route
                    path={paths.signup}
                    element={!isLogged
                      ? <Register header={'Добро пожаловать!'}
                                  buttonText={'Зарегистрироваться'}
                                  isRegister={true}
                                  errorAuth={errorAuth}
                                  handleAuth={handleRegister}
                      />
                      : <Navigate to={paths.main} replace={true}/>
                    }
                  />
                  <Route
                    path={'*'}
                    element={<ErrorPage/>}
                  />
                </Routes>
                <Popup isPopupOpen={isPopupOpen} openPopup={openPopup} closePopup={closePopup}/>
              </main>
              <Routes>
                {footerPaths.map((path) => {
                  return <Route
                    key={path}
                    path={path}
                    element={<Footer/>}
                  />
                })
                }
              </Routes>
            </div>
          )
        }
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
