import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

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
                                    <p>To shade the region in an inequality with respect to lines, you need to identify the half-plane that contains the solutions to the inequality. Here are the steps:
                                    </p>
                                    <center> <img src="../assets/lec 4.8.png" alt="Example" style={{ width: '40%', height: '40%', }}></img></center>
                                    <br></br>
                                    <p><center>This one doesn't even have y in it!<br></br>
                                        It has the line x=1, <br></br>
                                        and is shaded for all values of x greater than (or equal to) 1
                                    </center></p>
                                </article>
                            </div>
                            <div className="flex justify-between mt-8">
                                <Link to="/theory3"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Previous Lecture</button> </Link>
                                {/* <Link to="/theory2"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Game</button></Link> */}
                                <Link to="/home"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">End</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheoryLec4