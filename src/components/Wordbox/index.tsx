import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string,
  onFinish: () => void,
  active: boolean,
  onMistakeCount: () => void,
}

const Wordbox : React.FC<IWordboxProp> = ({ word, onFinish, active, onMistakeCount }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  
  const [mistake, setMistake] = useState<boolean>(false);
        
  useEffect(() => {

    const handleKeyup = (e: KeyboardEvent) => {
      if (e.key === lettersLeft.slice(0,1)) {
        setMistake(false)
        if (lettersLeft.length === 1) {
          onFinish();
        } 
           setLettersLeft((prev) => prev.slice(1))
    } else {
      setMistake(true);
      onMistakeCount();
    }
  };

    active && document.addEventListener('keyup', handleKeyup)

    return () => {
      document.removeEventListener('keyup', handleKeyup)
    }

  }, [lettersLeft, onFinish, active, onMistakeCount])

  let mistakeClassName : string = 'wordbox';

  if (active) {
    mistakeClassName += " active";
  } 
  
  if (mistake) {
    mistakeClassName += " wordbox--mistake"
  }


  return (
    <div className={mistakeClassName}>{lettersLeft}</div>
  );
};

export default Wordbox;
