import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  ControlWrapper,
  GreenSquare,
  TrophyImage,
  ScoreNumber,
  PauseControl,
  ControlContainer,
  IconPlayStop,
} from "./Control.styles";
import UserTable from "../pages/userTable/UsersTable";
import { AuthContext } from "../../context/auth-context";
import { GameState } from "../game/Game";
import { Link } from "react-router-dom"

interface ScoreProps {
  score: number;
  gameState: GameState;
  setGameState: (state: GameState) => void;
}

const Control: React.FC<ScoreProps> = ({ score, gameState, setGameState }) => {
  const [showTable, setShowTable] = useState(false);
  const { user, bestScore, setBestScore } = useContext(AuthContext);

  useEffect(() => {
 
        const storedBestScore = localStorage.getItem("bestScore");
    if (storedBestScore ) {
      setBestScore(parseInt(storedBestScore));
    
    }
  
  }, []);
  useEffect(() => {
    const updateScore = async () => {
      try {
        await axios.put(`http://localhost:8080/api/users/updateScore`, {
          id: user?.id,
          score,
        });
        setBestScore(score);
        localStorage.setItem("bestScore", `${score}`);
      } catch (error) {
        console.log(error);
      }
    };

    if (gameState === GameState.GAME_OVER && user && score > bestScore) {
        updateScore();
    } else {
      if (score > bestScore && gameState === GameState.GAME_OVER) {
        setBestScore(score);
        localStorage.setItem("bestScore", `${score}`);
      }
    }
  }, [gameState, score, user, bestScore, setBestScore]);

  const handlePauseControlClick = () => {
    setGameState(gameState === GameState.RUNNING ? GameState.PAUSED : GameState.RUNNING);
  };

  const handleTableControlClick = () => {
    console.log("Link");
    
   <Link to="/UserTable" relative="path"/>
  };


  return (
    <ControlContainer>
    
      <ControlWrapper>
        <PauseControl onClick={handlePauseControlClick}>
          <IconPlayStop
            src={gameState === GameState.RUNNING ? "Pause-icon.png" : "Play-icon.png"}
          />
        </PauseControl>
   <Link to="/UserTable" relative="path">
   <PauseControl onClick={handleTableControlClick}>

     <IconPlayStop src="podium-icon-13.jpg" />
        </PauseControl>
   </Link>

         
        <GreenSquare />
        <ScoreNumber>{score}</ScoreNumber>
        <TrophyImage src="5987898.png" />
        <ScoreNumber>{bestScore}</ScoreNumber>
      </ControlWrapper>
    </ControlContainer>
  );
};

export default Control;



