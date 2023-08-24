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
                    <p>The cartesian plane is a two-dimensional coordinate plane formed by the intersection of two perpendicular lines. The horizontal line is known as X-axis, and the vertical line is known as Y-axis. The coordinate point (x, y) on the Cartesian plane says that the horizontal distance of the point from the origin is x, and the vertical distance is y. If the sign of x is positive, the point is on the right of the origin; else it is on the left. Similarly, if the sign is positive for y, the point is y points above the origin else it is y points below it.</p>
                  <center><img src="../assets/lec2-2.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>

                  <h6>Axes</h6>

In the cartesian plane, there are two axes. One is the horizontal axis, called the x-axis and the other is a vertical axis, which is called the y-axis. 

<h6>Origin</h6>

In the cartesian plane, the point at which the x-axis and y-axis intersect is called the origin. In the cartesian plane, the origin is represented by an ordered pair or the cartesian coordinate (0, 0).

<h6>Cartesian Plane Quadrants</h6>

The X-axis and Y-axis split the plane into four parts, and they are called quadrants. Quadrants are denoted as I, II, III, and IV in an anticlockwise direction. The axes in the plane are called Cartesian axes, and the plane is known as the Cartesian plane.
<center><img src="../assets/lec2-3.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>
Take, the ray<br></br>

OX = Positive x-axis,<br></br>

OX’ = Negative x-axis<br></br>

OY = Positive y-axis<br></br>

OY’ = Negative y-axis.<br></br>

Thus the quadrants are characterized by the following signs of abscissa and ordinate:<br></br>

Quadrant x {'>'} 0 , y {'>'} 0 or (+,+)<br></br>
Quadrant x {'<'} 0 , y {'>'} 0 or (-,+)<br></br>
Quadrant x {'<'} 0 , y {'<'} 0 or ( -,-)<br></br>
Quadrant x {'>'} 0 , y {'<'} 0 or (+,-)<br></br>
The points which lie on the axis, have any one of the coordinates form, such as (x, 0) or (0, y). If the coordinate is of the form (x, 0), then the point is on the x-axis, and if the coordinate is of the form (0, y), then the point is on the y-axis. In this case, the point is not located in any of the quadrants. 

<h6>Note: </h6><br></br>

First Quadrant (Top right)<br></br>

Second Quadrant (Top left)<br></br>

Third quadrant (Bottom left)<br></br>

Fourth Quadrant (Bottom right).<br></br>

<h6>Cartesian Coordinates</h6>

The ordered pair in the cartesian plane is called the cartesian coordinates. The cartesian coordinates are of the form  (x, y). The ordered pairs in the two-dimensional plane are referred to as the abscissa and ordinate. 

<h6>Abscissa:</h6> The first number in the ordered pair is called the abscissa. In other words, the value of x in the ordered pair is called the abscissa. It is the distance of any point on the plane from the y-axis.

<h6>Ordinate:</h6> The second number in the ordered pair is called the ordinate. It takes the value of y. The ordinate is the distance of any point on the plane from the x-axis.<br></br>

For example, if the cartesian coordinate is (2, 3), 2 represents the abscissa and 3 represents the ordinate.


<h5>One Dimensional Plane</h5>
For the Cartesian coordinate system in one dimension, draw a straight line and choose a point O as the origin in the middle of the line. The line segment, which is in the right of the origin O is positive, whereas the line segment in the left of the origin is negative. So give the sign as ‘+’ and ‘-’ to any point as we locate it on the number line. The line, which is chosen for determining the points in one dimension, is called the number line.

<center><img src="../assets/lec2-4.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>


<h6>Origin:</h6>

The centre point from which the distances are marked is called the origin. In two- dimensional plane, the X-axis, and Y-axis crossed the point is called the origin.


How to Plot the points in the Cartesian plane?
Let us take a cartesian coordinate (2, 3).

To plot the point (2, 3) in the cartesian plane, 

First, identify the abscissa (x-value) and ordinate (y-value) from the given ordered pair. Here, Abscissa = 2 and ordinate= 3.
Next, plot the value of x (i.e.) “2” on the x-axis. Plot the number, and move 2 unit from the origin to the right, as its value of x is positive. 
Next, plot the value of y, (i.e.) “3” on the y axis. Plot the number, and move 3 units from the origin to the up on the y-axis, as it takes the positive value.
Finally, the point (2, 3) is located on the first quadrant of the cartesian plane. 

<center><img src="../assets/lec2-5.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>


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
