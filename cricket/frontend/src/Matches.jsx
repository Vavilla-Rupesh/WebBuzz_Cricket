import React from "react";
import { motion } from "framer-motion";
import "./Matches.css";

const matchesData = [
  {
    teams: "IND vs PAK",
    tournament: "ICC World Cup 2023",
    date: "October 15, 2023",
    time: "14:00 GMT",
    venue: "Eden Gardens, Kolkata"
  },
  {
    teams: "AUS vs ENG",
    tournament: "The Ashes",
    date: "November 1, 2023",
    time: "10:00 GMT",
    venue: "The Gabba, Brisbane"
  },
  {
    teams: "NZ vs SA",
    tournament: "Bilateral Series",
    date: "December 5, 2023",
    time: "03:00 GMT",
    venue: "Eden Park, Auckland"
  },
];

const Matches = () => {
  return (
    <motion.div 
      className="matches"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Upcoming Matches</h1>
      <div className="match-grid">
        {matchesData.map((match, index) => (
          <motion.div 
            key={index} 
            className="match-preview"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2>{match.teams}</h2>
            <p>{match.tournament}</p>
            <p>Date: {match.date}</p>
            <p>Time: {match.time}</p>
            <p>Venue: {match.venue}</p>
            <button className="btn">Set Reminder</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Matches;
