
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const LinePlot = () => {
  const [x1, setX1] = useState();
  const [y1, setY1] = useState();
  const [x2, setX2] = useState();
  const [y2, setY2] = useState();

  const handlePlot = () => {
    // Create a trace for the line
    const lineTrace = {
      x: [x1, x2],
      y: [y1, y2],
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
        style={{ width: '800px', height: '600px' }}
      />
    );
  };

  return (
    <div id="main h-screen">
<div id="input " class="mr-5 fixed-left float-right  mt-8 h-3/4   border-2 w-1/3 px-4 py-auto border-b-4 border-gray-200 rounded-xl bg-gray-50">


      <div class="p-1 w-full my-6">
        <label>
          X1: <input type="number" value={x1} onChange={(event) => setX1(parseFloat(event.target.value))} />
        </label>
        <label>
          Y1: <input type="number" value={y1} onChange={(event) => setY1(parseFloat(event.target.value))} />
        </label>
      </div>
      <div class="p-1 w-full my-6" >
        <label>
          X2: <input type="number" value={x2} onChange={(event) => setX2(parseFloat(event.target.value))}/>
        </label>
        <label>
          Y2: <input type="number" value={y2} onChange={(event) => setY2(parseFloat(event.target.value))} />
        </label>
      </div>
      <button  class="btn btn-primary mx-6 my-2" onClick={handlePlot}>Plot</button>

      </div>
      <div id="graph" class="float-left ml-5 px-4 my-4">
      {handlePlot()}</div>
    </div>
  );
};

export default LinePlot;
