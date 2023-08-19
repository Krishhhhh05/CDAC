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

const Region = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [plotData, setPlotData] = useState(null);
  const [hintUsed, setHintUsed] = useState(false);


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


  const handlePlot = () => {
    if (a === '' || b === '' || c === '') {
      Swal.fire('Enter Values', 'Please enter all values before selecting an option.', 'warning');
      return;
    }
    const x = [-10, 10];
    const y1 = x.map((xVal) => (-a * xVal - c) / b);

    const lineTrace = {
      x: x,
      y: y1,
      mode: 'lines',
      name: 'Line',
    };

    const plotData = [lineTrace];

    // Check if the line divides the plane into quadrants
    if (a * x[0] + b * y1[0] + c < 0 && a * x[1] + b * y1[1] + c > 0) {
      // Positive region above the line
      const positiveRegion1 = {
        x: [x[0], x[1], x[1], x[0]],
        y: [y1[0], y1[1], 10, 10],
        fill: 'toself',
        fillcolor: 'rgba(0, 255, 0, 0.3)',
        mode: 'none',
        name: 'Region 1',
      };
      plotData.push(positiveRegion1);

      // Negative region below the line
      const negativeRegion1 = {
        x: [x[0], x[1], x[1], x[0]],
        y: [y1[0], y1[1], -10, -10],
        fill: 'toself',
        fillcolor: 'rgba(255, 0, 0, 0.3)',
        mode: 'none',
        name: 'Region 2',
      };
      plotData.push(negativeRegion1);
    } else {
      // Positive region below the line
      const positiveRegion2 = {
        x: [x[0], x[1], x[1], x[0]],
        y: [y1[0], y1[1], -10, -10],
        fill: 'toself',
        fillcolor: 'rgba(0, 255, 0, 0.3)',
        mode: 'none',
        name: 'Region 2',
      };
      plotData.push(positiveRegion2);

      // Negative region above the line
      const negativeRegion2 = {
        x: [x[0], x[1], x[1], x[0]],
        y: [y1[0], y1[1], 10, 10],
        fill: 'toself',
        fillcolor: 'rgba(255, 0, 0, 0.3)',
        mode: 'none',
        name: 'Region 1',
      };
      plotData.push(negativeRegion2);
    }

    setPlotData(plotData);
  };

  const layout = {
    title: 'Line Plot',
    xaxis: {
      title: 'X-axis',
      range: [-10, 10],
      tickmode: 'linear',
      dtick: 1,
    },
    yaxis: {
      title: 'Y-axis',
      range: [-10, 10],
      tickmode: 'linear',
      dtick: 1,
    },
    showlegend: false,
  };

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

  async function checkred() {
    if (a === '' || b === '' || c === '') {
      Swal.fire('Enter Values', 'Please enter values for slope and intercept before selecting an option.', 'warning');
      return;
    }
    if (a > 0 && b > 0 && c > 0) {
      const pointsEarned = 1;
      setPoints(points => points + pointsEarned);
      Swal.fire('Correct!', `Your answer is correct! Points earned: +${pointsEarned}`, 'success');
      setA('');
      setB('');
      setC('');
      setHintUsed(false);
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

  async function checkgreen() {
    if (a === '' || b === '' || c === '') {
      Swal.fire('Enter Values', 'Please enter all values before selecting an option.', 'warning');
      return;
    }
    if (a < 0 || b < 0 || c < 0) {
      const pointsEarned = 1;
      setPoints(points => points + pointsEarned);
      Swal.fire('Correct!', `Your answer is correct! Points earned: +${pointsEarned}`, 'success');
      setA('');
      setB('');
      setC('');
      setHintUsed(false);
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
          <div id="input" class="mr-5 top-4 fixed-left float-right border-2 w-1/3 p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
            <h1 class=" font-bold text-lg text-center"> Shading the region</h1>

            Here we use the equation-<br></br><br></br>
            <img src="../assets/main.png" alt="main_eq" style={{ width: '50%', height: '2%', }}></img><br></br>
            The entire graph is divided into 2 parts and shaded positive or negative according to the equation.
            Identify the Region which represent the postive region i.e. Ax+By+C is greater than zero
            <br></br>
            <label>
              a:
              <input className='bg-white rounded-full mx-6 my-6 px-3'
                type="number"
                value={a}
                placeholder='Enter A'
                onChange={(event) => setA(parseFloat(event.target.value))}
              />
            </label>
            <label>
              b:
              <input className='bg-white rounded-full mx-6 my-6 px-3'
                type="number"
                value={b}
                placeholder='Enter B'
                onChange={(event) => setB(parseFloat(event.target.value))}
              />
            </label>
            <label>
              c:
              <input className='bg-white rounded-full mx-6 my-6 px-3'
                type="number"
                value={c}
                placeholder='Enter C'
                onChange={(event) => setC(parseFloat(event.target.value))}
              />
            </label>
            <br></br>
            <button class="btn btn-primary mx-6 my-2 " onClick={handlePlot}>Plot</button>
            <div className=' flex justify-align' style={{ alignItems: 'center' }}>
              <button type="button" class="btn btn-danger mx-2" onClick={() => checkred(a, b)}>Red</button>
              <button type="button" class="btn btn-success mr-2 ml-5" onClick={() => checkgreen(a, b)}>Green</button>
            </div>
            <div className="text-center bg-white p-4 border-t-2 border-gray-300">
              <p>Total Points: {points}</p>
            </div>
          </div>

          <Plot class="float-left ml-5 px-4 my-4"
            data={plotData}
            layout={layout}
            style={{ width: '700px', height: '500px' }}
          />

          {plotData && (
            <div id="graph" class="float-left ml-5 px-4 my-4">
            </div>
          )}
        </div >
      </div>
    </>
  );
};

export default Region;