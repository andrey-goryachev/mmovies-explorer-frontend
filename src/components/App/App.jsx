import './App.css'
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import Popup from "../Popup/Popup";
import MoviesApi from "../../utils/MoviesApi";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')
  const [loadingMovies, setLoadingMovies] = useState(false)

  const changeSearchText = (value) => setSearchText(value)
  const handleLoadingMovies = (value) => setLoadingMovies(!loadingMovies)

  useEffect(() => {
    const getMovies = async () => {
      setLoadingMovies(true)

      const allMovies = await MoviesApi.getMovies()
      setMovies(allMovies)

      setLoadingMovies(false)
    }
    if (searchText) {
      getMovies()
    }
  }, [searchText])

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <div className={'App'}>
      <div className={'page-container'}>
        <Header isPopupOpen={isPopupOpen} openPopup={openPopup} closePopup={closePopup}/>
        <main className={'main'}>
          <AppRoutes movies={movies}
                     searchText={searchText}
                     changeSearchText={changeSearchText}
                     loadingMovies = {loadingMovies}
                     handleLoadingMovies = {handleLoadingMovies}
          />
          <Popup isPopupOpen={isPopupOpen} openPopup={openPopup} closePopup={closePopup}/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
