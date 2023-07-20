import React, {useEffect} from 'react';
import './InfoTooltip.css'
import successfullyPath from '../../images/successfully.svg';
import unsuccessfullyPath from '../../images/unsuccessfully.svg';

function InfoTooltip({isOpen, onClose, successfully}) {

  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  };

  return (
    <div
      className={`info-tool-tip ${isOpen ? 'info-tool-tip_opened' : ''}`}
      onClick={handleOverlay}
    >
      <div className={`info-tool-tip__container`}>
        <img
          className='info-tool-tip__image'
          src={successfully ? successfullyPath : unsuccessfullyPath}
          alt={successfully ? 'Знак успешного ответа от сервера' : 'Знак неуспешного ответа от сервера'}
        />
        <h2 className='info-tool-tip__title'>
          {successfully ? 'Данные успешно изменены!' : `Что-то пошло не так! Попробуйте ещё раз.`}
        </h2>
        <button
          className='info-tool-tip__cross button'
          type='button'
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
