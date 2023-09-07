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
              <h6 className="mb-2 text-2xl font-bold">SOLVING LINEAR INEQUALITIES</h6>
            </div>

            <div class="h-full flex items-center w-5/6 ml-20">
              <div class="max-h-[500px] overflow-y-auto bg-white p-6">


                <article>
                <h5>Solving Linear Inequalities in Two Variables</h5>
                  <p>The solution of a linear inequality in two variables like <b>Ax + By {'>'} C</b> is an ordered pair <b>(x, y)</b> that produces a true statement when the values of x and y are substituted into the inequality.</p>
                  <h6>Example</h6>
                  <p>Is (1, 2) a solution to the inequality</p>
                  <center>
                    <p>2x+3y{'>'}1</p>
                    <p>2⋅1+3⋅2{'>'}?1</p>
                    <p>2+5{'>'}?1</p>
                    <p>7{'>'}1</p>
                  </center>
                  <p>The graph of an inequality in two variables is the set of points that represents all solutions to the inequality. A linear inequality divides the coordinate plane into two halves by a boundary line where one half represents the solutions of the inequality. </p>
                  <p>The boundary line is dashed for {'>'} and {'<'} and solid for ≤ and ≥. </p>
                  <p>The half-plane that is a solution to the inequality is usually shaded.</p>
                  <h6>Example</h6>
                  <p>Graph the inequality </p>
                  <p><center><b>y≥−x+1</b></center></p>
                  <center> <img src="../assets/lec 3.1.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
                  <br></br>
                  <br></br>
                  <p>This is a graph of a linear inequality:</p>
                  <center> <img src="../assets/lec 3.2.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
                  <br></br>
                  <p><center><b>The inequality y ≤ x + 2</b></center></p>
                  <p>We can see the y = x + 2 line, and the shaded area is where y is less than or equal to x + 2.</p>
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

