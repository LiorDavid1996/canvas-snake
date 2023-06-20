import styled from 'styled-components';
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
 position: absolute;
  top: -5px;
  right: -5px;
  font-size: 30px;
  background-color: transparent;
  color: #888;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const ExitIcon = styled.img`
  height: 10px;
  width: 10px;
`;
export const UserTableErro =styled.div`
position: relative;
display: flex;
justify-content: center ;
align-items: center;
height: 40%;
width: 40%;
color: #ffffff;
background-color: #333333;

`
export const ScoreNumber = styled.span`

  font-size: 15px;
  color: white;
 
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