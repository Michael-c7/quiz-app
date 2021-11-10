import React from 'react'

const EndScreen = ({resetGame}) => {
    return (
        <div className="end-screen-container">
            <div className="end-screen">
                <h2>Congrats!</h2>
                <p>You answered 10% of questions correctly</p>
                <button className="play-agin-btn" onClick={() => resetGame()}>Play Again</button>
            </div>
        </div>
    )
}

export default EndScreen;
