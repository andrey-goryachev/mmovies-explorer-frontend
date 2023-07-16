import './App.css'
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import Popup from "../Popup/Popup";
import MoviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import {useNavigate} from "react-router-dom";
import {paths} from "../../utils/conts";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

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
          <Header isPopupOpen={isPopupOpen}
                  openPopup={openPopup}
                  closePopup={closePopup}
                  isLogged={isLogged}
          />
          <main className={'main'}>
            <AppRoutes movies={movies}
                       searchText={searchText}
                       changeSearchText={changeSearchText}
                       loadingMovies={loadingMovies}
                       handleLoadingMovies={handleLoadingMovies}
                       errorLoadingMovies={errorLoadingMovies}
                       errorAuth={errorAuth}
                       handleRegister={handleRegister}
                       handleLogin={handleLogin}
                       updateUser={updateUser}
                       logOut={logOut}
            />
            <Popup isPopupOpen={isPopupOpen} openPopup={openPopup} closePopup={closePopup}/>
          </main>
          <Footer/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
