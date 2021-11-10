import React from 'react'
import categories from "./categories"

const {history, politics, sports} = categories
const SetupQuiz = ({questionAmount, setQuestionAmount, category, setCategory, difficulty, setDifficulty, handleData}) => {
    const handleSubmit = e => e.preventDefault()

    return (
        <section className="setup-quiz center">
            <h1 className="setup-quiz__header">Setup Quiz</h1>  
            <form className="setup-quiz__form" onSubmit={(e) => handleSubmit(e)}>

            <label className="setup-quiz__question-amount-container">
                <span>Number of Questions</span>
                <input type="number" min="1" max="50" value={questionAmount} onChange={(e) => setQuestionAmount(e.target.value)}/>
            </label>

            <label className="setup-quiz__question-category-container">
                <span>Category</span>
                <select name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value={history}>history</option>
                <option value={politics}>politics</option>
                <option value={sports}>sports</option>
                </select>
            </label>

            <label className="setup-quiz__question-difficulty-container">
                <span>Difficulty</span>
                <select name="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
                </select>
            </label>

            <button className="start-quiz-btn" type="submit" onClick={handleData}>Start</button>
        </form>
      </section> 
    )
}


export default SetupQuiz;