import { useState } from 'react';
import Stage from './components/Stage';
import { Intro } from './components/Intro';

const App: React.FC = () => {

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  const handleStartGame = () => setIsGameStarted(true);
 
  return (
    <div className="container">
      <h1>Datlování</h1>

      {isGameStarted ? <Stage /> : <Intro onStartGame={handleStartGame}/>}
      
    </div>
  );
};

export default App;