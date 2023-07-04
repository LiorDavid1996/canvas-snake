import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  ControlWrapper,
  GreenSquare,
  TrophyImage,
  ScoreNumber,
  ImgWrapper,
  ControlContainer,
  Icon,
} from "./Control.styles";
import { AuthContext } from "../../context/auth-context";
import { GameState } from "../game/Game";
import PopupCard from "../../features/PopupCard";
import { useNavigate } from "react-router-dom";

interface ControlProps {
  score: number;
  gameState: GameState;
  setGameState: (state: GameState) => void;
}

const Control: React.FC<ControlProps> = ({
  score,
  gameState,
  setGameState,
}) => {
  const [sam, setSam] = useState(false);
  const navigate = useNavigate();

  const { user, bestScore, setBestScore } = useContext(AuthContext);

  useEffect(() => {
    const storedBestScore = localStorage.getItem("bestScore");
    if (storedBestScore) {
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

  const handleImgWrapperClick = () => {
    setGameState(
      gameState === GameState.RUNNING ? GameState.PAUSED : GameState.RUNNING
    );
  };

  const handleTableControlClick = () => {
    if (user) {
      navigate("/UserTable");
    } else {
      console.log(sam);

      setSam(true);
    }
  };

  return (
    <ControlContainer>
      <ControlWrapper>
        <ImgWrapper onClick={handleImgWrapperClick}>
          <Icon
            src={
              gameState === GameState.RUNNING
                ? "Pause-icon.png"
                : "Play-icon.png"
            }
          />
        </ImgWrapper>

        <ImgWrapper type="button" onClick={handleTableControlClick}>
          <Icon src="podium-icon-13.jpg" />
        </ImgWrapper>

        <GreenSquare />
        <ScoreNumber>{score}</ScoreNumber>
        <TrophyImage src="5987898.png" />
        <ScoreNumber>{bestScore}</ScoreNumber>
      </ControlWrapper>
      {sam && <PopupCard showPopUp={setSam} />}
    </ControlContainer>
  );
};

export default Control;
