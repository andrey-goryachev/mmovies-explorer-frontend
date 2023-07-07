import React from 'react';
import './Logo.css'
import logoPath from '../../images/logo.svg';
import {paths} from "../../utils/conts";
import {Link} from "react-router-dom";

function Logo() {
  return (
    <>
      <Link
        className='link logo'
        to={paths.main}
      >
        <img
          className="logo__img"
          src={logoPath}
          alt="логотип в виде круга"
        />
      </Link>
    </>
  );
}

export default Logo;
