import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const CardHeder = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgb(0, 131, 187) 0%,
    rgba(18, 18, 18, 1) 80%
  );
  margin-bottom: 10px;
`;
export const CardTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #f44336;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
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

export const SingUpSpan = styled.span`
  color: green;
  border-bottom: red;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
`;
export const ErrorText = styled.div`
  color: #b94a48;
`;
export const SuccessText = styled.div`
  color: green;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledForm = styled(Form)`
  position: relative;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;
