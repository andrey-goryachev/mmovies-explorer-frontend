import React from 'react';
import './Preloader.css'


function Preloader({isRunning}) {
  return (
    <>
      {isRunning && <div className={'preloader'}>
        <div className={'preloader__container'}></div>
      </div>}
    </>
  );
}

export default Preloader;
