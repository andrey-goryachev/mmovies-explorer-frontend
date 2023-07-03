import React from 'react';
import './Register.css'
import Auth from "../Auth/Auth";

function Register( { header, buttonText, isRegister } ) {
  return (
    <section className={'register'}>
      <Auth header={header} buttonText={buttonText} isRegister={isRegister}/>
    </section>
  );
}

export default Register;
