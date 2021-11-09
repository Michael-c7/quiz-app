import React from 'react'

export const QuizQuestions = ({quizData, currentQuestionIndex, setCurrentQuestionIndex}) => {
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

    React.useEffect(() => {
        // console.log(currentQuestionData)
        console.log(allAnswers)
        console.log()
    }, [])

    return (
        <section className="quiz-questions">
            <div className="quiz-questions__correct-answers">
                <span>Correct Answers : </span>
                <span className="amt-correct">2 </span>
                <span> / </span>
                <span className="total-amt-answered">5</span> 
            </div>

            <h2 className="quiz-questions__quiz-question-text">
                {question}
            </h2>
            <ul className="quiz-questions__answers">
                {shuffleAnswersArray(allAnswers).map((answer, index) => {
                    return (
                        <li className="quiz-questions__answer" key={index}>
                            <button>{answer}</button>
                        </li>
                    )
                })}
            </ul>

            <button className="next-question-btn" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next Question</button>
        </section>
    )
}
