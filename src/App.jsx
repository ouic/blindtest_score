import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

function Player({ name, score, onIncrement, onDecrement }) {
  return (
    <div className="player">
      <span className="player-name">{name}</span>
      <div className="score-controls">
        <button onClick={onDecrement}>-</button>
        <span className="score">{score}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [showPodium, setShowPodium] = useState(false);

  const handleIncrement = (index) => {
    const newPlayers = [...players];
    newPlayers[index].score += 1;
    setPlayers(newPlayers);
  };

  const handleDecrement = (index) => {
    const newPlayers = [...players];
    newPlayers[index].score -= 1;
    setPlayers(newPlayers);
  };

  const handleAddPlayer = () => {
    if (newPlayerName.trim() !== '') {
      setPlayers([...players, { name: newPlayerName, score: 0 }]);
      setNewPlayerName('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddPlayer();
    }
  };

  const handleResetScores = () => {
    const newPlayers = players.map(player => ({ ...player, score: 0 }));
    const resetPlayers = newPlayers.map(player => ({ ...player, score: 0 }));
    setPlayers(resetPlayers);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleShowPodium = () => {
    setShowPodium(!showPodium);
  };

  useEffect(() => {
    if (showPodium) {
      triggerConfetti();
    }
  }, [showPodium]);

  const getPositionText = (index) => {
    return index + 1;
  };

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>BlindTest</h1>
      <h1 style={{ textAlign: 'center' }}>compteur de points</h1>
      <br></br>
      <div className="add-player" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nom du joueur"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1, marginRight: '10px' }}
        />
        <button onClick={handleAddPlayer}>Ajouter un joueur</button>
        <button onClick={handleResetScores} style={{ marginLeft: '10px' }}>Réinitialiser les scores</button>
      </div>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          score={player.score}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
        />
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleShowPodium} style={{ marginTop: '20px' }}>Podium</button>
      </div>

      {showPodium && (
        <div style={{ marginTop: '20px' }}>
          <h2>Classement final:</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Position</th>
                <th style={tableHeaderStyle}>Joueur</th>
                <th style={tableHeaderStyle}>Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((player, index) => (
                <tr key={index}>
                  <td style={tableCellStyle}>{getPositionText(index)}</td>
                  <td style={tableCellStyle}>{player.name}</td>
                  <td style={tableCellStyle}>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  border: '1px solid #ddd',
  textAlign: 'left'
};

const tableCellStyle = {
  padding: '8px',
  border: '1px solid #ddd'
};

export default App;
