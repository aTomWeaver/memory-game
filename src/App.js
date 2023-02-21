import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  // sets state to [false, false, false, false, false, false,]; these are the isClicked values
  const [clickedCards, setClickedCards] = useState(Array(6).fill(false));
  const [score, setScore] = useState(0);

  const handleCardClick = (index) => {
    if (clickedCards[index] === true) {
      alert("Game Over!");
      // handleGameOver()
    } else {
      const newClickedCards = [...clickedCards];
      newClickedCards[index] = !newClickedCards[index];
      setClickedCards(newClickedCards);
      setScore(score + 1);
    }
  };


  const checkRoundWin = () => {
    if (clickedCards.every(card => card === true)) {
      alert('win!')
    }
  }

  useEffect(checkRoundWin, [clickedCards])


  return (
    <div>
      <h2>Score: {score}</h2>
      {/* here, the callback in array.map is taking parameters (currentValue, index) */}
      <div className="card-ctr">
        {clickedCards.map((isClicked, index) => (
          <div key={index}>
            <Card
              isClicked={clickedCards[index]}
              handleCardClick={() => handleCardClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
