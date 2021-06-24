import React from 'react';
import './quiz.css'

function Quiz() {
    return (
        <div className="quiz">
            <div className="question">What is the best Battle Royal game?</div>
            <div className="answers">
                <div className="answer">PUBG</div>
                <div className="answer wrong">Fortnite</div>
                <div className="answer">Apex Legends</div>
                <div className="answer">Battlefield</div>
            </div>
        </div>
    )
}

export default Quiz;
