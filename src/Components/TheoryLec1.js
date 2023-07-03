import React from 'react';

import './Style.css';
import Desmos from 'desmos'

const TheoryLec1 = () => {
  const elt = document.createElement('div')
elt.style.width = '600px'
elt.style.height = '400px'
 
const calculator = Desmos.GraphingCalculator(elt)
calculator.setExpression({ id: 'graph1', latex: 'y=x^2' })
 
document.body.prepend(elt)
  return (
    <>
        
    </>
    )

