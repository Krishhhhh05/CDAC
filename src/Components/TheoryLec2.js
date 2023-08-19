import React from 'react'
import './Style.css';
import Sidebar from './Sidebar';

const TheoryLec2 = () => {
  return (
    <div className=' App p-5 h-full'>
      <Sidebar/>
        <section>
        <center><h2>Understanding Planes of Axis</h2></center>
        <article>
          <p>In mathematics, a plane is a two-dimensional surface that extends infinitely in all directions. It is often represented as a flat surface that has length and width but no thickness. In geometry, a plane is defined by three points that are not on the same line, and any point on the plane can be described by its coordinates (x,y) with respect to a coordinate system.

The coordinate system typically used to describe points on a plane is called the Cartesian coordinate system, which consists of two perpendicular lines called axes. The horizontal line is called the x-axis, and the vertical line is called the y-axis. The point where the two axes intersect is called the origin and is usually denoted as (0,0).

The x-axis and y-axis divide the plane into four quadrants, numbered I, II, III, and IV in a counterclockwise direction starting from the positive x-axis.</p>
        </article>
        <center><img src="../assets/theorylec2.png" alt="Understanding of Planes and Axis"></img></center>
      </section>
    </div>
  )
}

export default TheoryLec2