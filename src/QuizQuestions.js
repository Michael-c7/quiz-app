import React from 'react'

export const QuizQuestions = ({quizData, currentQuestionIndex, setCurrentQuestionIndex, amountOfCorrectAnswers, setAmountOfCorrectAnswers, setShowEndScreen}) => {
    const currentQuestionData = quizData[currentQuestionIndex]
    const {correct_answer,incorrect_answers,question } = currentQuestionData;
    const allAnswers = [correct_answer,...incorrect_answers]

    const shuffleAnswersArray = array => {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const checkAnswer = answer => {
        if(correct_answer === answer) {
            setAmountOfCorrectAnswers(amountOfCorrectAnswers + 1)
            nextQuestionLogic()
        } else {
            nextQuestionLogic()
        }
    }

    const nextQuestionLogic = _ => {
        if(quizData.length > 1 && currentQuestionIndex >= quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 0)
            setShowEndScreen(true)
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }
      

    return (
        <section className="quiz-questions center">
            <div className="quiz-questions__correct-answers">
                <span>Correct Answers : </span>
                <span className="amt-correct">{amountOfCorrectAnswers}</span>
                <span> / </span>
                <span className="total-amt-answered">{currentQuestionIndex}</span> 
            </div>

            <h2 className="quiz-questions__quiz-question-text" dangerouslySetInnerHTML={{__html: question }}></h2>
            
            <ul className="quiz-questions__answers">
                {shuffleAnswersArray(allAnswers).map((answer, index) => {
                    return (
                        <li className="quiz-questions__answer" key={index}>
                            <button onClick={() => checkAnswer(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>

            <button className="next-question-btn" onClick={() => nextQuestionLogic()}>Next Question</button>
        </section>
    )
}
