import './App.css';
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Cards from './Components/Cards';
import { Route,Routes } from 'react-router-dom';
import Graph from './Components/Graph';


function App() {
return(
  <Routes>
    <Route path='/cards' element={<Cards />}/>
    <Route path='/graph' element={<Graph />}/>
  </Routes>
)
}
export default App;
