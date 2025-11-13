import "./style.css";

export const GameResult = () => {
    return (
        <div className="gameResult">
            <div className= "gameResult__result">Splněno</div>
            <div className= "gameresult__action">Pokračovat na další úroveň</div>
            <div className= "gameresult__exit">Ukončit</div>
        </div>
    )
}