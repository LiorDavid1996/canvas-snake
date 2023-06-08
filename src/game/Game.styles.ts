import styled from 'styled-components';

export const GameWrapper = styled.div`
  width: 100%auto;
  display: flex;
  align-items: center;
  outline: none;
  flex-direction: column;
`;




export const Blur = styled.div`
display: flex;
align-items: center;
justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.768);
  bottom: 0;
  z-index: 99;
`
export const TryAgainWrapper =styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: beige;
width: 60%;
height: 80%;
`
export const TryAgainButton = styled.button`
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 56px;
  justify-content: center;
  padding: 1rem 1.75rem;
  text-decoration: none;
  width: 40%;
  border: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &&:hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }
`;
export const ControlContainer =styled.div`
 width: 100%auto;
  display: flex;
  align-items: center;
  justify-content: center;
 
`
export const ControlWrapper =styled.div`

width: 50%;
 display: flex;

 
`
export  const PauseControl = styled.button`
  position: relative;
  width: 50px; 
  height: 30px; 
  background-color: #eaeaea; 
  
`
export const GreenSquare = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  background-color: green;
`;
export const ScoreNumber = styled.span`
   width: 50px;
  height: 30px;
  font-size: 25px;
  color: white;
 
`;

export const TrophyImage = styled.img`
 width: 50px;
  height: 30px;
  
  `

export const IconPlayStop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  z-index: 1;
`;

export const Table = styled.table`
  width: 40%;
  border-collapse: collapse;
  margin-bottom: 16px;
  border: 2px solid #ddd;
  border-radius: 400px;
`;

export const Th = styled.th`
  padding: 8px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: #f44336;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const ExitIcon = styled.img`
  height: 10px;
  width: 10px;
`;