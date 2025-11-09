import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string,
  onFinish: () => void,
  active: boolean,
}

const Wordbox : React.FC<IWordboxProp> = ({ word, onFinish, active }) => {
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
      setMistake(true)
    }
  };

    active && document.addEventListener('keyup', handleKeyup)

    return () => {
      document.removeEventListener('keyup', handleKeyup)
    }

  }, [lettersLeft, onFinish, active])

  return (
    <div className={mistake ? "wordbox wordbox--mistake" : "wordbox"}>{lettersLeft}</div>
  );
};

export default Wordbox;
