import React from 'react';
import './Login.css'
import Auth from "../Auth/Auth";
function Login({ header, buttonText, isRegister }) {
  return (
    <section className={'login'}>
      <Auth header={header} buttonText={buttonText} isRegister={isRegister}/>
    </section>
  );
}

export default Login;
