import Game from "./game/Game";
import "./App.css";
import styled from "styled-components";
import SingUp from "./singUp/SingUp";
import { useState } from "react";

const Button = styled.button`
  position: relative;
  top: 16px;
  left: 16px;
  padding: 8px 16px;
  background-color: #f44336;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("LOG IN ");
  const [contextChange, setContextChange] = useState(false);
  return (
    <>
      {isVisible && (
        <SingUp
          title={title}
           setTitle={setTitle}
          setIsVisible={setIsVisible}
        />
      )}

      <Button onClick={() => setIsVisible(true)}>sing up / Log in</Button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="font-link title">SNAKE GAME</h1>
      </div>
      <Game />
    </>
  );
}

export default App;
