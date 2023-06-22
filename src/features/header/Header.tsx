import {useState,useContext} from "react"
import { AuthContext } from "../../context/auth-context";
import styled from "styled-components"
import RegisterForm from "../../login/Register";
import LoginForm from "../../login/LogIn";
import {useNavigate} from "react-router-dom"



const Header = ()=>{
    const [isVisible, setIsVisible] = useState(0);
    const { user, setUser ,bestScore, setBestScore} = useContext(AuthContext);
    const navigate = useNavigate()
    const Button = styled.button`
    position: relative;
    top: 16px;
    left: 16px;
    padding: 8px 16px;
    background-color: #f44336;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;
    const logout = () => {
      localStorage.removeItem("bestScore");
      setBestScore(0)
      setUser(null)
      navigate("/")
    };
  
    const renderAuthenticationButton = () => {
      if (!user) {
        return (
          <Button onClick={() => setIsVisible(1)}>Sign Up / Log In</Button>
        );
      } else {
        return <Button onClick={logout}>Logout</Button>;
      }
    };

return(
    <>
    {isVisible === 1 && <LoginForm setIsVisible={setIsVisible} />}
    {isVisible === 2 && <RegisterForm setIsVisible={setIsVisible} />}
    {renderAuthenticationButton()}
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1 className="font-link title">SNAKE GAME</h1>
    </div>
    </>
)
}
export default Header