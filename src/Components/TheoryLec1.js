import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const TheoryLec1 = () => {
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

                                <p>Mathematics is not always about "equals", sometimes we only know that something is greater or less than.</p>

                                <p>In Mathematics, the relationship between two values that are not equal is defined by inequalities. Inequality means not equal.</p>
                                <p>Generally, if two values are not equal, we use the “not equal symbol (≠)”. But to compare the values, whether it is less than or greater than, different inequalities are used.     </p>
                                <center>
                                    <img src="../assets/inequations-1.jpg" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>
                                In Algebra, inequality is a mathematical statement that shows the relation between two expressions using the inequality symbol. The expressions on both sides of an inequality sign are not equal. It means that the expression on the left-hand side should be greater than or less than the expression on the right-hand side or vice versa. If the relationship between two algebraic expressions is defined using the inequality symbols, then it is called literal inequalities.
                                <p>
                                    Definition: “If two real numbers or the algebraic expressions are related by the symbols “{'>'}”, “{'<'} ”, “≥”, “≤”, then the relation is called an inequality.”

                                </p>

                                Inequality Symbols
                                The most familiar inequality sign is the “not equal sign (≠)”. But to compare the values on the inequalities, the following symbols are used.

                                <h5>Greater or Less Than</h5>

                                The strict inequality symbols are less than symbol ({'<'} ) and greater than symbol ({'>'}). These two symbols are called strict inequalities, as it shows the numbers are strictly greater than or less than each other.

                                <h5>... Or Equal To!</h5>

                                The slack inequalities are less than or equal to symbol (≤) and greater than or equal to symbol (≥). The slack inequalities represent the relation between two inequalities that are not strict.

                                <h5>Linear Inequality</h5>
                                <p>A Linear Inequality is like a Linear Equation (such as y = 2x+1) ...</p>
                                <p>... but it will have an Inequality like {'<'}, {'>'}, ≤, or ≥ instead of an =.</p>

                                <h5>When there is an inequality with 1 variable and degree 1 it represents a line along the axes the variable represents.</h5>

                                <p>The graph of a linear inequality in one variable is a number line. Use an open circle for {'<'} and {'>'} and a closed circle for ≤ and ≥.</p>
                                <br></br>
                                <center><b><p>The graph for x {'>'} -3</p>
                                    <img src="../assets/LEC1.1.png" alt="Example 1" style={{ width: '40%', height: '40%', }}></img>

                                    <br></br>
                                    <p>The graph for x ≥ 2</p>
                                    <img src="../assets/LEC 1.2.png" alt="Example 2" style={{ width: '40%', height: '40%', }}></img></b></center>

                                <br></br>
                                <br></br>

                                <h5>An equation with 2 variables and degree 1 represents a line on the plane.</h5>
                                <br></br>
                                <h5>When there is an inequality with 2 variables with the degree being 1 it represents a region on the graph.</h5>
                            </div>
                            <div className="flex justify-between mt-8">
                    <Link to="/home"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Home</button> </Link>
                    {/* <Link to="/theory2"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Game</button></Link> */}
                    <Link to="/theory2"><button class="btn btn-primary font-bold py-2 px-4 mb-2 rounded">Next Lecture</button></Link>
                  </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default TheoryLec1