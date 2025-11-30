import "./style.css"

interface IntroProps {
    onStartGame: () => void;
    theme: string;
}

export const Intro = ({onStartGame, theme} : IntroProps) => {
    return (
      <div className="intro">
        <img
          className="intro__image"
          src={theme === 'light' ? "typewriter_black.png" : "typewriter_white.png"}
          alt="obrázek psacího stroje"
        />
        <div className="intro__content-rules">
          <p>
            Napiš co nejvíce slov bez chyby v časovém limitu. S každou další
            úrovní se slova postupně prodlužují a obtížnost roste.
          </p>
          <ul>
            <li>Slovo se započítá pouze tehdy, když je napsané bez chyby.</li>
            <li>
              Splň požadovaný počet správně napsaných slov a postoupíš do další
              úrovně.
            </li>
          </ul>
        </div>
        <button
          className="intro__start-button"
          type="button"
          onClick={onStartGame}
          autoFocus
        >
          Start
        </button>
      </div>
    );
} 