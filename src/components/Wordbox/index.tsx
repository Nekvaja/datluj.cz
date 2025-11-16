import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string,
  onFinish: () => void,
  active: boolean,
  onMistakeCount: () => void,
  onWordsCompleted: () => void,
  showGameResult: boolean,
  levelStarted: boolean,
}

const Wordbox : React.FC<IWordboxProp> = ({ word, onFinish, active, onMistakeCount, onWordsCompleted, showGameResult, levelStarted}) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  
  const [mistake, setMistake] = useState<boolean>(false);
  const [isFinishAnim, setIsFinishAnim] = useState<boolean>(false);

  useEffect(() => {

    
    const blockedKeys = ["Enter", "Escape", "Shift", "Control", "Tab", " ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]

    const handleKeyup = (e: KeyboardEvent) => {
      if (blockedKeys.includes(e.key)) return;

      if (e.key === lettersLeft.slice(0,1)) {
        setMistake(false);

        if (lettersLeft.length === 1) {
          setIsFinishAnim(true);
          onWordsCompleted();

          setTimeout(() => onFinish(), 100)

        } 
           setLettersLeft((prev) => prev.slice(1))
    } else {
      setMistake(true);
      onMistakeCount();
    }
  };

    (active && !showGameResult && levelStarted) && document.addEventListener('keyup', handleKeyup)

    return () => {
      document.removeEventListener('keyup', handleKeyup)
    }

  }, [lettersLeft, onFinish, active, onMistakeCount, showGameResult, word, levelStarted]);


  useEffect(() => {
    setLettersLeft(word);
    setMistake(false);
    setIsFinishAnim(false);
  }, [word])

  let mistakeClassName : string = 'wordbox';

  if (active) {
    mistakeClassName += " active";
  } 
  
  if (mistake) {
    mistakeClassName += " wordbox--mistake";
  }

  if (isFinishAnim) {
    mistakeClassName += " wordbox--fadeout";
  }

  return (
    <div className={mistakeClassName}>{lettersLeft}</div>
  );
};

export default Wordbox;
