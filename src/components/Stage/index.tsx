import { useState, useEffect } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';

// TODO: temporary disable function - remove next line when you start using it
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const generateWord = (size: number) => {
  const sizeIndex = size === undefined
    ? Math.floor(Math.random() * wordList.length)
    : size - 3;
  
  if (sizeIndex < 0 || sizeIndex >= wordList.length) {
    return null;
  }
  
  const words = wordList[sizeIndex];
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};

const Stage = () => {
  const [words, setWords] = useState<string[]>(['jahoda', 'hadice', 'kostka']);
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [wordsCompleted, setWordsCompleted] = useState<number>(0);
  const [wordHasMistake, setWordHasMistake] = useState<boolean>(false);
  const [correctWords, setCorrectWords] = useState<number>(0);
   const [timeLeft, setTimeleft] = useState<number>(5000);

  const handleFinish = () => {
    setWords((prev) => {
      const nextWord = generateWord(6);
      if (nextWord) {
        return [...prev.slice(1), nextWord] 
      } return prev;
  });

    !wordHasMistake && setCorrectWords((prev) => {
      return prev + 1;
    })

    setWordHasMistake(false);
  }

  const handleMistakeCount = () => {
    setMistakeCount((prev) => {
      return prev + 1;
    })

    setWordHasMistake(true);

  }

  const handleSetWordsCompleted = () => {
    setWordsCompleted((prev) => {
      return prev + 1;
    })
  }

    useEffect(() => {
     const interval = window.setInterval(() => {
      setTimeleft((prev) => { return prev -1})
    }, 1);

    if (timeLeft === 0){
      clearInterval(interval)
    };

    return () => clearInterval(interval); 

  }, [timeLeft]);

  const formatTime = (ms: number) => {
    
    const seconds = Math.floor((ms % 60000) / 1000);
    const miliseconds = Math.floor(ms % 1000);

    return `${seconds.toString().padStart(2,'0')} : ${miliseconds.toString().padStart(3, '0')}`
  };

  const timer = formatTime(timeLeft);


  return (
    <div className="stage">
      <div className="stage__timer">{timer}</div>
      <div className="stage__mistakes">Chyb: {mistakeCount}</div>
      <div className="stage__mistakes">Hotovo: {wordsCompleted}</div>
      <div className="stage__mistakes">Správně: {correctWords}</div>
      <div className="stage__words">
        {words.map((word, index) => <Wordbox word={word} key={word} onFinish={handleFinish} active={index === 0} onMistakeCount={handleMistakeCount} onWordsCompleted={handleSetWordsCompleted}/>)}
      </div>
    </div>
  );
};

export default Stage;
