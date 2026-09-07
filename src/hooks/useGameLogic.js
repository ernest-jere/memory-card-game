
import { useState, useEffect } from "react";

const MAX_MATCHES = 8; 


export const useGameLogic = (cardValues) => {


    const [cards, setCards] = useState([]);
      const [disabled, setDisabled] = useState(false);
      const [gameWon, setGameWon] = useState(false);
      
      // 🌟 NEW: States to track game progress
      const [score, setScore] = useState(0);
      const [moves, setMoves] = useState(0);
    
      const initializeGame = () => {
        setGameWon(false);
        const shuffledValues = [...cardValues].sort(() => Math.random() - 0.5);
    
        const finalCards = shuffledValues.map((value, index) => ({
          id: index,
          value: value,
          isFlipped: false,
          isMatched: false
        }));
        
        setCards(finalCards);
        // 🌟 Reset stats when a new game starts
        setScore(0);
        setMoves(0);
      };
    
      useEffect(() => {
        initializeGame(); 
      }, []);
    
      useEffect(() => {
        const flippedCards = cards.filter(card => card.isFlipped && !card.isMatched);
    
        if (flippedCards.length === 2) {
          setDisabled(true);
          const [firstCard, secondCard] = flippedCards;
    
          // 🌟 Increment moves every time a player turns over a pair
          setMoves(prevMoves => prevMoves + 1);
    
          if (firstCard.value === secondCard.value) {
            // MATCH FOUND
            setCards(prevCards => 
              prevCards.map(card => {
                if (card.id === firstCard.id || card.id === secondCard.id) {
                  return { ...card, isMatched: true };
                }
                return card;
              })
            );
            
            // 🌟 Increment score by 1 (or 10, depending on your preference)
            setScore(prevScore => prevScore + 1);
            setDisabled(false);
          } else {
            // NO MATCH
            setTimeout(() => {
              setCards(prevCards => 
                prevCards.map(card => {
                  if (card.id === firstCard.id || card.id === secondCard.id) {
                    return { ...card, isFlipped: false };
                  }
                  return card;
                })
              );
              setDisabled(false);
            }, 1000);
          }
        }
      }, [cards]);
    
      useEffect(() => {
      if (score === MAX_MATCHES) {
        setGameWon(true);
      }
    }, [score]);
    
      const handleCardClick = (clickedCard) => {
        if (disabled || clickedCard.isFlipped || clickedCard.isMatched) return;
    
        setCards(prevCards => 
          prevCards.map((c) => {
            if (c.id === clickedCard.id) {
              return { ...c, isFlipped: true };
            }
            return c;
          })
        );
      };
      
      return {
        cards,
        handleCardClick,    
        score,
        moves,
        initializeGame,
        gameWon
      };

}