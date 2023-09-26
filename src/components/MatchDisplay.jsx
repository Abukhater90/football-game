import '/src/App.css'; 


function MatchDisplay({ match }) {
  return (
    <div className="match-display">
      <img src={match.image} alt={match.description} />
      <p>{match.description}</p>
    </div>
  );
}

export default MatchDisplay;
