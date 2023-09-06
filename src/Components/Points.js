import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';
import Swal from 'sweetalert2';

const LinePlot = () => {
  const [x1, setX1] = useState();
  const [y1, setY1] = useState();
  const [x2, setX2] = useState();
  const [y2, setY2] = useState();

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
    // Calculate slope and intercept
    const slope = (y2 - y1) / (x2 - x1);
    const intercept = y1 - slope * x1;

    // Create x values for the line trace
    const x = [-10, 10]; // Adjust the range as needed

    // Calculate y values for the line trace
    const y = x.map(x => slope * x + intercept);

    // Create a trace for the line
    const lineTrace = {
      x: x,
      y: y,
      mode: 'lines',
      name: 'Line',
    };

    // Create a layout for the plot
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
    };

    return (
      <Plot
        data={[lineTrace]}
        layout={layout}
        style={{ width: '650px', height: '450px' }}
      />
    );
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
<div class="px-6">
          <div class="mr-5 fixed-left float-right mt-8 h-3/4 border-2 w-2/2 px-4 py-auto border-b-4 border-gray-200 rounded-xl bg-gray-50">
            <h1 class="font-bold text-lg text-center"><br />Plotting the points</h1><br />

              Here we enter the coordinates of the two lines and plot them on the graph.
              <br></br>
              <br></br>
              We can calculate the slope of the line with the formula:
              <br></br><br />
              <img
                src="../assets/slope formula.png"
                alt="Understanding of Planes and Axis" style={{ width: '100%', height: '20%', }}
              ></img><br />
          </div>
          </div>

          <div id="graph" class="float-left ml-5 px-4 my-4">
            {handlePlot()}
          </div>
          
          <div class="mr-5 fixed-left float-right mt-8 h-3/4 border-2 w-1/3 px-4 py-6 border-b-4 border-gray-200 rounded-xl bg-gray-50">
              <h2 class="font-semibold text-lg text-center"><br /><br />Enter the coordinates of Line 1</h2>

              <label>
                X1:{' '}<input
                  type="number"
                  className="bg-white rounded-full mx-6 my-6 px-3"
                  placeholder='Enter X1'
                  value={x1}
                  onChange={(event) => setX1(parseFloat(event.target.value))}
                />
              </label>
              <label>
                Y1:{' '}
                <input
                  type="number"
                  className="bg-white rounded-full mx-6 my-6 px-3"
                  placeholder='Enter Y1'
                  value={y1}
                  onChange={(event) => setY1(parseFloat(event.target.value))}
                />
              </label>

              <h2 class="font-semibold text-lg text-center"><br />Enter the coordinates of Line 2</h2>

              <label>
                X2:{' '}
                <input
                  type="number"
                  className="bg-white rounded-full mx-6 my-6 px-3"
                  placeholder='Enter X2'
                  value={x2}
                  onChange={(event) => setX2(parseFloat(event.target.value))}
                />
              </label>
              <label>
                Y2:{' '}
                <input
                  type="number"
                  className="bg-white rounded-full mx-6 my-6 px-3"
                  placeholder='Enter Y2'
                  value={y2}
                  onChange={(event) => setY2(parseFloat(event.target.value))}
                />
              </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinePlot;