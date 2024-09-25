import React, { useState, useEffect } from 'react';
import './Stats.css';

const Stats = () => {
  const [stats, setStats] = useState({
    topBatsmen: [
      { name: "Virat Kohli", runs: 12169, average: 59.07, strikeRate: 93.17 },
      { name: "Rohit Sharma", runs: 9205, average: 48.96, strikeRate: 88.90 },
      { name: "Kane Williamson", runs: 6173, average: 47.48, strikeRate: 81.39 },
      { name: "Joe Root", runs: 6109, average: 51.33, strikeRate: 86.94 }
    ],
    topBowlers: [
      { name: "Jasprit Bumrah", wickets: 108, economy: 4.65, average: 25.33 },
      { name: "Trent Boult", wickets: 170, economy: 5.03, average: 25.87 },
      { name: "Kagiso Rabada", wickets: 124, economy: 4.99, average: 27.29 },
      { name: "Pat Cummins", wickets: 111, economy: 5.25, average: 28.78 }
    ],
    recentMatches: [
      { teams: "India vs Australia", result: "India won by 6 wickets", date: "2023-03-22" },
      { teams: "England vs New Zealand", result: "England won by 3 runs", date: "2023-03-20" },
      { teams: "South Africa vs Pakistan", result: "South Africa won by 5 wickets", date: "2023-03-18" }
    ]
  });

  return (
    <div className="stats-container">
      <h1>Cricket Statistics</h1>
      
      <div className="stats-layout">
        <section className="stats-section">
          <h2>Top Batsmen</h2>
          <div className="stats-grid">
            {stats.topBatsmen.map((batsman, index) => (
              <div key={index} className="stats-card">
                <h3>{batsman.name}</h3>
                <div className="stats-info">
                  <p><span>Runs:</span> {batsman.runs}</p>
                  <p><span>Average:</span> {batsman.average}</p>
                  <p><span>Strike Rate:</span> {batsman.strikeRate}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-section">
          <h2>Top Bowlers</h2>
          <div className="stats-grid">
            {stats.topBowlers.map((bowler, index) => (
              <div key={index} className="stats-card">
                <h3>{bowler.name}</h3>
                <div className="stats-info">
                  <p><span>Wickets:</span> {bowler.wickets}</p>
                  <p><span>Economy:</span> {bowler.economy}</p>
                  <p><span>Average:</span> {bowler.average}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="stats-section recent-matches">
        <h2>Recent Matches</h2>
        <div className="stats-list">
          {stats.recentMatches.map((match, index) => (
            <div key={index} className="match-card">
              <h3>{match.teams}</h3>
              <p className="match-result">{match.result}</p>
              <p className="match-date">Date: {match.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;