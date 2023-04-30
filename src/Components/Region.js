

// import React, { useState } from 'react';
// import Plot from 'react-plotly.js';

// function Region() {
//   // Define state variables for equation entered by user
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');

//   // Define a function to compute y values based on a linear equation
//   function computeY(x) {
//     // Parse the user-entered equation as "ax + b" format
//     const parsedA = parseFloat(a);
//     const parsedB = parseFloat(b);

//     // Compute y value for the given x value
//     return parsedA * x + parsedB;
//   }

//   // Create an array of x values using lodash range function
//   const x = Array.from({ length: 100 }, (_, i) => i / 10 - 5);

//   // Compute an array of y values from x values using the defined function
//   const y = x.map(computeY);

//   // Handle input change event and update the a and b state variables
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     if (name === 'a') {
//       setA(value);
//     } else if (name === 'b') {
//       setB(value);
//     }
//   }
//   // flex items-center float-right w-1/3 h-screen
//   return (
//     <>
//       <div  class="px-6">
//         <div id=" input" class=" mr-5   fixed-left float-right border-2 w-1/3   p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
//           <h1 class=" font-bold text-lg text-center"> Plotting the Equation</h1>
//           <br />
//           <div class=" ">
//             <label htmlFor="a">Enter the slope: </label>
//             <input class="bg-white rounded-full mx-6 my-6 px-3"
//               id="a"
//               name="a"
//               type="text"
//               value={a}
//               onChange={handleInputChange}
//             />
//             <br />
//           </div>
//           <label htmlFor="b">Enter the Intercept: </label>
//           <input class="bg-white rounded-full mx-6 my-6 px-3"
//             id="b"
//             name="b"
//             type="text"
//             value={b}
//             onChange={handleInputChange}
//           />
//         </div>
//       </div>
      
//       <div id="graph" class=" float-left ml-5 px-4 my-4 ">
//         <Plot
//           data={[
//             {
//               type: 'surface',
//               x: [-5, 5],
//               y: [-5, 5],
//               z: [[0, 0], [0, 0]], // Dummy values for the surface heights
//               colorscale: [[0, 'white'], [1, 'gray']],
//               showscale: false,
//               carpetid: 'carpet',
//             },
//             {
//               type: 'carpet',
//               a: [-5, 5],
//               b: [-5, 5],
//               xaxis: 'x',
//               yaxis: 'y',
//               xgap: 0,
//               ygap: 0,
//               carpetid: 'carpet',
//               // Define the plane function as the color function
//               color: plane,
//             },
//           ]}
//           layout={{
//             width: 600,
//             height: 400,
//             title: 'Shaded Plane',
//             xaxis: {title: 'X Axis'},
//             yaxis: {title: 'Y Axis'},
//             // Define the domain of the carpet plot as [0, 1] in both x and y
//             // This makes the carpet plot fill the entire plot area
//             margin: {l: 0, r: 0, t: 40, b: 0},
//             carpet: {
//               domain: {x: [0, 1], y: [0, 1]},
//               xaxis: 'x',
//               yaxis: 'y',
//             },
//           }}
          
//         />
//       </div>
//     </>
//   );
// }

// export default Region;



import React, { useState } from 'react';
import Plot from 'react-plotly.js';

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
  const fillY = x.map((x) => Math.min(computeY(x), 0));

  return (
    <>
      <div class="px-6">
        <div
          id="input"
          class="mr-5 fixed-left float-right border-2 w-1/3 p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50"
        >
          <h1 class="font-bold text-lg text-center"> Plotting the Equation</h1>
          <br />
          <div class="">
            <label htmlFor="a">Enter the slope: </label>
            <input
              class="bg-white rounded-full mx-6 my-6 px-3"
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
            class="bg-white rounded-full mx-6 my-6 px-3"
            id="b"
            name="b"
            type="text"
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
              fill: 'tozeroy',
              fillcolor: 'rgba(255,0,0,0.2)',
            },
            {
              x: x,
              y: fillY,
              type: 'scatter',
              mode: 'lines',
              line: { color: 'transparent' },
              fill: 'tozeroy',
              fillcolor: 'rgba(255,0,0,0.2)',
            },
          ]}
          layout={{
            width: 800,
            height: 600,
            title: 'Line Graph of Equation',
            xaxis: { title: 'X Axis' },
          }}
                  />
                </div>
              </>
            );
          }
          
          export default PlotGraph;
          
