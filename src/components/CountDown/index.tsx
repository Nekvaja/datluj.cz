import "./style.css";

interface startCountdownProps {
    startCountdown: number,
    levelStarted: boolean,
}

export const Countdown = ({startCountdown, levelStarted} : startCountdownProps) => {
    if (!levelStarted) {
        return (
        <div className="countdown">{startCountdown <= 0 ? 'Start' : startCountdown}</div>
    )
    }
    
}