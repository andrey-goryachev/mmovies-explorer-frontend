import './App.css'
import AppRoutes from "../AppRoutes/AppRoutes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";
import Popup from "../Popup/Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
          <AppRoutes/>
          <Popup isPopupOpen={isPopupOpen} openPopup={openPopup} closePopup={closePopup}/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
