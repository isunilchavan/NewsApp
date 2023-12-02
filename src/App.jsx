import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [category, setCategory] = useState("general");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Home setCategory={setCategory} onLogout={handleLogout} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );

  function Home({ setCategory, onLogout }) {
    return (
      <div>
        <Navbar setCategory={setCategory} onLogout={onLogout} />
        <NewsBoard category={category} />
      </div>
    );
  }
};

export default App;
