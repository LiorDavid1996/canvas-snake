import { Blur } from "../components/game/Game.styles";
import styled from "styled-components";
import axios from "axios";
import {
  Card,
  CardTitle,
  Button,
  Input,
  CardHeder,
  ExitButton,
  SingUpSpan,
  ErrorText,
  SuccessText,
} from "./Login.styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState , useContext } from "react";
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from "../context/auth-context";

interface singUpProps {
  setIsVisible?: any;
}


const StyledInput = styled(Field)`
width: 100%;
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
`;
const StyledForm = styled(Form)`
position: relative;
width: 300px;
padding: 20px;
border: 1px solid #ccc;
border-radius: 4px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const ErrorMsg = styled(ErrorMessage)`
color: red;
font-size: 14px;
margin-bottom: 5px;
`;
const LoginForm: React.FC<singUpProps> = ({ setIsVisible }) => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const {user,setUser,setBestScore}=useContext(AuthContext)
  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address is required.")
      .email("Must be a valid email.")
      .max(100),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    console.log(user,"888")
    console.log(values);
    setLoading(true);
    setError("");
  
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/users/login`,
        values
      );
      localStorage.removeItem("bestScore")
      setBestScore(data.score)
      console.log(data.score);
      setUser(data)
      setIsVisible(0)
      setLoading(false);

      setSuccess(data.message);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(
        (error as { response: { data: { message: string } } }).response.data
          .message
      );
    }
  };
  
return(
  <Blur>
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={loginValidation}
    onSubmit={handleSubmit}
  >
 
    <StyledForm>
      <ExitButton type="button"  onClick={() => setIsVisible(0)}>&times;</ExitButton>
      <CardHeder>
        <CardTitle className="font-link">Login!</CardTitle>
      </CardHeder>
      <StyledInput type="email" name="email" placeholder="Email" />
      <ErrorMsg name="email" component="div" className="error" />
      <StyledInput type="password" name="password" placeholder="Password" />
      <ErrorMsg name="password" component="div" className="error" />
      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}
      <div style={{marginLeft:"120px"}}>
      <DotLoader color="#1876f2" loading={loading} size={25} />
      </div>
      <SingUpSpan onClick={()=>{setIsVisible(2)}}>Register</SingUpSpan>
      
      <Button type="submit">Login</Button>
    </StyledForm>
  </Formik>
</Blur>
)
}

export default LoginForm;