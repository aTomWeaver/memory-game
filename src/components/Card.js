import "../styles/App.css";

function Card({ isClicked, handleCardClick }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: isClicked ? "red" : "blue",
      }}
      onClick={handleCardClick}
    ></div>
  );
}

export default Card;
