import {
  ControlWrapper,
  GreenSquare,
  TrophyImage,
  ScoreNumber,
  PauseControl,
  ControlContainer,
  IconPlayStop,
} from "./Game.styles";
import { useState } from "react";
import { GameState } from "./Game";
import UserTable from "./UsersTable";
interface ScoreProps {
  score: number;
  gameState: GameState;
  setGameState:any
  resetGameState:any
}
const users =[
    {name:"lior",score:"111"},
    {name:"dan",score:"133"},
    {name:"shire",score:"232"},
    {name:"or",score:"122"},
    {name:"daniel",score:"222"},
    {name:"moran",score:"323"},
    {name:"hen",score:"121"},
    {name:"chen",score:"322"},
    {name:"sahr",score:"121"},
    {name:"nir",score:"323"},
]
const Control: React.FC<ScoreProps> = ({ score, gameState,setGameState,resetGameState }) => {
  const [bestScore, setBestScore] = useState(0);
  const [showTable,setShowTable]=useState(false)

  if (gameState === GameState.GAME_OVER) {
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem("bestScore", `${score}`);
    }

  }
  return (
    <ControlContainer>
     {showTable&&<UserTable users={users} setShowTable={setShowTable} />}
      <ControlWrapper>
        <PauseControl onClick={()=>{
            setGameState(gameState === GameState.RUNNING ? GameState.PAUSED : GameState.RUNNING)
        }}>
            {
                 gameState === GameState.RUNNING? <IconPlayStop src="Pause-icon.png"/> :  <IconPlayStop src="Play-icon.png"/>
            }


        </PauseControl>
        
        <PauseControl onClick={()=>{
          setShowTable(true) 
        }}>
            
            <IconPlayStop src="podium-icon-13.jpg"/>
        </PauseControl>
        <GreenSquare />
        <ScoreNumber>{score}</ScoreNumber>
        <TrophyImage src="5987898.png"/>
        <ScoreNumber>
          {localStorage.getItem("bestScore") === null
            ? `${bestScore}`
            : localStorage.getItem("bestScore")}
        </ScoreNumber>
      </ControlWrapper>
    </ControlContainer>
  );
};

export default Control;
