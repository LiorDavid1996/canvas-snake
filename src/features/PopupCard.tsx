import { Blur } from "../components/game/Game.styles"
import styled from "styled-components";

interface popUpProps{
    showPopUp: (isOpen: boolean) => void
}

const Card =styled("div")`
position: relative;
display: flex;
justify-content: center;
align-items: center;
background-color: #5b81c9;
height: 40vh;
width: 65vh;
border-radius: 30px;
color:white
`
const ExitButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
const Cont = styled.h3`
    color: white;
`

const PopupCard:React.FC<popUpProps>=({showPopUp})=>{
    const exitHandler = ()=>{
    showPopUp(false)

}
return(
    <Blur>
        <Card>
        <ExitButton onClick={exitHandler}>X</ExitButton>
        <Cont>
        Player positions and scores are available to registered users only 
        </Cont>
        </Card>
    </Blur>
)
}

export default PopupCard