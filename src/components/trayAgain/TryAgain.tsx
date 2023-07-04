import { Blur, TryAgainButton, TryAgainWrapper } from "../game/Game.styles";
import { GameState } from "../game/Game";
import { useEffect } from "react";
interface TryAgainProps {
  
  setGameState: (state: GameState) => void;
  resetGameState: () => void;
}
const TryAgain: React.FC<TryAgainProps> = ({
  setGameState,
  resetGameState,
}) => {
  
  useEffect(() => {
    resetGameState();
  }, []);

  return (
    <Blur>
      <TryAgainWrapper>
        <TryAgainButton onClick={() => setGameState(GameState.RUNNING)}>
          {" "}
          TRY AGAIN
        </TryAgainButton>
      </TryAgainWrapper>
    </Blur>
  );
};

export default TryAgain;
