import { Blur ,TryAgainButton ,TryAgainWrapper} from "../game/Game.styles"
import { GameState } from "../game/Game";
import { useEffect } from "react";
interface TryAgainProps {
    gameState:GameState
    setGameState:any
    resetGameState:any


}
const TryAgain:React.FC<TryAgainProps>=({gameState ,setGameState,resetGameState})=>{
    {console.log(gameState)
    }
   
 useEffect(()=>{
 resetGameState()
console.log("lll");

    },[])
return (
   <Blur>
    <TryAgainWrapper>
    <img src="sucker-mr-snake.gif"/>
    <TryAgainButton onClick={()=>setGameState(GameState.RUNNING)}> TRY AGAIN</TryAgainButton>
    
    </TryAgainWrapper>
   </Blur>
)
}


export default TryAgain
