import "../styles/App.css";

function Card({ isClicked, handleCardClick }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: isClicked ? "#F3CDCD" : "#D0EFD5",
      }}
      onClick={handleCardClick}
    ></div>
  );
}

export default Card;
