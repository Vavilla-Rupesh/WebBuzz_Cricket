import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Players from "./Players";
import Teams from "./Teams";
import LiveScores from "./LiveScores";
import Matches from "./Matches";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/players"
              element={isAuthenticated ? <Players /> : <Navigate to="/login" />}
            />
            <Route
              path="/teams"
              element={isAuthenticated ? <Teams /> : <Navigate to="/login" />}
            />
            <Route
              path="/live-scores"
              element={isAuthenticated ? <LiveScores /> : <Navigate to="/login" />}
            />
            <Route
              path="/matches"
              element={isAuthenticated ? <Matches /> : <Navigate to="/login" />}
            />
            <Route
              path="/stats"
              element={isAuthenticated ? <Stats /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
