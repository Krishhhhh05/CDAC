import React from 'react'
import Desmos from 'desmos';


    const elt = document.createElement('div')
  elt.style.width = '600px'
  elt.style.height = '400px'
   
  const calculator = Desmos.GraphingCalculator(elt)
  calculator.setExpression({ id: 'graph1', latex: 'y=x^2' })
   
  document.body.prepend(elt)

const Graph = () => {
    
  return (
    <div>
      
    </div>
  )
}

export default Graph
