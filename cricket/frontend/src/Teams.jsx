import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Teams.css";

const teamsData = [
  { name: "India", flag: "🇮🇳", ranking: 1, captain: "Rohit Sharma", coach: "Rahul Dravid" },
  { name: "Australia", flag: "🇦🇺", ranking: 2, captain: "Pat Cummins", coach: "Andrew McDonald" },
  { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", ranking: 3, captain: "Jos Buttler", coach: "Matthew Mott" },
  { name: "New Zealand", flag: "🇳🇿", ranking: 4, captain: "Kane Williamson", coach: "Gary Stead" },
  { name: "South Africa", flag: "🇿🇦", ranking: 5, captain: "Temba Bavuma", coach: "Rob Walter" },
  { name: "Pakistan", flag: "🇵🇰", ranking: 6, captain: "Babar Azam", coach: "Grant Bradburn" },
];

const TeamPopup = ({ team, onClose }) => (
  <motion.div 
    className="team-popup"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
  >
    <h2>{team.flag} {team.name}</h2>
    <p><strong>World Ranking:</strong> {team.ranking}</p>
    <p><strong>Captain:</strong> {team.captain}</p>
    <p><strong>Coach:</strong> {team.coach}</p>
    <button onClick={onClose}>Close</button>
  </motion.div>
);

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <motion.div 
      className="teams-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Cricket Teams</h1>
      <div className="team-grid">
        {teamsData.map((team, index) => (
          <motion.div 
            key={index} 
            className="team-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedTeam(team)}
          >
            <div className="team-flag">{team.flag}</div>
            <h3>{team.name}</h3>
            <p>World Ranking: {team.ranking}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedTeam && (
          <motion.div 
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeam(null)}
          >
            <TeamPopup team={selectedTeam} onClose={() => setSelectedTeam(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Teams;
