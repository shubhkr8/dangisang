import React, { createContext, useContext, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

export const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

function App() {
  const [allProfile, setAllprofile] = useState([]);
  return (
    <UserContext.Provider value={{ allProfile, setAllprofile }}>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
