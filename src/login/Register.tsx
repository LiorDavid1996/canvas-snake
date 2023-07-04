import { Blur } from "../components/game/Game.styles";
import axios from "axios";
import {
  CardTitle,
  Button,
  CardHeder,
  ExitButton,
  SingUpSpan,
  ErrorText,
  SuccessText,
  StyledForm,
  StyledInput,
  ErrorMsg
} from "./Login.styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState,useContext } from "react";
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from "../context/auth-context";


interface singUpProps {
  setIsVisible?: any;
}
const RegisterForm: React.FC<singUpProps> = ({ setIsVisible }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("What's your First name ?")
      .min(2, "Fisrt name must be between 2 and 16 characters.")
      .max(16, "Fisrt name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    lastName: Yup.string()
      .required("What's your Last name ?")
      .min(2, "Last name must be between 2 and 16 characters.")
      .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const {setUser}=useContext(AuthContext)
  const handleSubmit = async (values: any) => {
    console.log(values);
    setLoading(true);
    setError("");
    const bestScore= localStorage.getItem("bestScore") === null
    ? 0
    : localStorage.getItem("bestScore")
    
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/users/register`,
        {values,bestScore}
      );
      console.log(data);
      setLoading(false);
      setSuccess(data.message);
      setUser(data)
      setTimeout(setIsVisible(0), 5000)
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(
        (error as { response: { data: { message: string } } }).response.data
          .message
      );
    }
  };

  return (
    <Blur>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <ExitButton type="button" onClick={()=>{setIsVisible(0)}}>&times;</ExitButton>
          <CardHeder>
            <CardTitle className="font-link">SIMG UP!</CardTitle>
          </CardHeder>
          <StyledInput type="text" name="firstName" placeholder="Name" />
          <ErrorMsg name="firstName" component="div" className="error" />
          <StyledInput type="text" name="lastName" placeholder="Last Name" />
          <ErrorMsg name="lastName" component="div" className="error" />
          <StyledInput type="email" name="email" placeholder="Email" />
          <ErrorMsg name="email" component="div" className="error" />
          <StyledInput type="password" name="password" placeholder="Password" />
          <ErrorMsg name="password" component="div" className="error" />
          {error && <ErrorText>{error}</ErrorText>}
          {success && <SuccessText>{success}</SuccessText>}
          <div style={{marginLeft:"120px"}}>
          <DotLoader color="#1876f2" loading={loading} size={25} />
          </div>
          <SingUpSpan onClick={()=>{setIsVisible(1)}}>LOG IN</SingUpSpan>
          <Button type="submit">SING UP</Button>
        </StyledForm>
      </Formik>
    </Blur>
  );
};

export default RegisterForm;
