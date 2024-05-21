import React, { useState } from "react";
import "./Quiz.css"; // Create a CSS file for styling
import Header from "./Header";
import { useHistory } from 'react-router-dom';


const questions = [
  { id: 1, img1: "./images/fit1.jpeg", img2: "./images/fit2.jpeg" },
  { id: 2, img1: "./images/fit3.jpeg", img2: "./images/fit4.jpeg" },
  // Add more questions up to 10
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const history = useHistory();

  const handleContinue = () => {
      history.push('/home');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  console.log("Quiz");
  return (
    <div>
      <Header />
    <div className="quiz-container">
      
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>

      {currentQuestion < questions.length ? (
        <div className="question-container">
          <h2>Choose your preferred style?</h2>
          <div className="images-container">
            <img
              src={questions[currentQuestion].img1}
              alt="Option 1"
              onClick={() => handleAnswer("img1")}
            />
            <p> OR </p>
            <img
              src={questions[currentQuestion].img2}
              alt="Option 2"
              onClick={() => handleAnswer("img2")}
            />
          </div>
        </div>
      ) : (
        <div className="results-container">
          <h2>Thank you for completing the quiz!</h2>
          <button type="submit" onClick={handleContinue}>Continue</button>

        </div>
      )}
    </div>
    </div>

  );
}

export default Quiz;
