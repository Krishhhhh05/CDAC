
import './App.css';
import React from 'react';
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route,Routes } from 'react-router-dom';
// import AreaGraph from './Components/AreaGraph';
// import Example from './Components/Example';
import PlotGraph from './Components/PlotGraph';
import Region from './Components/Region';
import TheoryLec1 from './Components/TheoryLec1';
import TheoryLec2 from './Components/TheoryLec2';
import TheoryLec3 from './Components/TheoryLec3';
import TheoryLec4 from './Components/TheoryLec4';
import Points from './Components/Points';
import Multi  from './Components/Multi';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';


function App() {
return(
  
  <Routes>
    {/* <Route path='/cards' element={<Cards />}/> */}
    <Route path='/region' element={<Region />}/>
    {/* <Route path='/areagraph' element={<AreaGraph />}/> */}
    {/* <Route path='/example' element={<Example />}/> */}
    <Route path='/plot' element={<PlotGraph />}/>
    <Route path='/theory1' element={<TheoryLec1 />}/>
    <Route path='/theory2' element={<TheoryLec2 />}/>
    <Route path='/theory3' element={<TheoryLec3 />}/>
    <Route path='/theory4' element={<TheoryLec4 />}/>
    <Route path='multi' element={<Multi />}/>
    <Route path='points' element={<Points />}/>
    <Route path='' element={<Home />}/>
    <Route path='multi' element={<Multi />}/>
    <Route path='points' element={<Points />}/>
    <Route path='sidebar' element={<Sidebar />}/>

      
  </Routes>
)
}
export default App;