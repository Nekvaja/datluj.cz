import "./style.css";

interface GameResultProps {
    win: boolean,
}

export const GameResult = ({win} : GameResultProps) => {
    
    if (win === true) {
    
    return (
        <div className="gameResult gameresult__win">
            <div className= "gameResult__result">Splněno</div>
            <div className= "gameresult__action">Pokračovat na další úroveň</div>
            <div className= "gameresult__exit">Ukončit</div>
        </div>
    )
    } else {
        return (    
        <div className="gameResult gameresult__loss">
            <div className= "gameResult__result">Nesplněno</div>
            <div className= "gameresult__action">Zkusit znovu</div>
            <div className= "gameresult__exit">Ukončit</div>
        </div>
        )
    }
    
}