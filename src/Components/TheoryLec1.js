import React from 'react';
<<<<<<< HEAD
import DesmosGraph from './DesmosGraph';

function TheoryLec1() {
  return (
    <div>
      <h1>Desmos Graph Example</h1>
      <DesmosGraph />
    </div>
  );
=======
// import { Link } from 'react-router-dom';
// import { AiFillHome } from 'react-icons/ai';
// import { IoLogoAndroid } from 'react-icons/io';
// import { FaGraduationCap } from 'react-icons/fa';
// import { IoLogoGameControllerB } from 'react-icons/io';
// import { BsPencilFill } from 'react-icons/bs';
// import { IoMdSettings } from 'react-icons/io';
// import { IoMdExit } from 'react-icons/io';
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
>>>>>>> db9d8685d1a17341aa1769bcdf3f3ab77abe4147
}

export default TheoryLec1;
