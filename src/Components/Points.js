
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
    <div id="main h-screen ">
      <div  class="mr-5 fixed-left float-right  mt-8 h-3/4   border-2 w-1/3 px-4 py-auto border-b-4 border-gray-200 rounded-xl bg-gray-50">
      <h1 class=" font-bold text-lg text-center"> Plotting the points</h1>

      <div className='p-3'>
        Here we enter the co-ordinates of the two lines and plot the on the graph.<br></br><br></br>
        We can calculate the slope of the line with the formula-<br></br>

        <img src="../assets/slope formula.png"  alt="Understanding of Planes and Axis"></img>
      </div>

        
</div>

      
    
      <div id="graph" class="float-left ml-5 px-4 my-4">
      {handlePlot()}</div>
      <div  class="mr-5 fixed-left float-right  mt-8 h-3/4   border-2 w-1/3 px-4 py-auto border-b-4 border-gray-200 rounded-xl bg-gray-50">


<div class="p-1 w-full my-6">
<h2 class=" font-semibold text-lg text-center"> Enter the coordinates of Line 1</h2>

  <label>

    X1: <input type="number" className='bg-white rounded-full mx-6 my-6 px-3' value={x1} onChange={(event) => setX1(parseFloat(event.target.value))} />
  </label>
  <label>
    Y1: <input type="number" className='bg-white rounded-full mx-6 my-6 px-3' value={y1} onChange={(event) => setY1(parseFloat(event.target.value))} />
  </label>


  <h2 class=" font-semibold text-lg text-center"> Enter the coordinates of Line 2</h2>

  <label>

    X2: <input type="number" className='bg-white rounded-full mx-6 my-6 px-3' value={x2} onChange={(event) => setX2(parseFloat(event.target.value))}/>
  </label>
  <label>
    Y2: <input type="number" className='bg-white rounded-full mx-6 my-6 px-3' value={y2} onChange={(event) => setY2(parseFloat(event.target.value))} />
  </label>
</div>

</div>
      
    </div>
  );
};

export default LinePlot;
