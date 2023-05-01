import './App.css';
import React from 'react';
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from './Components/Cards';
import { Route,Routes } from 'react-router-dom';
import AreaGraph from './Components/AreaGraph';
import Example from './Components/Example';
import PlotGraph from './Components/PlotGraph';
import Region from './Components/Region';
import Home from './Components/Home';
import Multi from './Components/Multi';


function App() {
return(
  
  <Routes>
    <Route path='/cards' element={<Cards />}/>
    <Route path='/region' element={<Region />}/>
    <Route path='/areagraph' element={<AreaGraph />}/>
    <Route path='/example' element={<Example />}/>
    <Route path='/plot' element={<PlotGraph />}/>
    <Route path='' element={<Home />}/>
    <Route path='/multi' element={<Multi />}/>
    

  </Routes>
)
}
export default App;
