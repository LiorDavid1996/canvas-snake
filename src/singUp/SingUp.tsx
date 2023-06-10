import { Blur } from "../game/Game.styles";
import styled from 'styled-components';

import {
  Card,
  CardTitle,
  Button,
  Input,
  CardHeder,
  ExitButton,
  SingUpSpan,
} from "./SingUp.styles";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


interface singUpProps {
  title: string;
  setTitle:any
  setIsVisible?: any;
  
  
}
const SingUp: React.FC<singUpProps> = ({ title, setTitle, setIsVisible }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      });
 const StyledInput = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
`;
      
    const handleExitButton = () => {
      setIsVisible(false);
      setTitle("LOG IN");
    };
  
    const handleSubmit = (values: any) => {
      // Handle form submission here
      console.log(values);
    };
  
    return (
        
      <Blur>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Card>
              <ExitButton onClick={handleExitButton}>&times;</ExitButton>
              <CardHeder>
                <CardTitle className="font-link">{title}</CardTitle>
              </CardHeder>
              {title === "Sing Up" && (
                <>
                  <StyledInput type="text" name="name" placeholder="Name"  />
                  <ErrorMsg name="name" component="div" className="error" />
  
                  <StyledInput type="text" name="lastName" placeholder="Last Name" />
                  <ErrorMsg name="lastName" component="div" className="error" />
                </>
              )}
  
              <StyledInput type="email" name="email" placeholder="Email" />
              <ErrorMsg name="email" component="div" className="error" />
  
              <StyledInput type="password" name="password" placeholder="Password" />
              <ErrorMsg name="password" component="div" className="error" />
  
              <SingUpSpan
                onClick={() =>
                  setTitle((prevState: string) =>
                    prevState === "LOG IN" ? "Sing Up" : "LOG IN"
                  )
                }
              >
                {title === "LOG IN" ? "Sing Up" : "LOG IN"}
              </SingUpSpan>
  
              <Button type="submit">{title}</Button>
            </Card>
          </Form>
        </Formik>
      </Blur>
    );
  };

  export default SingUp