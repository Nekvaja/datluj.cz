import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string,
  onFinish: () => void;
}

const Wordbox : React.FC<IWordboxProp> = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  
        
  useEffect(() => {

    const handleKeyup = (e: KeyboardEvent) => {
      if (e.key === lettersLeft.slice(0,1)) {
        if (lettersLeft.length === 1) {
          onFinish();
        } 
           setLettersLeft((prev) => prev.slice(1))
    } 
  };

    document.addEventListener('keyup', handleKeyup)

    return () => {
      document.removeEventListener('keyup', handleKeyup)
    }

  }, [lettersLeft, onFinish])

  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
