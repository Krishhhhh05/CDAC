import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';


const TheoryLec4 = () => {
    return (
        <>
            <div className=''>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-1 flex items-center ml-7'>

                        <Sidebar />
                    </div>
                    <div className='col-span-11'>
                        <div className="flex justify-center">
                            <h6 className="mb-2 text-2xl font-bold">WHAT IS AN INEQUATION?</h6>
                        </div>

                        <div class="h-full flex items-center w-5/6 ml-20">
                            <div class="max-h-[500px] overflow-y-auto bg-white p-6">

                            <article>
<h5>Graph the "equals" line, then shade in the correct area.</h5>
<h6>Follow these steps:</h6>
<center>
  <p>Rearrange the equation so "y" is on the left and everything else on the right.</p>
  <p>Plot the "y=" line (make it a solid line for y≤ or y≥, and a dashed line for y{'<'} or y{'>'})</p>
  <p>Shade above the line for a "greater than" (y{'>'} or y≥) or below the line for a "less than" (y{'<'} or y≤).</p>
</center>
<h5>Let us try some examples:</h5>
<h6>Example: y ≤ 2x−1</h6>
<p>1. The inequality already has "y" on the left and everything else on the right, so no need to rearrange.</p>
<p>2. Plot y = 2x−1 (as a solid line because y≤ includes equal to):</p>
<center> <img src="../assets/lec 4.1.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<br></br>
<p>3. Shade the area below (because y is less than or equal to):</p>
<center> <img src="../assets/lec 4.2.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<br></br>
<br></br>
<h6>Example: 2y − x ≤ 6</h6>
<p>1. We will need to rearrange this one so "y" is on its own on the left:</p>
<p> Start with: 2y − x ≤ 6</p>
<p> Add x to both sides: 2y ≤ x + 6</p>
<p> Divide all by 2: y ≤ x/2 + 3</p>
<p>2. Now plot y = x/2 + 3 (as a solid line because y≤ includes equal to):</p>
<center> <img src="../assets/lec 4.3.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<p>3. Shade the area below (because y is less than or equal to):</p>
<center> <img src="../assets/lec 4.4.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<br></br>
<br></br>
<h6>Example: y/2 + 2 {'>'} x</h6>
<p>1. We will need to rearrange this one so "y" is on its own on the left:</p>
<p>Start with: y/2 + 2 {'>'} x</p>
<p>Subtract 2 from both sides: y/2 {'>'} x − 2</p>
<p>Multiply all by 2: y {'>'} 2x − 4</p>
<p> 2. Now plot y = 2x − 4 (as a dashed line because y{'>'} does not include equals to):</p>
<center> <img src="../assets/lec 4.5.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<p>3. Shade the area above (because y is greater than):</p>
<center> <img src="../assets/lec 4.6.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<p>The <b>dashed line</b> shows that the inequality does <b>not</b> include the line <b>y = 2x−4</b>.</p>
<br></br>
<br></br>
<br></br>
<h5>Two Special Cases</h5>
<p>We can also have a horizontal, or vertical, line:</p>
<center> <img src="../assets/lec 4.7.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<br></br>
<p><center>This shows where y is less than 4<br></br>
            (from, but not including, the line y=4 on down)<br></br>
            Notice that we have a dashed line to show that it does not include where y=4
</center></p>
<br></br>
<br></br>

<center> <img src="../assets/lec 4.8.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
<br></br>
<p><center>This one doesn't even have y in it!<br></br>
It has the line x=1, <br></br>
and is shaded for all values of x greater than (or equal to) 1          
</center></p>
</article>

                               
                                
                                
                                </div>
                            <div className="flex justify-end mt-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheoryLec4