import React, { useState, useContext } from "react";
import styled from "styled-components";
import Game from "./components/game/Game";
import Header from "./features/header/Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Game />
    </>
  );
};

export default App;
