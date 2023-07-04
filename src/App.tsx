
import { Routes, Route } from "react-router-dom";
import Game from "./components/game/Game";
import Header from "./features/header/Header";
import UserTable from "./components/pages/userTable/UsersTable";
import UsersProfile from "./components/pages/UsersProfile/UsersProfile";


const App = () => {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/UserTable" element={<UserTable/>} />
        <Route path="/profileCards" element={<UsersProfile />} />
        
        
      </Routes>
    </>
  );
};

export default App;

