import "./style.css";

interface GameResultProps {
    done: boolean;
    onNextStep: () => void;
}

export const GameResult = ({done, onNextStep} : GameResultProps) => {
                 
    if (done) {
    
    return (
        <div className="gameResult gameresult__done">
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