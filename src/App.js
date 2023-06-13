// import { Route,Routes } from 'react-router-dom';
// import './App.css';
// // import { Home } from './components/Home'
// import   Multi  from './Components/Multi';
// import PlotGraph from './Components/PlotGraph'
// import Home from './Components/Home';
// import Region from './Components/Region';
// import Points from './Components/Points';

// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path='' element={<Home/>}/>
//       <Route path='plot' element={<PlotGraph />}/>
//       <Route path='multi' element={<Multi />}/>
//       <Route path='region' element={<Region />}/>
//       <Route path='points' element={<Points />}/>
      
//     </Routes>
//     </>

//   );
// }

// export default App;
import './App.css';
import React from 'react';
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Cards from './Components/Cards';
import { Route,Routes } from 'react-router-dom';
// import AreaGraph from './Components/AreaGraph';
// import Example from './Components/Example';
import PlotGraph from './Components/PlotGraph';
import Region from './Components/Region';
import TheoryLec1 from './Components/TheoryLec1';
import TheoryLec2 from './Components/TheoryLec2';
import TheoryLec3 from './Components/TheoryLec3';
import TheoryLec4 from './Components/TheoryLec4';
import Home from './Components/Home';


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
    <Route path='' element={<Home />}/>

  </Routes>
)
}
export default App;