import React from "react";
import { motion } from "framer-motion";
import "./Players.css";

const playersData = [
  { 
    name: "Virat Kohli", 
    country: "India", 
    role: "Batsman", 
    average: 59.07,
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/09/3a4b4f3c-3c1e-4e9e-9c9a-9f0d9b3a3f3a/Kohli.jpg"
  },
  { 
    name: "Steve Smith", 
    country: "Australia", 
    role: "Batsman", 
    average: 61.37,
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/09/3a4b4f3c-3c1e-4e9e-9c9a-9f0d9b3a3f3a/Smith.jpg"
  },
  { 
    name: "Kane Williamson", 
    country: "New Zealand", 
    role: "Batsman", 
    average: 54.31,
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/09/3a4b4f3c-3c1e-4e9e-9c9a-9f0d9b3a3f3a/Williamson.jpg"
  },
  { 
    name: "Joe Root", 
    country: "England", 
    role: "Batsman", 
    average: 50.01,
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/09/3a4b4f3c-3c1e-4e9e-9c9a-9f0d9b3a3f3a/Root.jpg"
  },
  { 
    name: "Babar Azam", 
    country: "Pakistan", 
    role: "Batsman", 
    average: 56.92,
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/09/3a4b4f3c-3c1e-4e9e-9c9a-9f0d9b3a3f3a/Azam.jpg"
  },
  { 
    name: "Jasprit Bumrah", 
    country: "India", 
    role: "Bowler", 
    average: 21.99,
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2019/08/09/3a4b4f3c-3c1e-4e9e-9c9a-9f0d9b3a3f3a/Bumrah.jpg"
  },
];

const Players = () => {
  return (
    <motion.div 
      className="players-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Top Cricket Players</h1>
      <div className="player-grid">
        {playersData.map((player, index) => (
          <motion.div 
            key={index} 
            className="player-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={player.image} alt={player.name} className="player-image" />
            <h3>{player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Role: {player.role}</p>
            <p>Average: {player.average}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Players;
