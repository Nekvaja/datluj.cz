import { useEffect, useState } from 'react';
import Stage from './components/Stage';
import { Intro } from './components/Intro';

export type startGameHandler = () => void;

const App: React.FC = () => {

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('dark');

  const handleStartGame = () => setIsGameStarted(!isGameStarted);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])


 
  return (
    <div className="container">
      <h1>Datlování</h1>

      {isGameStarted ? <Stage onStartGame={handleStartGame}/> : <Intro onStartGame={handleStartGame} />}
      
    </div>
  );
};

export default App;