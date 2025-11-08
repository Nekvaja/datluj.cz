import React, { useEffect, useState } from 'react';
import './style.css';

interface IWordboxProp {
  word: string;
}

const Wordbox : React.FC<IWordboxProp> = ({ word }) => {
  const [lettersLeft, setLettersLeft] = useState<string>(word);  
        
  useEffect(() => {

    const handleKeyup = (e: KeyboardEvent) => {
      if (e.key === lettersLeft.slice(0,1)) {
        setLettersLeft((prev) => prev.slice(1))
    };
  };

    document.addEventListener('keyup', handleKeyup)

    return () => {
      document.removeEventListener('keyup', handleKeyup)
    }

  }, [lettersLeft])

  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
