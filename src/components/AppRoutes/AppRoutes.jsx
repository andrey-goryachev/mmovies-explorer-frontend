import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {paths} from "../../utils/conts";
import ErrorPage from "../ErrorPage/ErrorPage";

function AppRoutes({
  movies,
  changeSearchText,
  searchText,
  loadingMovies,
  handleLoadingMovies,
  errorLoadingMovies,
  errorAuth,
  handleLogin,
  handleRegister,
  updateUser,
  logOut
}) {
  return (
    <Routes>
      <Route
        path={paths.main}
        element={<Main/>}
      />
      <Route
        path={paths.movies}
        element={<Movies movies={movies}
                         searchText={searchText}
                         changeSearchText={changeSearchText}
                         loadingMovies={loadingMovies}
                         handleLoadingMovies={handleLoadingMovies}
                         errorLoadingMovies={errorLoadingMovies}
        />}
      />
      <Route
        path={paths.savedMovies}
        element={<SavedMovies/>}
      />
      <Route
        path={paths.profile}
        element={<Profile updateUser={updateUser} logOut={logOut}/>}
      />
      <Route
        path={paths.signin}
        element={<Login header={'Рады видеть!'}
                        buttonText={'Войти'}
                        isRegister={false}
                        errorAuth={errorAuth}
                        handleAuth={handleLogin}
        />}
      />
      <Route
        path={paths.signup}
        element={<Register header={'Добро пожаловать!'}
                           buttonText={'Зарегистрироваться'}
                           isRegister={true}
                           errorAuth={errorAuth}
                           handleAuth={handleRegister}
        />}
      />
      <Route
        path={'*'}
        element={<ErrorPage/>}
      />
    </Routes>
  );
}

export default AppRoutes;
