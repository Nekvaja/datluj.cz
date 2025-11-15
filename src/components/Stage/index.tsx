import { useState, useEffect } from 'react';
import Wordbox from '../Wordbox';
import wordList from '../../word-list';
import './style.css';
import { ClockIcon } from '../ClockIcon';
import { GameResult } from '../GameResult';

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

const createWordsForLevel = (letterCount : number) => {
  const first = generateWord(letterCount);
  const second = generateWord(letterCount);
  const third = generateWord(letterCount);

  return [first, second, third]
}

const Stage = () => {
  const [letterCount, setLetterCount] = useState<number>(3);
  const [words, setWords] = useState<(string | null)[]>(() => createWordsForLevel(letterCount));
  const [mistakeCount, setMistakeCount] = useState<number>(0);
  const [wordsCompleted, setWordsCompleted] = useState<number>(0);
  const [wordHasMistake, setWordHasMistake] = useState<boolean>(false);
  const [correctWords, setCorrectWords] = useState<number>(0);
  const [totalTime, setTotalTime] = useState<number>(5000);
  const [timeLeft, setTimeleft] = useState<number>(totalTime);
  const [showGameResult, setShowGameResult] = useState<boolean>(false);
  const [done, setdone] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);


  const handleFinish = () => {

    setWords((prev) => {
      const nextWord = generateWord(letterCount);
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

  const handleNextStep = () => {
    if (done === false || win === true) {
    setShowGameResult(false)
    setMistakeCount(0)
    setCorrectWords(0)
    setWordsCompleted(0)
    setTimeleft(totalTime)
    setLetterCount(3)
    setWords(createWordsForLevel(3))
    setWin(false);

    } else {
      setShowGameResult(false)
      setdone(false)
      setTimeleft(totalTime)
      setCorrectWords(0)
      setLetterCount((prev) => prev + 1)
      setWords(createWordsForLevel(letterCount +1))
    }
  } 

    useEffect(() => {
     const interval = window.setInterval(() => {
      setTimeleft((prev) => { return prev -1})
    }, 1);

    if (timeLeft === 0){
      clearInterval(interval)
      setShowGameResult(true)
    };

    if ((timeLeft > 0 && correctWords >= 2)) {
      if (letterCount === 4) {
        setWin(true)
      }
      clearInterval(interval)
      setShowGameResult(true)
      setdone(true)
    }

   

    return () => clearInterval(interval); 

  }, [timeLeft, showGameResult]);



  const formatTime = (ms: number) => {
    
    const seconds = Math.floor((ms % 60000) / 1000);
    const miliseconds = Math.floor((ms % 1000) / 10);

    return `${seconds.toString().padStart(2,'0')} : ${miliseconds.toString().padStart(2, '0')}` 

  };

  const timer = formatTime(timeLeft);

  const percentage : number = (timeLeft / totalTime) * 100;


  return (
    <>
    <div className="stage">
      <div className="stage__timer-bar">
        <div 
          className='stage__timer-fill'
          style={{width: `${percentage}%`}}
          ></div>
      </div>
      <div className='stage__target'>cíl: 10 slov bez chyby</div>
      <div className='stage__timer'>
        <ClockIcon/>
         {timer}</div> 
      <div className="stage__correct">{correctWords}</div>
      
      <div className="stage__words">
        {words.map((word, index) => <Wordbox word={word} key={word} onFinish={handleFinish} active={index === 0} onMistakeCount={handleMistakeCount} onWordsCompleted={handleSetWordsCompleted}/>)}
      </div>
    <div className='stage__stats'>
      <div className="stage__mistakes">Celkem chyb: {mistakeCount}</div>
      <div className="stage__finished">Celkem dokončeno: {wordsCompleted} slov</div>
    </div>
    </div>

     {showGameResult && <GameResult done={done} onNextStep={handleNextStep} win={win}/>}
    </>
  );

 
};

export default Stage;
