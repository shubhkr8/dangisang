import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import MidDiv from "./components/MidDiv/MidDiv";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState(null);
  return (
    <UserContext.Provider value={{ isLogin, role, setIsLogin, setRole }}>
      <Header />
      <MidDiv />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
