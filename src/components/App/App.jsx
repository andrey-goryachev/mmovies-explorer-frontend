import './App.css'
// import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React, {useEffect, useState} from "react";
import Popup from "../Popup/Popup";
import MoviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {Route, Routes, useNavigate} from "react-router-dom";
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

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loadingMovies, setLoadingMovies] = useState(false)
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false)
  const [errorAuth, setErrorAuth] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate()


  const changeSearchText = (value) => setSearchText(value)
  const handleLoadingMovies = (value) => setLoadingMovies(!loadingMovies)
  const getMovies = () => {
    const movies = async () => {
      try {
        setLoadingMovies(true)

        const allMovies = await MoviesApi.getMovies()
        setMovies(allMovies)

        setLoadingMovies(false)
      } catch (e) {
        setErrorLoadingMovies(true)
        setLoadingMovies(false)
      }
    }
    if (searchText) {
      movies()
    }
  }

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const handleRegister = async ({name, email, password}) => {
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
  }

  const handleLogin = async ({email, password}) => {
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
  }

  const getCurrentUser = () => {
    if (isLogged) {
      mainApi.getCurrentUser()
        .then(res => {
          setCurrentUser(res)
          setErrorAuth('')
        })
        .catch(e => {
          setErrorAuth(e)
        })
    }
  }

  const updateUser = ({name, email}) => {
    mainApi.updateUser(name, email)
      .then(res => {
        setCurrentUser(res)
      })
      .catch(e => setErrorAuth(e))
  }

  const logOut = () => {
    setIsLogged(false)
    setCurrentUser({})
    localStorage.clear()
    navigate(paths.main)
  }

  useEffect(getMovies, [searchText])
  useEffect(getCurrentUser, [isLogged])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={'App'}>
        <div className={'page-container'}>
          <Routes>
            {headerPaths.map((path) => (
              <Route
                key={path}
                path={path}
                // element={<ProtectedRoute
                //   element={Header}
                //   openPopup={openPopup}
                //   closePopup={closePopup}
                //   isLogged={isLogged}
                // />}
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
                    movies={movies}
                    searchText={searchText}
                    changeSearchText={changeSearchText}
                    loadingMovies={loadingMovies}
                    handleLoadingMovies={handleLoadingMovies}
                    errorLoadingMovies={errorLoadingMovies}
                    isLogged={isLogged}
                  />
                }
              />

              <Route
                path={paths.savedMovies}
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    isLogged={isLogged}
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
                // element={<Profile updateUser={updateUser} logOut={logOut}/>}
              />
              <Route
                path={paths.signin}
                element={<Login header={'Рады видеть!'}
                                buttonText={'Войти'}
                                isRegister={false}
                                errorAuth={errorAuth}
                                handleAuth={handleLogin}
                />}
              />
              <Route
                path={paths.signup}
                element={<Register header={'Добро пожаловать!'}
                                   buttonText={'Зарегистрироваться'}
                                   isRegister={true}
                                   errorAuth={errorAuth}
                                   handleAuth={handleRegister}
                />}
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
