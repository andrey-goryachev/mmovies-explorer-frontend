import React, {useEffect} from 'react';
import './Popup.css'
import Navigation from "../Navigation/Navigation";

function Popup({ isPopupOpen, openPopup, closePopup, isLogged }) {

  useEffect(() => {
    if (!isPopupOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isPopupOpen, closePopup]);

  return (
    <div
      className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}
    >
      <div className={`popup__container`}>
        <button
          className='button popup__button-close'
          type='button'
          onClick={closePopup}
        />
        <Navigation isPopup={isPopupOpen} openPopup={openPopup} closePopup={closePopup} isLogged={isLogged}/>
      </div>
    </div>
  );
}

export default Popup;
