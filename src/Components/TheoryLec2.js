import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';


const TheoryLec2 = () => {



  return (
    <>
      <div className=''>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-1 flex items-center ml-7'>

            <Sidebar />
          </div>
          <div className='col-span-11'>
            <div className="flex justify-center">
              <h6 className="mb-2 text-2xl font-bold">UNDERSTANDING  PLANES OF AXIS</h6>
            </div>

            <div class="h-full flex items-center w-5/6 ml-20">
              <div class="max-h-[500px] overflow-y-auto bg-white p-6">

                <section>
                  <p>In mathematics, a plane is a two-dimensional surface that extends infinitely in all directions. It is often represented as a flat surface that has length and width but no thickness. In geometry, a plane is defined by three points that are not on the same line, and any point on the plane can be described by its coordinates (x,y) with respect to a coordinate system.

                    The coordinate system typically used to describe points on a plane is called the Cartesian coordinate system, which consists of two perpendicular lines called axes. The horizontal line is called the x-axis, and the vertical line is called the y-axis. The point where the two axes intersect is called the origin and is usually denoted as (0,0).

                    The x-axis and y-axis divide the plane into four quadrants, numbered I, II, III, and IV in a counterclockwise direction starting from the positive x-axis.</p>
                  <center><img src="../assets/theorylec2.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>
                </section>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default TheoryLec2