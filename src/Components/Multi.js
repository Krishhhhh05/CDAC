import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Multi() {
  // Define state variables for equation entered by user
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  

  // Define a function to compute y values based on a linear equation
  function computeY1(x) {
    // Parse the user-entered equation as "ax + b" format
    const parsedA = parseFloat(a);
    const parsedB = parseFloat(b);
    
    // Compute y value for the given x value
    return parsedA * x + parsedB;
  }

  function computeY2(x) {
    // Parse the user-entered equation as "ax + b" format
    
    const parsedC = parseFloat(-a);
    const parsedD = parseFloat(-b);

    // Compute y value for the given x value
    return parsedC * x + parsedD;
  }


  function computeY3(x) {
    // Parse the user-entered equation as "ax + b" format
    
    const parsedE = parseFloat(a);
    const parsedF = parseFloat(-b);

    // Compute y value for the given x value
    return parsedE * x + parsedF;
  }

  function computeY4(x) {
    // Parse the user-entered equation as "ax + b" format
    
    const parsedG = parseFloat(-a);
    const parsedH = parseFloat(b);

    // Compute y value for the given x value
    return parsedG * x + parsedH;
  }

  // Create an array of x values using lodash range function
  const x = Array.from({ length: 100 }, (_, i) => i / 10 - 5);

  // Compute an array of y values from x values using the defined function
  const y1 = x.map(computeY1);
  const y2 = x.map(computeY2);
  const y3 = x.map(computeY3);
  const y4 = x.map(computeY4);

  // Handle input change event and update the a and b state variables
  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === 'a') {
      setA(value);
    } else if (name === 'b') {
      setB(value);
    }
    
  }
  // flex items-center float-right w-1/3 h-screen
  return (
    <>
    
    
    <div  class=" mr-5 px-6 mt-2 fixed-right  float-right border-2 w-1/3   p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
        
        <h1 class=" font-bold text-lg text-center"> Understanding the game</h1>

        <div className='p-3'>
          The lines here are in the form of <b>Y=mX+C </b><br></br><br></br>
          Enter some X and Y coordinates.<br></br><br></br>
          It will then plot 4 lines corresponding to your coordinates. <br></br><br></br>
          Choose the correct lines from the option. <br></br>

        </div>
          <br />
      </div>

       
      

      <div id="graph" class=" float-left ml-5 px-4 my-4 ">
        <Plot
          data={[
            {
              x: x,
              y: y1,
              type: 'scatter',
              mode: 'lines',
              line: { color: 'red' },
            },
            {
                x: x,
                y: y2,
                type: 'scatter',
                mode: 'lines',
                line: { color: 'blue' },
              },
              {
                x: x,
                y: y3,
                type: 'scatter',
                mode: 'lines',
                line: { color: 'green' },
              },
              {
                x: x,
                y: y4,
                type: 'scatter',
                mode: 'lines',
                line: { color: 'yellow' },
              },
          ]}
          layout={{
            width: 800,
            height: 600,
            title: 'Line Graph of Equation',
            xaxis: { title: 'X Axis' },
            yaxis: { title: 'Y Axis' },
          }}
        />
      </div>

      <div id=" input" class=" mr-5  mt-2 fixed-lef float-right border-2 w-1/3   p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
          <h1 class=" font-bold text-lg text-center"> Plotting the Equation</h1>
          <br />
          <div className='' id='input'>
          <div class="a" ID="INPUT">
            <label htmlFor="a">Enter the slope: </label>
            <input class="bg-white rounded-full mx-6 my-6 px-3"
              id="a"
              name="a"
              type="text"
              value={a}
              onChange={handleInputChange}
            />
            <br />
          </div>
          <label htmlFor="b">Enter the Intercept: </label>
          <input class="bg-white rounded-full mx-6 my-6 px-3"
            id="b"
            name="b"
            type="text"
            value={b}
            onChange={handleInputChange}
          />

           
          </div>
        </div>
    </>
  );
}

export default Multi;
