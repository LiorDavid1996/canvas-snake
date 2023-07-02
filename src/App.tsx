import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";
import Header from "./features/header/Header";
import UserTable from "./components/pages/userTable/UsersTable";
import UsersProfile from "./components/pages/UsersProfile/UsersProfile";
import { AuthContext } from "./context/auth-context";
import NotLoggedInRoutes from "./Routs/NotLoggedIn";

const App = () => {
  const { user, setUser, bestScore, setBestScore } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route element={<NotLoggedInRoutes />}>
        <Route path="/UserTable" element={<UserTable/>} />
        <Route path="/profileCards" element={<UsersProfile />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default App;

