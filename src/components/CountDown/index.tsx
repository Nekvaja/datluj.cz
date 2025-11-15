import "./style.css";

interface startCountdownProps {
    startCountdown: number,
}

export const Countdown = ({startCountdown} : startCountdownProps) => {
    return (
        <div className="countdown">{startCountdown === 0 ? 'Start' : startCountdown}</div>
    )
}