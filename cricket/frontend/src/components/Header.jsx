import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="main-header">
      <div className="logo">Cricket Central</div>
      <nav>
        {isAuthenticated ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/live-scores">Live Scores</Link>
            <Link to="/matches">Matches</Link>
            <Link to="/players">Players</Link>
            <Link to="/teams">Teams</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;