# 🍎 Fruit Memory Card Game

A lightweight, fully interactive **Memory Match Game** built using **React**, **Vite**, and **Tailwind CSS**. Test your memory by matching pairs of delicious fruits in the fewest moves possible!

---

## 🌐 Live Demo

The application is deployed and running live on **Vercel**. You can play the game directly in your browser here:
👉 **[Play Memory Card Game](memory-card-game-five-ruby.vercel.app)**

---

## 🚀 Features

- **Dynamic Score Tracking:** Keeps real-time tabs on your current score and total moves.
- **Custom Hook Architecture:** Core game mechanics (shuffling, checking matches, resets) are efficiently managed via a custom `useGameLogic` hook.
- **Modular Components:** Built with reusable React components (`Card`, `GameHeader`, `WinMessage`).
- **Responsive Layout:** Fast, sleek card grid designed via utility-first CSS styling.
- **Instant Restart:** Quickly reset the game at any time or restart immediately after winning.

---

## 🛠️ Project Structure

The project follows a clean, component-driven structure:

```text
src/
├── components/
│   ├── Card.jsx          # Individual card flip and rendering
│   ├── GameHeader.jsx    # Displays Score, Moves, and the Reset button
│   └── WinMessage.jsx    # Pop-up notification triggered upon game completion
├── hooks/
│   └── useGameLogic.js   # Custom hook managing game arrays, states, and matchmaking
└── App.jsx               # Main assembly and entry layout
```

---

## ⚡ Getting Started (Local Development)

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com
cd memory-card
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to play!

---

## 📦 Tech Stack

- **Framework:** React 18+
- **Build Tool:** Vite (Optimized for ultra-fast local reloads)
- **Styling:** Tailwind CSS
