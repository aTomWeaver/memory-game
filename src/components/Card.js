import "../styles/App.css";

function Card({ isClicked, handleCardClick, color }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: isClicked ? color.clicked : color.unclicked,
      }}
      onClick={handleCardClick}
    ></div>
  );
}

export default Card;
