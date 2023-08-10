import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';


const TheoryLec2 = () => {
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
              <Link to="/" title="Exit">
                <IoMdExit className="h-8 w-8 text-gray-500" />
              </Link>
            </div>
          </div>
        </div>

        <section>
          <center><h2>Understanding Planes of Axis</h2></center>
          <article>
            <p>In mathematics, a plane is a two-dimensional surface that extends infinitely in all directions. It is often represented as a flat surface that has length and width but no thickness. In geometry, a plane is defined by three points that are not on the same line, and any point on the plane can be described by its coordinates (x,y) with respect to a coordinate system.

              The coordinate system typically used to describe points on a plane is called the Cartesian coordinate system, which consists of two perpendicular lines called axes. The horizontal line is called the x-axis, and the vertical line is called the y-axis. The point where the two axes intersect is called the origin and is usually denoted as (0,0).

              The x-axis and y-axis divide the plane into four quadrants, numbered I, II, III, and IV in a counterclockwise direction starting from the positive x-axis.</p>
          </article>
          <center><img src="../assets/theorylec2.png" alt="Understanding of Planes and Axis" style={{width: '40%', height:'40%',}}></img></center>
        </section>
      </div>
      </div>
    </>
  )
}

export default TheoryLec2