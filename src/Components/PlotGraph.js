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


function PlotGraph() {
  // Define state variables for equation entered by user
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  // Define a function to compute y values based on a linear equation
  function computeY(x) {
    // Parse the user-entered equation as "ax + b" format
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);

    // Compute y value for the given x value
    return parsedA * x + parsedB;
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

  // Create an array of x values using lodash range function
  const x = Array.from({ length: 100 }, (_, i) => i / 10 - 5);

  // Compute an array of y values from x values using the defined function
  const y = x.map(computeY);

  // Handle input change event and update the a and b state variables
  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'a') {
      setA(value);
    } else if (name === 'b') {
      setB(value);
    }
  }

  // Compute an array of y values for the fill region

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

            <div id="input" class="mr-5 fixed-left float-right border-2 w-96 max-w-3xl p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
              <h1 class="font-bold text-lg text-center"> Plotting the Equation</h1>
              <br />
              <div class="">
                <label htmlFor="a">Enter the slope: </label>
                <input
                  class="bg-white rounded-full mx-6 my-6 px-3"
                  id="a"
                  name="a"
                  type="text"
                  placeholder='Enter Slope'
                  value={a}
                  onChange={handleInputChange}
                />
                <br />
              </div>
              <label htmlFor="b">Enter the Intercept: </label>
              <input
                class="bg-white rounded-full mx-6 my-6 px-3"
                id="b"
                name="b"
                type="text"
                placeholder='Enter Intercept'
                value={b}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div id="graph" class="float-left ml-5 px-4 my-4">
            <Plot
              data={[
                {
                  x: x,
                  y: y,
                  type: 'scatter',
                  mode: 'lines',
                  line: { color: 'red' },
                },
              ]}
              layout={{
                width: 700,
                height: 500,
                title: 'Line Graph of Equation',
                xaxis: { title: 'X Axis' },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PlotGraph;