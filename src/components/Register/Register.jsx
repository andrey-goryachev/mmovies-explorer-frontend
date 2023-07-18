import React from 'react';
import './Register.css'
import Auth from "../Auth/Auth";


function Register( { header, buttonText, isRegister, errorAuth, handleAuth } ) {
  return (
    <section className={'register'}>
      <Auth header={header}
            buttonText={buttonText}
            isRegister={isRegister}
            errorAuth={errorAuth}
            handleAuth={handleAuth}
      />
    </section>
  );
}

export default Register;
