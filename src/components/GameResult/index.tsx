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
          <div className="gameresult__action" onClick={onNextStep}>
            Hrát znovu
          </div>
          <div 
            className="gameresult__exit"
            onClick={onStartGame}
            >Ukončit</div>
        </div>
      );
    } else {
      return (
        <div className="gameResult gameresult__done">
          <div className="gameResult__result">Splněno</div>
          <div className="gameresult__action" onClick={onNextStep}>
            Pokračovat na další úroveň
          </div>
          <div 
            className="gameresult__exit"
            onClick={onStartGame}
            >Ukončit</div>
        </div>
      );
    }
  } else {
    return (
      <div className="gameResult gameresult__loss">
        <div className="gameResult__result">Nesplněno</div>
        <div className="gameresult__action" onClick={onNextStep}>
          Zkusit znovu
        </div>
        <div 
            className="gameresult__exit"
            onClick={onStartGame}    
            >Ukončit</div>
      </div>
    );
  }
};