import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Multi() {
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

  function checkAnswer(color) {
    if (color === correctAnswer) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  }

  return (
    <>
      <div className="px-6">
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
    </>
  );
}

export default Multi;
