import { Route,Routes } from 'react-router-dom';
import './App.css';
// import { Home } from './components/Home'
import   Multi  from './Components/Multi';
import PlotGraph from './Components/PlotGraph'
import Home from './Components/Home';
import Region from './Components/Region';
import Points from './Components/Points';

function App() {
  return (
    <>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='plot' element={<PlotGraph />}/>
      <Route path='multi' element={<Multi />}/>
      <Route path='region' element={<Region />}/>
      <Route path='points' element={<Points />}/>
      
    </Routes>
    </>

  );
}

export default App;
