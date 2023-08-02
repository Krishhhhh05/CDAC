import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import Sidebar from './Sidebar';



const Region = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();
  const [plotData, setPlotData] = useState(null);


  const handlePlot = () => {
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

  function checkred(x, y) {
    if (a > 0 && b > 0 && c > 0) {
      alert("yes");
    }
    else {
      alert("no");
    }
  }

  function checkgreen(x, y) {
    if (a < 0 || b < 0 || c < 0) {
      alert("yes");
    }
    else {
      alert("no");
    }
  }


  return (
    <div>
      <div id="input" class="mr-5 top-4 fixed-left float-right border-2 w-1/3 p-4 border-b-4 border-gray-200 rounded-xl bg-gray-50">
        <Sidebar />

        <h1 class=" font-bold text-lg text-center"> Shading the region</h1>

        Here we use the equation-<br></br><br></br>
        <img src="../assets/main.png" alt="main_eq"></img><br></br>
        The entire graph is divided into 2 parts and shaded positive or negative according to the equation.
        Identify the Region which represent the postive region i.e. Ax+By+C is greater than zero
        <br></br>
        <label>
          a:
          <input className='bg-white rounded-full mx-6 my-6 px-3'
            type="number"
            value={a}
            onChange={(event) => setA(parseFloat(event.target.value))}
          />
        </label>
        <label>
          b:
          <input className='bg-white rounded-full mx-6 my-6 px-3'
            type="number"
            value={b}
            onChange={(event) => setB(parseFloat(event.target.value))}
          />
        </label>
        <label>
          c:
          <input className='bg-white rounded-full mx-6 my-6 px-3'
            type="number"
            value={c}
            onChange={(event) => setC(parseFloat(event.target.value))}
          />
        </label>
        <button class="btn btn-primary mx-6 my-2 " onClick={handlePlot}>Plot</button>
        <div className=' flex justify-align'>
          <button type="button" class="btn btn-danger mx-2" onClick={() => checkred(a, b)}>Red</button>
          <button type="button" class="btn btn-success mr-2 ml-5" onClick={() => checkgreen(a, b)}>Green</button>
        </div>


      </div>

      <Plot class="float-left ml-5 px-4 my-4"
        data={plotData}
        layout={layout}
        style={{ width: '800px', height: '600px' }}
      />

      {plotData && (
        <div id="graph" class="float-left ml-5 px-4 my-4">

        </div>
      )}



    </div>
  );
};

export default Region;
