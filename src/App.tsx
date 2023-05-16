import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Componets/Home";
import LoginPage from "./Componets/LoginPage";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)

  return (
    <Router>
      {isAuthenticated ? (
        <Home />
      ) : (
        <LoginPage />
      )}
    </Router>
  );
};

export default App;