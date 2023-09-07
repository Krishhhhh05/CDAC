import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const TheoryLec3 = () => {

  return (
    <>
      <div className=''>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-1 flex items-center ml-7'>

            <Sidebar />
          </div>
          <div className='col-span-11'>
            <div className="flex justify-center">
              <h6 className="mb-2 text-2xl font-bold">PLOTTING OF LINES</h6>
            </div>

            <div class="h-full flex items-center w-5/6 ml-20">
              <div class="max-h-[500px] overflow-y-auto bg-white p-6">


                <article>
                  <p>To plot a line in slope-intercept form (y = mx + b), you can follow these steps:

                    Identify the y-intercept: The y-intercept is the point where the line intersects the y-axis. It is represented by the value of b in the equation y = mx + b. If the equation is not in slope-intercept form, solve for y to get it in that form.

                    Plot the y-intercept: Plot a point on the y-axis that corresponds to the value of b.

                    Determine the slope: The slope of the line is represented by the value of m in the equation y = mx + b. The slope tells you how steep the line is and in which direction it is moving. If the slope is positive, the line will move up and to the right. If the slope is negative, the line will move down and to the right. If the slope is zero, the line will be horizontal.

                    Use the slope to find another point: Starting from the y-intercept, move along the x-axis to the right by the value of the denominator of the slope. Then, move up or down along the y-axis by the value of the numerator of the slope. This will give you another point on the line.

                    Plot the second point: Plot the second point on the graph.

                    Draw the line: Use a ruler or a straightedge to draw a line that passes through both points.</p>
                </article>
                <div className="flex justify-between mt-4">
                  <Link to="/theory2"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Previous Lecture</button> </Link>
                  <Link to="/multi"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Game</button></Link>
                  <Link to="/theory4"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Next Lecture</button></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TheoryLec3
