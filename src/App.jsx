import { useState } from 'react';
import Header from '/src/components/Header';
import MatchDisplay from '/src/components/MatchDisplay';
import Footer from '/src/components/Footer';
import '/src/App.css'; 

function App() {
  const [matches, setMatches] = useState([
    { image: '/src/assets/benzema.png', description: 'is this Benzema ?' },
    { image: '/src/assets/messi.png', description: 'is this Ronaldo ?' },
    { image: '/src/assets/ramos.png', description: 'is this salah >' },
    { image: '/src/assets/ronaldo.png', description: 'is this ronaldo ?' },
    { image: '/src/assets/salah.png', description: 'is this ali ?' },
  ]);

  const [trueCount, setTrueCount] = useState(0);
  const [falseCount, setFalseCount] = useState(0);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const handlePositiveReaction = () => {
    setTrueCount(trueCount + 1);
    setCurrentMatchIndex(currentMatchIndex + 1);
  };

  const handleNegativeReaction = () => {
    setFalseCount(falseCount + 1);
    setCurrentMatchIndex(currentMatchIndex + 1);
  };

  return (
    <div className="App">
      <Header positiveCount={trueCount} negativeCount={falseCount} />
      <MatchDisplay match={matches[currentMatchIndex]} />
      <Footer
        onPositiveClick={handlePositiveReaction}
        onNegativeClick={handleNegativeReaction}
      />
    </div>
  );
}

export default App;
