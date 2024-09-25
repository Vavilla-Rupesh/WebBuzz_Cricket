import { db } from "../server.js";

export const getLiveScores = async (req, res) => {
  try {
    const query = "SELECT * FROM live_scores ORDER BY id DESC LIMIT 5";
    const result = await db.query(query);
    res.json(result.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching live scores", error: error.message });
  }
};

export const getPlayerStats = async (req, res) => {
  const { playerId } = req.params;
  try {
    const query = "SELECT * FROM player_stats WHERE player_id = $1";
    const result = await db.query(query, [playerId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching player stats", error: error.message });
  }
};
