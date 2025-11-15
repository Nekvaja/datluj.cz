import "./style.css";

interface GameResultProps {
    win: boolean;
    onNextStep: () => void;
}

export const GameResult = ({win, onNextStep} : GameResultProps) => {
                 
    if (win) {
    
    return (
        <div className="gameResult gameresult__win">
            <div className= "gameResult__result">Splněno</div>
            <div 
                className= "gameresult__action"
                onClick={onNextStep}
                >Pokračovat na další úroveň</div>
            <div className= "gameresult__exit">Ukončit</div>
        </div>
    )
    } else {
        return (    
        <div className="gameResult gameresult__loss">
            <div className= "gameResult__result">Nesplněno</div>
            <div 
                className= "gameresult__action"
                onClick={onNextStep}
                >Zkusit znovu</div>
            <div className= "gameresult__exit">Ukončit</div>
        </div>
        )
    } return;
 }