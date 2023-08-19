import React from 'react';
import { Link } from 'react-router-dom';
import { MdAutoGraph } from 'react-icons/md';
import { LuAxis3D } from 'react-icons/lu';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { FaChartArea } from 'react-icons/fa';
import './Style.css';
import Sidebar from './Sidebar';
// import Anime from './Anime';

function Home() {
  return (
    <>

      <div className='App h-full'>

        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-2 flex items-center ml-7'>
            <Sidebar />
          </div>
          <div className='col-span-5 flex items-center'>

            <div className="">
              <h3> LECTURES</h3>
              <div className="card flex flex-row justify-between text-center font-semibold mt-3 py-3 px-16 items-center">
                <h6 className='ml-6'>Explaining Inequations</h6>
                <Link to="/theory1">
                  <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 ">View lecture</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 py-3 px-16 items-center">
                <h6 className='ml-6'>Understanding Planes of Axis</h6>
                <Link to="/theory2">
                  <button type="button" class="btn btn-primary mx-6 ">View lecture</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 py-3 px-16 items-center">
                <h6 className='ml-6'> Plotting of Lines</h6>
                <Link to="/theory3">
                  <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 ">View lecture</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 py-3 px-16 items-center">
                <h6 className='ml-6'>Shading of Region</h6>
                <Link to="/theory4">
                  <button type="button" class="btn btn-primary mx-6 my-2 ">View lecture</button>
                </Link>
              </div>
            </div>
          </div>

          <div className='col-span-5 flex items-center h-screen'>
            <div className="card-container mx-5">
              <h3>GAMES</h3>

              <div className="card flex flex-row justify-between text-center font-semibold my-2 py-3 px-8 items-center">
                <div className="flex items-center">
                  <MdAutoGraph className="h-8 w-8 text-gray-500 mr-3" />
                  <h6>Plot The Graph</h6>
                </div>
                <Link to="/plot">
                  <button type="button" className="btn btn-primary py-2 px-6 h-10 w-20">Try</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold my-2 py-3 px-8 items-center">
                <div className="flex items-center">
                  <AiOutlineArrowsAlt className="h-8 w-8 text-gray-500 mr-3" />
                  <h6>Points And Intercepts</h6>
                </div>
                <Link to="/points">
                  <button type="button" className="btn btn-primary py-2 px-6 h-10 w-20">Try</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold my-2 py-3 px-8 items-center">
                <div className="flex items-center">
                  <FaChartArea className="h-8 w-8 text-gray-500 float-left mr-3" />
                  <h6>Lines Game</h6>
                </div>
                <Link to="/multi">
                  <button type="button" className="btn btn-primary py-2 px-6 h-10 w-20">Play</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold my-2 py-3 px-8 items-center">
                <div className="flex items-center">
                  <LuAxis3D className="h-8 w-8 text-gray-500 mr-3" />
                  <h6>Region Game</h6>
                </div>
                <Link to="/region">
                  <button type="button" className="btn btn-primary py-2 px-6 h-10 w-20">Play</button>
                </Link>
              </div>

              <div className="bg-black rounded-md flex flex-row justify-center text-center font-semibold my-2 py-4 px-8 items-center">
                <Link to="/quiz">
                  <button className="bg-white text-black py-2 px-10 h-12 rounded-md">GET TESTED</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home