import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaCalendarAlt, FaUsers, FaShieldAlt } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/live-scores">Live Scores</Link></li>
          <li><Link to="/players">Players</Link></li>
          <li><Link to="/stats">Stats</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      {/* ... rest of the component ... */}
    </div>
  );
};

export default HomePage;