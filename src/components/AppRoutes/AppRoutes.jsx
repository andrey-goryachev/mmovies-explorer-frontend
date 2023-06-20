import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {paths} from "../../utils/conts";

function AppRoutes(props) {
  return (
    <Routes>
      <Route
        path={paths.main}
        element={<Main />}
      />
      <Route
        path={paths.movies}
        element={<Movies />}
      />
      <Route
        path={paths.savedMovies}
        element={<SavedMovies />}
      />
      <Route
        path={paths.profile}
        element={<Profile />}
      />
      <Route
        path={paths.signin}
        element={<Login />}
      />
      <Route
        path={paths.signup}
        element={<Register />}
      />
    </Routes>
  );
}

export default AppRoutes;
