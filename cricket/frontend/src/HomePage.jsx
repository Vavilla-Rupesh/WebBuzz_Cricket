import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaChartBar, FaCalendarAlt, FaUsers, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/live-scores"><FaChartBar /> Live Scores</Link></li>
          <li><Link to="/matches"><FaCalendarAlt /> Matches</Link></li>
          <li><Link to="/players"><FaUsers /> Players</Link></li>
          <li><Link to="/teams"><FaShieldAlt /> Teams</Link></li>
          <li onClick={handleLogout}><FaSignOutAlt /> Logout</li>
        </ul>
      </nav>
      
      <header className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1>Welcome to Cricket Central</h1>
          <p>Your ultimate destination for cricket action</p>
        </motion.div>
      </header>
      
      <main>
        <motion.section 
          className="featured-match"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2>Featured Match</h2>
          <div className="match-card">
            <h3>IND vs AUS</h3>
            <p>ICC World Cup 2023</p>
            <div className="score">
              <span>IND: 287/5 (45.0)</span>
              <span>AUS: 250/8 (50.0)</span>
            </div>
            <Link to="/live-scores" className="btn">View Live Score</Link>
          </div>
        </motion.section>
        
        <motion.section 
          className="top-performers"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2>Top Performers</h2>
          <div className="performer-cards">
            <div className="performer-card">
              <img src="https://via.placeholder.com/150" alt="Virat Kohli" />
              <h4>Virat Kohli</h4>
              <p>Batting Avg: 59.07</p>
            </div>
            <div className="performer-card">
              <img src="https://via.placeholder.com/150" alt="Joe Root" />
              <h4>Joe Root</h4>
              <p>Batting Avg: 50.01</p>
            </div>
          </div>
        </motion.section>
      </main>
      
      <footer>
        <p>&copy; 2023 Cricket Central. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;