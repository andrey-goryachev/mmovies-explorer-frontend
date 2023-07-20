import React from 'react';
import './Register.css'
import Auth from "../Auth/Auth";


function Register( { header, buttonText, isRegister, errorAuth, handleAuth, fieldsBlocking } ) {
  return (
    <section className={'register'}>
      <Auth header={header}
            buttonText={buttonText}
            isRegister={isRegister}
            errorAuth={errorAuth}
            handleAuth={handleAuth}
            fieldsBlocking={fieldsBlocking}
      />
    </section>
  );
}

export default Register;
