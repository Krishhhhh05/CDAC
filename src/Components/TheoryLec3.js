import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';


const TheoryLec3 = () => {
  return (
    <>

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
              <Link to="/" title="Exit">
                <IoMdExit className="h-8 w-8 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>
        <section>
          <center><h2>Plotting of Lines</h2></center>
          <article>
            <p>To plot a line in slope-intercept form (y = mx + b), you can follow these steps:

              Identify the y-intercept: The y-intercept is the point where the line intersects the y-axis. It is represented by the value of b in the equation y = mx + b. If the equation is not in slope-intercept form, solve for y to get it in that form.

              Plot the y-intercept: Plot a point on the y-axis that corresponds to the value of b.

              Determine the slope: The slope of the line is represented by the value of m in the equation y = mx + b. The slope tells you how steep the line is and in which direction it is moving. If the slope is positive, the line will move up and to the right. If the slope is negative, the line will move down and to the right. If the slope is zero, the line will be horizontal.

              Use the slope to find another point: Starting from the y-intercept, move along the x-axis to the right by the value of the denominator of the slope. Then, move up or down along the y-axis by the value of the numerator of the slope. This will give you another point on the line.

              Plot the second point: Plot the second point on the graph.

              Draw the line: Use a ruler or a straightedge to draw a line that passes through both points.</p>
          </article>
          <center><img src="../assets/theorylec3.jpg" alt="Plotting of Lines" style={{width: '40%', height:'40%',}}></img></center>
        </section>
      </div>
    </>
  )
}

export default TheoryLec3