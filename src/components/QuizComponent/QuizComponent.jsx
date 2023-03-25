import React from "react";
import { useState } from "react";

import "./QuizComponent.css";

const QuizComponent = () => {
  var Questionbank = [
    {
      Question: "1 + 1 = ?",
      Answers: [
        { Answer: "3", isCorrect: false },
        { Answer: "4", isCorrect: false },
        { Answer: "5", isCorrect: false },
        { Answer: "2", isCorrect: true },
      ],
    },
    {
      Question: "2 + 2 = ?",
      Answers: [
        { Answer: "2", isCorrect: false },
        { Answer: "4", isCorrect: true },
        { Answer: "5", isCorrect: false },
        { Answer: "6", isCorrect: false },
      ],
    },
    {
      Question: "3 + 3 = ?",
      Answers: [
        { Answer: "6", isCorrect: true },
        { Answer: "4", isCorrect: false },
        { Answer: "8", isCorrect: false },
        { Answer: "9", isCorrect: false },
      ],
    },
    {
      Question: "4 + 4 = ?",
      Answers: [
        { Answer: "9", isCorrect: false },
        { Answer: "10", isCorrect: false },
        { Answer: "8", isCorrect: true },
        { Answer: "16", isCorrect: false },
      ],
    },
    {
      Question: "5 + 5 = ?",
      Answers: [
        { Answer: "55", isCorrect: false },
        { Answer: "555", isCorrect: false },
        { Answer: "25", isCorrect: false },
        { Answer: "10", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div className="score">
          <p>
            You have scored {score} out of {Questionbank.length}
          </p>
          <>
            <button type="submit" onClick={resetQuiz}>
              Play Again
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-number">
              <span>{currentQuestion + 1}</span>/{Questionbank.length}
            </div>

            <div className="question-text">
              {Questionbank[currentQuestion].Question}
            </div>
            <div className="answers">
              {Questionbank[currentQuestion].Answers.map((ans) => (
                <button onClick={() => handleAnswerResponse(ans.isCorrect)}>
                  {ans.Answer}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
