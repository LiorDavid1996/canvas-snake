import styled from "styled-components";

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
`;
export const TryAgainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 60%;
  height: 80%;
`;
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


