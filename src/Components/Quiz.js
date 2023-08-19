import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { IoMdExit } from 'react-icons/io';
//import undrawIllustration from '../quiz.svg';
import './Style.css';


const questions = [
  {
    question: 'What symbols are used to represent inequalities?',
    options: ['=', '>=', '<=', '=='],
    correctAnswer: '<=',
  },
  {
    question: 'In the inequality 5x - 3 < 3x + 1, what is the solution for x?',
    options: ['x > -2', 'x > 2', 'x = -2', 'x = 2'],
    correctAnswer: 'x > -2',
  },
  {
    question: 'Which of the following inequalities is not linear?',
    options: ['2x - 3 > 5', '3x^2 + 4x < 10', '4 - x >= 7', '2y + 3x = 8'],
    correctAnswer: '3x^2 + 4x < 10',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const currentCorrectAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === currentCorrectAnswer) {
      Swal.fire('Correct!', 'Your answer is correct!', 'success');
      setScore((prevScore) => prevScore + 1);
    } else {
      Swal.fire('Incorrect!', 'Your answer is incorrect.', 'error');
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setTimeout(() => {
        const finalScore = score + (selectedOption === currentCorrectAnswer ? 1 : 0);
        Swal.fire({
          title: 'Quiz Completed!',
          html: `Your final score: <strong>${finalScore}</strong> out of ${questions.length}`,
          icon: 'info',
          confirmButtonText: 'Restart Quiz',
        }).then((result) => {
          if (result.isConfirmed) {
            setCurrentQuestion(0);
            setScore(0);
            setSelectedAnswer(null);
          }
        });
      }, 1000);
    }
  };

  const exitQuiz = () => {
    Swal.fire({
      title: 'Are you sure you want to exit?',
      text: 'You will lose all your progress!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Yes, exit',
      confirmButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
      } else {
        navigate('/');
      }
    });
  };

  const navigate = useNavigate();

  const renderOptions = () => {
    const options = questions[currentQuestion].options;
    const optionLabels = ['A', 'B', 'C', 'D'];

    return options.map((option, index) => (
      <>
        <div key={index} className="option">
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => handleAnswerClick(option)}
            />
            <span>{optionLabels[index]}. </span>
            {option}
          </label>
        </div>
      </>
    ));
  };

  return (
    <>
      <div /*className='App' style={{ backgroundImage: `url(${undrawIllustration})` }}*/>
        <h1><strong>Test Yourself</strong></h1>
        {questions.length > 0 && currentQuestion < questions.length && (
          <div className="question">
            <h3>Question {currentQuestion + 1}</h3>
            <br></br>
            <h2><p><strong>{questions[currentQuestion].question}</strong></p></h2>
            <br></br>
            <h5><italic><p>Select the correct answer:</p></italic></h5>
            <div className="options">{renderOptions()}</div>
            <br></br>
            <br></br>
            <div class="text-black p-6">
              <div>
                <button className="exit-button" onClick={exitQuiz} title="Exit">
                  <IoMdExit className="h-10 w-10 strong text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        )}
        {questions.length === 0 || currentQuestion >= questions.length ? (
          <div className="quiz-completed">
            <h2>Quiz completed!</h2>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Quiz;