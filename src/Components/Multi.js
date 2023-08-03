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

  async function checkAnswer(color) {
    if (color === correctAnswer) {
      Swal.fire('Correct!', 'Your answer is correct!', 'success');
    } else {
      const result = await Swal.fire({
        icon: 'error',
        title: 'Incorrect!',
        text: 'Your answer is incorrect. Please try again.',
        confirmButtonText: 'OK',
      });
      if (result.isConfirmed) {
        navigate('/theory3');
      }
    }
  }

  return (
    <>

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
                <Link to="/">
                  <AiFillHome className="h-6 w-6 text-gray-500" />
                </Link>
              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/theory1">
                  <FaGraduationCap className="h-6 w-6 text-gray-500" />
                </Link>

              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/multi">
                  <IoLogoGameControllerB className="h-6 w-6 text-gray-500" />
                </Link>

              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/">
                  <BsPencilFill className="h-6 w-6 text-gray-500" />
                </Link>

              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/">
                  <IoMdSettings className="h-6 w-6 text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
          <div class="text-white p-16">
            <div>
              <Link to="/">
                <IoMdExit className="h-8 w-8 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mr-5 fixed-left my-36 float-right border-2 w-1/3 p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
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
                value={a}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <label htmlFor="b">Enter the Intercept: </label>
            <input
              className="bg-white rounded-full mx-6 my-6 px-3"
              id="b"
              name="b"
              type="text"
              value={b}
              onChange={handleInputChange}
            />
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
              width: 800,
              height: 600,
              title: 'Line Plot',
              xaxis: { title: 'X Axis' },
              yaxis: { title: 'Y Axis' },
              showlegend: true,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Multi;