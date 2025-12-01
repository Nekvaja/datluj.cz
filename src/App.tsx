import { useEffect, useState } from 'react';
import Stage from './components/Stage';
import { Intro } from './components/Intro';
import './components/Light-Dark-Mode/toggle-switch.css';
import { LightModeIcon } from './components/Light-Dark-Mode/light-mode-icon';
import { DarkModeIcon } from './components/Light-Dark-Mode/dark-mode-icon';

export type startGameHandler = () => void;

const App: React.FC = () => {

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme =  localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  const handleStartGame = () => setIsGameStarted(!isGameStarted);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme)
  }, [theme])

   
   const toggleTheme = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light')
   }

  return (
    <div className="container">
      <h1>Datlování</h1>

      <div className="theme-switch-wrapper">
        {theme === 'light' ? < DarkModeIcon/> : < LightModeIcon/>}
        
        
        <label 
          className="theme-switch">
          <input 
            type="checkbox" 
            id="checkbox" 
            checked={theme === 'dark'}
            onChange={toggleTheme}/>
          <div className="slider round"></div>
        </label>
        
      </div>

      {isGameStarted ? (
        <Stage onStartGame={handleStartGame} />
      ) : (
        <Intro onStartGame={handleStartGame} theme={theme}/>
      )}
    </div>
  );
};


export default App;