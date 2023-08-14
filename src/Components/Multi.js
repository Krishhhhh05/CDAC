import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';
import { useNavigate } from 'react-router';

function Multi(props) {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const colors = ['blue', 'red', 'yellow', 'green'];
  const [randomColors, setRandomColors] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [hintUsed, setHintUsed] = useState(false);


  useEffect(() => {
    const availableColors = [...colors];
    const randomIndex = Math.floor(Math.random() * availableColors.length);
    const correctAnswer = availableColors[randomIndex];

    setCorrectAnswer(correctAnswer);
    availableColors.splice(randomIndex, 1); // Remove correct answer from available colors

    const randomizedColors = [correctAnswer];
    for (let i = 1; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      randomizedColors.push(availableColors[randomIndex]);
      availableColors.splice(randomIndex, 1);
    }

    setRandomColors(randomizedColors);
  }, []);

  function computeY(x, a, b) {
    return a * x + b;
  }

  const x = Array.from({ length: 100 }, (_, i) => i / 10 - 5);

  const y1 = x.map(xVal => computeY(xVal, parseFloat(a), parseFloat(b)));
  const y2 = x.map(xVal => computeY(xVal, -parseFloat(a), -parseFloat(b)));
  const y3 = x.map(xVal => computeY(xVal, parseFloat(a), -parseFloat(b)));
  const y4 = x.map(xVal => computeY(xVal, -parseFloat(a), parseFloat(b)));

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'a') {
      setA(value);
    } else if (name === 'b') {
      setB(value);
    }
  }

  const navigate = useNavigate();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const savedPoints = localStorage.getItem('points');
    if (savedPoints !== null) {
      setPoints(parseInt(savedPoints, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('points', points.toString());
  }, [points]);

  async function checkAnswer(color) {
    if (color === correctAnswer) {
      const pointsEarned = 1;
      setPoints(points => points + pointsEarned);
      Swal.fire('Correct!', `Your answer is correct! Points earned: +${pointsEarned}`, 'success');
    } else {
      const pointsDeducted = 1;
      const hintButtonText = hintUsed ? 'Try Again' : 'Use Hint';

      const result = await Swal.fire({
        icon: 'error',
        title: 'Incorrect!',
        text: `Your answer is incorrect. Points deducted: -${pointsDeducted}. What would you like to do?`,
        showCancelButton: true,
        confirmButtonText: hintButtonText,
        cancelButtonText: 'Go to Lecture',
      });

      if (result.isConfirmed) {
        if (!hintUsed) {
          setHintUsed(true);
          Swal.fire({
            icon: 'info',
            title: 'Hint',
            text: 'Here is a hint: [Your hint text here]',
            showCancelButton: true,
            confirmButtonText: 'Try Again',
            cancelButtonText: 'Go to Lecture',
          }).then((hintResult) => {
            if (hintResult.isConfirmed) {
            } else if (hintResult.dismiss === Swal.DismissReason.cancel) {
              navigate('/theory3');
            }
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        navigate('/theory3');
      }

      setPoints(points => Math.max(points - pointsDeducted, 0));
    }
  }
  const handleExit = () => {
    Swal.fire({
      title: 'Are you sure you want to exit?',
      showCancelButton: true,
      confirmButtonText: 'No',
      cancelButtonText: 'Yes, exit',
      reverseButtons: true,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        window.close();
      }
    });
  };

  return (
    <>
      <div className='App'>
        < div class="flex m-2 justify-start items-center h-screen">
          <div id="sidebar" class="bg-black rounded-lg h-90 w-20 flex flex-col items-center">
            <div class="text-white p-8">
              <div>
                <IoLogoAndroid className="h-12 w-12 text-gray-500" />
              </div>
            </div>
            <div class="flex flex-col flex-grow justify-center">
              <div class="text-white p-3">
                <div>
                  <Link to="/" title="Home">
                    <AiFillHome className="h-6 w-6 text-gray-500" />
                  </Link>
                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <Link to="/theory1" title="Lecture">
                    <FaGraduationCap className="h-6 w-6 text-gray-500" />
                  </Link>

                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <Link to="/multi" title="Games">
                    <IoLogoGameControllerB className="h-6 w-6 text-gray-500" />
                  </Link>

                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <Link to="/quiz" title="Test">
                    <BsPencilFill className="h-6 w-6 text-gray-500" />
                  </Link>

                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <Link to="/" title="Settings">
                    <IoMdSettings className="h-6 w-6 text-gray-500" />
                  </Link>
                </div>
              </div>
            </div>
            <div class="text-white p-16">
              <div>
                <button onClick={handleExit} title="Exit">
                  <IoMdExit className="h-8 w-8 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="mr-5 fixed-left my-45 float-right border-2 w-2/3 p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
            <h1 className="font-bold text-lg text-center">Plotting the Equation</h1>
            <br />
            <div className="font-light">
              Here the equation is in the form of <b>Y = mX + C</b>
              <br />
              <br />
              Enter the values and select which line correctly plots the equation.
            </div>
            <div className="" id="input">
              <div className="a" ID="INPUT">
                <label htmlFor="a">Enter the slope: </label>
                <input
                  className="bg-white rounded-full mx-6 my-6 px-3"
                  id="a"
                  name="a"
                  type="text"
                  placeholder='Enter Slope'
                  value={a}
                  onChange={handleInputChange}
                />
                <br />
                <label htmlFor="b">Enter the Intercept: </label>
                <input
                  className="bg-white rounded-full mx-6 my-6 px-3"
                  id="b"
                  name="b"
                  type="text"
                  placeholder='Enter Intercept'
                  value={b}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-align">
                {randomColors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn ${color === correctAnswer ? 'btn-success' : 'btn-danger'} mx-2`}
                    style={{ backgroundColor: color }}
                    onClick={() => checkAnswer(color)}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </button>
                ))}
              </div>
              <div className="text-center bg-white p-4 border-t-2 border-gray-300 bg-gray-50">
                <p>Total Points: {points}</p>
              </div>
            </div>
          </div>


          <div id="graph" className="float-left ml-5 px-4 my-4">
            <Plot
              data={[
                {
                  x: x,
                  y: y1,
                  type: 'scatter',
                  mode: 'lines',
                  name: randomColors[0],
                  line: { color: randomColors[0] },
                },
                {
                  x: x,
                  y: y2,
                  type: 'scatter',
                  mode: 'lines',
                  name: randomColors[1],
                  line: { color: randomColors[1] },
                },
                {
                  x: x,
                  y: y3,
                  type: 'scatter',
                  mode: 'lines',
                  name: randomColors[2],
                  line: { color: randomColors[2] },
                },
                {
                  x: x,
                  y: y4,
                  type: 'scatter',
                  mode: 'lines',
                  name: randomColors[3],
                  line: { color: randomColors[3] },
                },
              ]}
              layout={{
                width: 700,
                height: 500,
                title: 'Line Plot',
                xaxis: { title: 'X Axis' },
                yaxis: { title: 'Y Axis' },
                showlegend: true,
              }}
            />
          </div>
        </div >
      </div>
    </>
  );
}

export default Multi;
