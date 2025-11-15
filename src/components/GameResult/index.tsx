import "./style.css";
import type { startGameHandler } from "../../App";


interface GameResultProps {
    done: boolean;
    onNextStep: () => void;
    win: boolean;
    onStartGame: startGameHandler;
}

export const GameResult = ({ done, onNextStep, win, onStartGame }: GameResultProps) => {
  if (done) {
    if (win) {
      return (
        <div className="gameResult gameresult__win">
          <div className="gameResult__result">Výborně! Zvládl/a jsi všechna slova.</div>
          <button
                type="button" 
                className="gameresult__action" 
                onClick={onNextStep}
                autoFocus
                >
            Hrát znovu
          </button>
         <button
            type="button"
            className="gameresult__exit"
            onClick={onStartGame}    
            >Ukončit</button>
        </div>
      );
    } else {
      return (
        <div className="gameResult gameresult__done">
          <div className="gameResult__result">Splněno</div>
          <button 
            type="button"
            className="gameresult__action" 
            onClick={onNextStep}
            autoFocus
            >
            Pokračovat na další úroveň
          </button>
          <button
            type="button"
            className="gameresult__exit"
            onClick={onStartGame}    
            >Ukončit</button>
        </div>
      );
    }
  } else {
    return (
      <div className="gameResult gameresult__loss">
        <div className="gameResult__result">Nesplněno</div>
        <button 
            type="button"
            className="gameresult__action" 
            onClick={onNextStep}
            autoFocus
            >
          Zkusit znovu
        </button>
        <button
            type="button"
            className="gameresult__exit"
            onClick={onStartGame}    
            >Ukončit</button>
      </div>
    );
  }
};