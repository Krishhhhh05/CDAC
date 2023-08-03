import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';


const TheoryLec4 = () => {
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
                <Link to="/">
                  <AiFillHome className="h-6 w-6 text-gray-500" />
                </Link>
              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/theory1">
                  <FaGraduationCap className="h-6 w-6 text-gray-500" />
                </Link>

              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/multi">
                  <IoLogoGameControllerB className="h-6 w-6 text-gray-500" />
                </Link>

              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/">
                  <BsPencilFill className="h-6 w-6 text-gray-500" />
                </Link>

              </div>
            </div>
            <div class="text-white p-3">
              <div>
                <Link to="/">
                  <IoMdSettings className="h-6 w-6 text-gray-500" />
                </Link>
              </div>
            </div>
          </div>
          <div class="text-white p-16">
            <div>
              <Link to="/">
                <IoMdExit className="h-8 w-8 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>

        <section>
          <center><h2>Shading of Region</h2></center>
          <article>
            <p>To shade the region in an inequality with respect to lines, you need to identify the half-plane that contains the solutions to the inequality. Here are the steps:

              Rewrite the inequality in slope-intercept form, y = mx + b, if it is not already in that form.

              Graph the line that corresponds to the equation y = mx + b. If the inequality is "greater than" or "less than," use a dashed line to indicate that the line itself is not included in the solution set. If the inequality is "greater than or equal to" or "less than or equal to," use a solid line to indicate that the line itself is included in the solution set.

              Choose a test point that is not on the line. This point can be any point in the plane, but it is often easiest to choose the origin (0,0).

              Substitute the coordinates of the test point into the inequality. If the inequality is true, shade the half-plane that contains the test point. If the inequality is false, shade the other half-plane.

              Label the shaded region with the inequality symbol and any other relevant information.

              For example, if the inequality is y &lt; 2x + 3, you would graph the line y = 2x + 3 with a dashed line (because the inequality is "less than"). Then, you would choose a test point, such as (0,0), and substitute the values into the inequality to get 0 &lt; 2(0) + 3. Since this is true, you would shade the half-plane that contains the origin (which is the region below the dashed line). Finally, you would label the shaded region with the inequality symbol, y &lt; 2x + 3, and any other relevant information.</p>
          </article>
          <center><img src="../assets/theorylec4.jpg" alt="Shading of Region"></img></center>
        </section>
      </div>
    </>
  )
}

export default TheoryLec4