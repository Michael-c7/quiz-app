
function App() {
  // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple

  return (
    <main>
      <section className="setup-quiz">
        <h1 className="setup-quiz__header">Setup Quiz</h1>
        <form className="setup-quiz__form">
          <label className="setup-quiz__question-amount-container">
            <span>Number of Questions</span>
            <input type="number" max="50" value="0"/>
          </label>
          

          <label className="setup-quiz__question-category-container">
            <span>Category</span>
            <select name="categories">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </label>


          <label className="setup-quiz__question-difficulty-container">
            <span>Category</span>
            <select name="categories">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </label>

          <button className="start-quiz-btn" type="submit">Start</button>
        </form>
      </section> 
    </main>
  );
}

export default App;
