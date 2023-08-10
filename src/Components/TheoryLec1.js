import React from 'react';
// import { Link } from 'react-router-dom';
// import { AiFillHome } from 'react-icons/ai';
// import { IoLogoAndroid } from 'react-icons/io';
// import { FaGraduationCap } from 'react-icons/fa';
// import { IoLogoGameControllerB } from 'react-icons/io';
// import { BsPencilFill } from 'react-icons/bs';
// import { IoMdSettings } from 'react-icons/io';
// import { IoMdExit } from 'react-icons/io';
import './Style.css';


const TheoryLec1 = () => {
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
                        <center><h2>Inequations</h2></center>
                        <article>
                            <p>Inequations with respect to lines are mathematical expressions that show a relationship between two values that are not necessarily equal, where one of the values is represented by a linear equation. These inequations can be represented graphically as a shaded region on a coordinate plane.

                                For example, the inequation y &lt; mx + b, where m and b are constants and x and y are variables, represents all the points on the coordinate plane that lie below the line y = mx + b. This is because any point below the line will have a y-value that is less than mx + b, which satisfies the inequality. Any point above the line will have a y-value that is greater than mx + b, which does not satisfy the inequality.

                                Similarly, the inequation y &gt; mx + b represents all the points on the coordinate plane that lie above the line y = mx + b. In this case, any point above the line will have a y-value that is greater than mx + b, which satisfies the inequality, while any point below the line will have a y-value that is less than mx + b, which does not satisfy the inequality.

                                In general, inequations with respect to lines can take the form y &lt; mx + b, y &gt; mx + b, y ≤ mx + b, y ≥ mx + b, or other variations. The solution to the inequation is the set of all points on the coordinate plane that satisfy the relationship expressed by the inequality and can be represented graphically as a shaded region on the coordinate plane.</p>
                        </article>
                    </section>
                </div >
            </div>
        </>
    )
}

export default TheoryLec1