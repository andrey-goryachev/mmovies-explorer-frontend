import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {paths} from "../../utils/conts";

function AppRoutes({movies}) {
  return (
    <Routes>
      <Route
        path={paths.main}
        element={<Main/>}
      />
      <Route
        path={paths.movies}
        element={<Movies/>}
      />
      <Route
        path={paths.savedMovies}
        element={<SavedMovies />}
      />
      <Route
        path={paths.profile}
        element={<Profile/>}
      />
      <Route
        path={paths.signin}
        element={<Login header={'Добро пожаловать!'} buttonText={'Зарегистрироваться'} isRegister={true}/>}
      />
      <Route
        path={paths.signup}
        element={<Register header={'Рады видеть!'} buttonText={'Войти'} isRegister={false}/>}
      />
      <Route
        path={'*'}
        element={}
      />
    </Routes>
  );
}

export default AppRoutes;
