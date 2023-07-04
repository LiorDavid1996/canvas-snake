import styled from 'styled-components';
export const ControlContainer =styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ControlWrapper =styled.div`
 width:782px;
 display: flex;
 
`
export  const ImgWrapper = styled.button`
  position: relative;
  width: 50px; 
  height: 30px; 
 
  
`
export const GreenSquare = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
  background-color: green;
`;
export const ScoreNumber = styled.span`
  font-size: 25px;
  color: white;
`;

export const TrophyImage = styled.img`
 width: 50px;
  height: 30px;
  
  `

export const Icon = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  object-fit: cover; 
  z-index: 1;
`;