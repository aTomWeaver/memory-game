import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/App.css";

function App() {
  // sets state to [false, false, false, false, false, false,]; these are the isClicked values
  const [clickedCards, setClickedCards] = useState(Array(4).fill(false));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleCardClick = (index) => {
    if (clickedCards[index] === true) {
      handleGameOver();
    } else {
      const newClickedCards = [...clickedCards];
      newClickedCards[index] = !newClickedCards[index];
      randomizeArray(newClickedCards);
      setClickedCards(newClickedCards);
      setScore(score + 1);
    }
  };

  // this function came from chatGPT
  function randomizeArray(array) {
    // loop through array from last to first element
    for (let i = array.length - 1; i > 0; i--) {
      // generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      // swap the current element with the randomly selected one
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const checkHighScore = () => {
    if (score > highScore) setHighScore(score);
  };

  const checkRoundWin = () => {
    if (clickedCards.every((card) => card === true)) {
      alert("win!");
      setClickedCards(Array(clickedCards.length + 1).fill(false));
    }
  };

  const handleGameOver = () => {
    alert("Game Over!");
    setClickedCards(Array(4).fill(false));
    setScore(0);
  };

  useEffect(checkRoundWin, [clickedCards]);
  useEffect(checkHighScore, [score]);

  return (
    <div>
      <header className="header">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </header>

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
