import React from 'react';
import './Login.css'
import Auth from "../Auth/Auth";
function Login({ header, buttonText, isRegister, errorAuth, handleAuth }) {
  return (
    <section className={'login'}>
      <Auth header={header}
            buttonText={buttonText}
            isRegister={isRegister}
            errorAuth={errorAuth}
            handleAuth={handleAuth}
      />
    </section>
  );
}

export default Login;
