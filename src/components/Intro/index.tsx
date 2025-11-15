import "./style.css"

interface IntroProps {
    onStartGame: () => void;
}

export const Intro = ({onStartGame} : IntroProps) => {
    return (
        <div className="intro">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sunt id delectus dicta iure provident qui ullam numquam voluptatem dolor!</div>
            <button 
                type="button"
                onClick={onStartGame}    
                >Hrát</button>
        </div>
    )
} 