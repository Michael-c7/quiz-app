import React, { useState } from 'react';
import { QuizQuestions } from './QuizQuestions';
import SetupQuiz from "./SetupQuiz"
import EndScreen from './EndScreen';



function App() {
  const [questionAmount, setQuestionAmount] = useState(10)
  const [category, setCategory] = useState(21)
  const [difficulty, setDifficulty] = useState("easy")
  const [loading, setLoading] = useState(false)
  const [quizData, setQuizData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [amountOfCorrectAnswers, setAmountOfCorrectAnswers] = useState(0);
  const [showEndScreen, setShowEndScreen] = useState(false)
  // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple
  const baseUrl = "https://opentdb.com/api.php?"
  const amountUrl = `amount=${questionAmount}&`
  const categoryUrl = `category=${category}&`
  const difficultyUrl = `difficulty=${difficulty}&`
  const typeUrl = `type=multiple`


  const fetchQuizData = async url => {
    try {
      setLoading(true)
      const res = await fetch(url)
      const data = await res.json()
      setQuizData(data.results)
      setLoading(false)
    }catch(error) {
      setLoading(false)
      console.log(error)
    }
  }  

  const handleData = _ => {
    if(questionAmount > 50) {
      setQuestionAmount(50)
    } else if(questionAmount < 1) {
      setQuestionAmount(1)
    }
    fetchQuizData(`${baseUrl}${amountUrl}${categoryUrl}${difficultyUrl}${typeUrl}`)
  }

  const whatToRender = _ => {
    if(loading) {
      return <h1 className="loading center">Loading Questions</h1>
    } else {
      if(quizData.length > 1) {
        return (
          <QuizQuestions  
            quizData={quizData}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            amountOfCorrectAnswers={amountOfCorrectAnswers}
            setAmountOfCorrectAnswers={setAmountOfCorrectAnswers}
            setShowEndScreen={setShowEndScreen}
          />
          )
      } else if(quizData.length  < 1){
        return (
          <SetupQuiz 
            questionAmount={questionAmount}
            setQuestionAmount={setQuestionAmount}
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            handleData={handleData}
          />
        )
      }
    }

    
  }


  const resetGame = () => {
    window.location.reload()
  } 


  return (
    <main>
      {showEndScreen && <EndScreen resetGame={resetGame} currentQuestionIndex={currentQuestionIndex} amountOfCorrectAnswers={amountOfCorrectAnswers}/>}
      {whatToRender()}
    </main>
  );
}

export default App;
