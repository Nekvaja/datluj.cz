import { useState } from 'react';
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

  const handleFinish = () => {
    setWords([...words.slice(1), generateWord(6)]);
  }

  const handleMistakeCount = () => {
    setMistakeCount((prev) => {
      return prev + 1;
    })
  }

  return (
    <div className="stage">
      <div className="stage__mistakes">Chyb: {mistakeCount}</div>
      <div className="stage__words">
        {words.map((word, index) => <Wordbox word={word} key={word} onFinish={handleFinish} active={index === 0 ? true : false} onMistakeCount={handleMistakeCount} />)}
      </div>
    </div>
  );
};

export default Stage;
