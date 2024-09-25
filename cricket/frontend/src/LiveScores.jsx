import React from 'react';
import { motion } from 'framer-motion';
import './LiveScores.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const LiveScores = () => {
  return (
    <motion.div 
      className="live-scores"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Live Scores</h1>
      <div className="score-cards">
        <motion.div 
          className="score-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2>IND vs AUS</h2>
          <p>ICC World Cup 2023</p>
          <div className="score">
            <span><i className="icon-bat">🏏</i> IND: 287/5 (45.0)</span>
            <span><i className="icon-ball">🏀</i> AUS: 250/8 (50.0)</span>
          </div>
          <button className="btn">View Details</button>
        </motion.div>
        <motion.div 
          className="score-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2>ENG vs NZ</h2>
          <p>T20I Series</p>
          <div className="score">
            <span><i className="icon-bat">🏏</i> ENG: 180/4 (20.0)</span>
            <span><i className="icon-ball">🏀</i> NZ: 165/9 (20.0)</span>
          </div>
          <button className="btn">View Details</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LiveScores;