import React, { useRef, useState } from 'react';
import Canvas from '../../canvas/Canvas';
import draw from '../../draw/draw';
import { GameWrapper, ControlWrapper } from './Game.styles';
import useGameLogic from '../../logic/useGameLogic';
import TryAgain from "../trayAgain/TryAgain";
import { Console } from 'console';
import Control from '../control/Control';
interface GameProps {}

export enum GameState {
  RUNNING,
  GAME_OVER,
  PAUSED,
}

const Game: React.FC<GameProps> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>(GameState.RUNNING);

  const onGameOver = () => setGameState(GameState.GAME_OVER);

  const { snakeBody, onKeyDownHandler, foodPosition, resetGameState } =
    useGameLogic({
      canvasHeight: 150,
      canvasWidth: 300,
      onGameOver,
      gameState,
    });

  const drawGame = (ctx: CanvasRenderingContext2D) => {
    draw({ ctx, snakeBody, foodPosition });
  };

  return (
   <>
     {gameState=== GameState.GAME_OVER&&<TryAgain gameState={gameState} setGameState={setGameState} resetGameState={resetGameState}  />}
     <Control score={(snakeBody.length - 1) * 10} gameState={gameState} setGameState={setGameState} />
    <GameWrapper tabIndex={0} onKeyDown={onKeyDownHandler}>
    
      <Canvas ref={canvasRef} draw={drawGame} />
    </GameWrapper>
    </>
  );
};

export default Game;
