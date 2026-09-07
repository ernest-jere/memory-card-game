import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";


function App() {
  const cardValues = [
    "🍎", "🍐", "🍊", "🍋", "🍌", "🍍", "🥥", "🥝",
    "🍎", "🍐", "🍊", "🍋", "🍌", "🍍", "🥥", "🥝"
  ];

  const { cards, handleCardClick, score, moves, initializeGame, gameWon } = useGameLogic(cardValues);
  return (
    <div className="app">
      {/* 🌟 Pass the dynamic state values into your header component */}
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {gameWon && <WinMessage moves={moves} onReset={initializeGame} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} key={card.id} onClick={() => handleCardClick(card)} />
        ))}
      </div>
    </div>
  );
}

export default App;
