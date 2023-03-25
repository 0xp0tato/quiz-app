import React, { useState } from "react";
import "./Startscreen.css";

import QuizComponent from "../QuizComponent/QuizComponent";

const Startscreen = () => {
  const [startquiz, setstartquiz] = useState(false);

  const handleStartQuiz = () => {
    setstartquiz(true);
  };

  return (
    <div>
      {startquiz ? (
        <QuizComponent />
      ) : (
        <div className="startscreen">
          <div className="quiz-title">Quiz Title</div>
          <p className="quiz-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
            nibh, viverra sit amet leo a, vestibulum condimentum est.
            Pellentesque consequat nisi a orci bibendum congue. Nunc ornare dui
            eget feugiat interdum. Nam posuere neque sit amet quam interdum
            porttitor. Nulla facilisi. Nulla ut dictum orci, ut auctor tortor.
            Etiam dolor turpis, convallis sed consequat ac, efficitur id enim.
            Nullam condimentum nec ligula non molestie. Nam feugiat convallis
            fringilla. Nullam lobortis justo ut sapien vehicula iaculis.
            Pellentesque posuere malesuada ipsum et congue. Nulla consequat
            libero dui, scelerisque posuere arcu vestibulum eu. Maecenas
            sagittis quam erat, ut sagittis diam ultrices vitae.
          </p>
          <button className="quiz-start-button" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Startscreen;
