


export const GameHeader = ({ score, moves }) => {


    return (
        <div className="game-header">
            <h1>🎮Memory Card Game</h1>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">Scores:</span>{" "}
                    <span className="stat-value">{score}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Moves:</span>{" "}
                    <span className="stat-value">{moves}</span>
                </div>
            </div>
            <button className="reset-btn" onClick={() => window.location.reload()}>
                Reset Game
            </button>
        </div>
    )
}