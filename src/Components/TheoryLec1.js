import React from 'react';
import './Style.css';
import Sidebar from './Sidebar';


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
                            <h6 className="mb-2 text-2xl font-bold">EXPLAINING INEQUATIONS</h6>
                        </div>

                        <div class="h-full flex items-center w-5/6 ml-20">
                            <div class="max-h-[500px] overflow-y-auto bg-white p-6">

                                In Mathematics, the relationship between two values that are not equal is defined by inequalities. Inequality means not equal.
                                <p>Generally, if two values are not equal, we use the “not equal symbol (≠)”. But to compare the values, whether it is less than or greater than, different inequalities are used.     </p>
                                <center>
                                    <img src="../assets/inequations-1.jpg" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>
                                In Algebra, inequality is a mathematical statement that shows the relation between two expressions using the inequality symbol. The expressions on both sides of an inequality sign are not equal. It means that the expression on the left-hand side should be greater than or less than the expression on the right-hand side or vice versa. If the relationship between two algebraic expressions is defined using the inequality symbols, then it is called literal inequalities.
                                <p>
                                    <h6>Definition:</h6> “If two real numbers or the algebraic expressions are related by the symbols “{'>'}”, “{'<'} ”, “≥”, “≤”, then the relation is called an inequality.”

                                    For example, x{'<'} 3 (x should be greater than 3)

                                    Open Sentence: The inequality is said to be an open sentence if it has only one variable.

                                    For example, x {'<'}  6 (x is less than 6)

                                    Double Inequalities: The inequality is said to be a double inequality if the statement shows the double relation of the expressions or the numbers.

                                    Example: 3≤x{'<'} 8 ( x is greater than or equal to 3 and less than 8)
                                </p>
                                

                                <h6>Inequality Symbols</h6>
                                The most familiar inequality sign is the “not equal sign (≠)”. But to compare the values on the inequalities, the following symbols are used.

                                <h6>Strict Inequality</h6>

                                The strict inequality symbols are less than symbol ({'<'} ) and greater than symbol ({'>'}). These two symbols are called strict inequalities, as it shows the numbers are strictly greater than or less than each other.

                                For example,<br></br>
                                5 {'<'}  9 ( 5 is strictly less than 9)<br></br>
                                10 {'>'} 7 (10 is strictly greater than 7)<br></br>
                                <h6>Slack Inequality</h6>

                                The slack inequalities are less than or equal to symbol (≤) and greater than or equal to symbol (≥). The slack inequalities represent the relation between two inequalities that are not strict.<br></br>

                                For example,<br></br>
                                x ≥ 15 ( x is greater than or equal to 15)<br></br>
                                x ≤ 9 (x is less than or equal to 9)<br></br>
                                <h6>Properties of Inequalities</h6>
                                The following are the properties of the inequalities:<br></br>

                                <h6>Transitive Property</h6>
                                The relation between the three numbers is defined using the transitive property.

                                If a, b and c are the three numbers, then

                                If a ≥ b, and b ≥ c, then a ≥ c<br></br>

                                Similarly,

                                If a ≤ b, and b ≤ c, then a ≤ c

                                In the above-mentioned example, if one relation is defined by strict inequality, then the result should also be in strict inequality.

                                For example,

                                If a ≥ b, and b {'>'} c, then a {'>'} c. <br></br>

                                <h6>Addition and Subtraction Property</h6>
                                The addition and subtraction property of inequalities states that adding or subtracting the same constant on both sides of inequalities are equivalent to each other.

                                Let “m” be constant,<br></br>

                                If x ≤ y, then x +m ≤ y+m<br></br>

                                If x ≥ y, then x +m ≥ y+m<br></br>

                                Similarly, for the subtraction operation,

                                If x ≤ y, then x -m ≤ y-m<br></br>

                                If x ≥ y, then x – m ≥ y-m<br></br>

                                <h6>Multiplication and Division Property</h6>
                                If a positive constant number is multiplied or divided by both sides of an inequality, the inequality remains the same. But, if inequality is multiplied or divided by the negative constant number, the inequality expression will get reversed.

                                Let “m” be a positive constant,

                                If x ≤ y, then xm ≤ ym (if m{'>'}0)

                                If x ≥ y, then xm ≥ ym (if m{'>'}0)

                                Let “m” be a negative constant number,

                                If x ≤ y, then xm ≥ ym (if m{'<'} 0)

                                If x ≥ y, then xm ≤ ym (if m{'<'} 0)

                                The above condition holds true for the division operation.

                                <h6>Converse Property</h6>
                                The converse property states that if we flip the number, we have to flip the inequality symbol also.

                                i.e., If a ≥ b, then b ≤ a

                                Likewise, if a ≤ b, then b ≥ a.

                                <h5>Solving Inequalities</h5>
                                Solving inequalities is very much similar to solving an equation. While solving the inequalities, follow the rules provided below, which do not affect the inequality direction:

                                Add or subtract the same number on both sides of an inequality.
                                Multiply or divide the inequality by the same positive number.
                                Simplify a side of the inequality.
                                Now, let us discuss how to solve the linear inequalities in one variable and two variables.

                                <h6>Solving Linear Inequalities in One Variable</h6>
                                If the linear inequality contains only one variable, then it is called linear inequality in one variable. So, here we need to find the value of the unknown variable.

                                Inequalities Example 1:

                                Solve the linear inequality in one variable: 7x+3{'<'} 5x+9<br></br>

                                Solution:

                                Given inequality is 7x+3{'<'} 5x+9.

                                Subtract 5x on both sides of the inequality

                                Thus,

                                ⇒ 7x+3-5x {'<'}  5x+9-5x

                                ⇒2x+3 {'<'} 9

                                ⇒2x {'<'}  9-3

                                ⇒ 2x {'<'}  6

                                ⇒ x {'<'}  3

                                Hence, the simplified form of the linear inequality 7x+3 {'<'}  5x+9 is x {'<'}  3.
                                <center><img src="../assets/lec1-1.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>

                                <h6>Solving Linear Inequalities in Two Variables</h6>
                                If the linear inequality contains two variables, then it is called linear inequality in two variables. Here, we have to find the solution set for the pair of values of x and y, i.e., (x, y).

                                Inequalities Example 2:

                                Solve the linear inequality in two variables: 40x+20y ≤ 120

                                Solution:

                                Given inequality is 40x+20y ≤ 120 ….(1)

                                First, take the L.H.S of an equation, 40x+20y

                                Let x=0, we get

                                40x+20y = 40(0)+20y

                                = 20y

                                Hence, 20y ≤ 120

                                y ≤ 6 … (2)

                                Thus, if x=0, then y can take the values 0, 1, 2, 3, 4, 5, 6.

                                i.e., (0, 0), (0, 1), (0, 2), (0, 3), (0, 4), (0, 5), (0,6)
                                <center><img src="../assets/lec1-2.png" alt="Understanding of Planes and Axis" style={{ width: '40%', height: '40%', }}></img></center>


                                Similarly, if we take x = 1, 2, and 3, the possible solutions are:

                                (1, 0), (1, 1), (1, 2), (1, 3), (1, 4), (2, 0), (2, 1), (2, 2), (3, 0).

                               
                                </div>
                        </div>
                        {/* <div className='m-8 place-content-center'>
                            <p>Inequations with respect to lines are mathematical expressions that show a relationship between two values that are not necessarily equal, where one of the values is represented by a linear equation. These inequations can be represented graphically as a shaded region on a coordinate plane.

                                For example, the inequation y {'<'} ; mx + b, where m and b are constants and x and y are variables, represents all the points on the coordinate plane that lie below the line y = mx + b. This is because any point below the line will have a y-value that is less than mx + b, which satisfies the inequality. Any point above the line will have a y-value that is greater than mx + b, which does not satisfy the inequality.

                                Similarly, the inequation y {'>'}; mx + b represents all the points on the coordinate plane that lie above the line y = mx + b. In this case, any point above the line will have a y-value that is greater than mx + b, which satisfies the inequality, while any point below the line will have a y-value that is less than mx + b, which does not satisfy the inequality.

                                In general, inequations with respect to lines can take the form y {'<'} ; mx + b, y {'>'}; mx + b, y ≤ mx + b, y ≥ mx + b, or other variations. The solution to the inequation is the set of all points on the coordinate plane that satisfy the relationship expressed by the inequality and can be represented graphically as a shaded region on the coordinate plane.</p>
                                </div> */}
                    </div>
                </div>
                {/* < div class="flex m-2 justify-start items-center h-screen">
                    <Sidebar/>
                    <section>
                        <center><h2>Inequations</h2></center>
                        <article>
                            <p>Inequations with respect to lines are mathematical expressions that show a relationship between two values that are not necessarily equal, where one of the values is represented by a linear equation. These inequations can be represented graphically as a shaded region on a coordinate plane.

                                For example, the inequation y {'<'} ; mx + b, where m and b are constants and x and y are variables, represents all the points on the coordinate plane that lie below the line y = mx + b. This is because any point below the line will have a y-value that is less than mx + b, which satisfies the inequality. Any point above the line will have a y-value that is greater than mx + b, which does not satisfy the inequality.

                                Similarly, the inequation y {'>'}; mx + b represents all the points on the coordinate plane that lie above the line y = mx + b. In this case, any point above the line will have a y-value that is greater than mx + b, which satisfies the inequality, while any point below the line will have a y-value that is less than mx + b, which does not satisfy the inequality.

                                In general, inequations with respect to lines can take the form y {'<'} ; mx + b, y {'>'}; mx + b, y ≤ mx + b, y ≥ mx + b, or other variations. The solution to the inequation is the set of all points on the coordinate plane that satisfy the relationship expressed by the inequality and can be represented graphically as a shaded region on the coordinate plane.</p>
                        </article>
                    </section>
                </div > */}
            </div>
        </>
    )
}

export default TheoryLec1