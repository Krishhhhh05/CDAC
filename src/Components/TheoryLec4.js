import React from 'react'

const TheoryLec4 = () => {
  return (
    <div>
            <section>
        <center><h2>Shading of Region</h2></center>
        <article>
          <p>To shade the region in an inequality with respect to lines, you need to identify the half-plane that contains the solutions to the inequality. Here are the steps:

Rewrite the inequality in slope-intercept form, y = mx + b, if it is not already in that form.

Graph the line that corresponds to the equation y = mx + b. If the inequality is "greater than" or "less than," use a dashed line to indicate that the line itself is not included in the solution set. If the inequality is "greater than or equal to" or "less than or equal to," use a solid line to indicate that the line itself is included in the solution set.

Choose a test point that is not on the line. This point can be any point in the plane, but it is often easiest to choose the origin (0,0).

Substitute the coordinates of the test point into the inequality. If the inequality is true, shade the half-plane that contains the test point. If the inequality is false, shade the other half-plane.

Label the shaded region with the inequality symbol and any other relevant information.

For example, if the inequality is y &lt; 2x + 3, you would graph the line y = 2x + 3 with a dashed line (because the inequality is "less than"). Then, you would choose a test point, such as (0,0), and substitute the values into the inequality to get 0 &lt; 2(0) + 3. Since this is true, you would shade the half-plane that contains the origin (which is the region below the dashed line). Finally, you would label the shaded region with the inequality symbol, y &lt; 2x + 3, and any other relevant information.</p>
        </article>
        <center><img src="../assets/theorylec4.jpg" alt="Shading of Region"></img></center>
      </section>
    </div>
  )
}

export default TheoryLec4