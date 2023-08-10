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
      {/* <div>
        <h1>My React App</h1>
        <Anime />
      </div> */}
      <div className='App'>

        < div class="flex m-2 justify-start items-center h-screen">
          <div id="sidebar" class="bg-black rounded-lg h-90 w-20 flex flex-col items-center">

            <div class="text-white p-8">
              <div>
                <IoLogoAndroid className="h-12 w-12 text-gray-500" />
              </div>
            </div>

            <div class="flex flex-col flex-grow justify-center">
              <div class="text-white p-3">
                <div>
                  <AiFillHome className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <FaGraduationCap className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <IoLogoGameControllerB className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <BsPencilFill className="h-6 w-6 text-gray-500" />
                </div>
              </div>
              <div class="text-white p-3">
                <div>
                  <IoMdSettings className="h-6 w-6 text-gray-500" />
                </div>
              </div>
            </div>

            <div class="text-white p-16">
              <div>
                <IoMdExit className="h-8 w-8 text-gray-500" />
              </div>
            </div>

          </div>


          <div className="card-container mx-5 p-4">
            {/* <div className="card">
              <h2>Hello Student!</h2>
              <p>Let start learning  inequality</p>
            </div>
            <div className="card">
              <h4>Time to learn inequalities in graph</h4>
              <p>Follow along the lectures and test yourself.</p>
            </div> */} 

            <h1> Lectures </h1>

            <div className="card flex flex-row text-center font-semibold mt-3">
              <div></div>
            Understanding Planes of Axis
              <Link to="/theory2">
                <button type="button" class="btn btn-primary ml-2">Go!</button>
              </Link>
            </div>

             <div className="card">
              <Link to="/theory3">
                <button type="button" class="btn btn-primary mx-6 my-2">Plotting of Lines</button>
              </Link>
            </div>

             <div className="card">
              <Link to="/theory3">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 ">View lecture</button>
              </Link>
            </div>
            <div className="card">
              
              <Link to="/theory1">
                <button type="button" class="btn btn-primary mx-6 my-2">Inequations</button>
              </Link>
            </div>

           
           

            <div className="card">
              <Link to="/theory4">
                <button type="button" class="btn btn-primary mx-6 my-2 ">View lecture</button>
              </Link>
            </div>
          </div>

          <div className="card-container mx-5 p-4">
            <h1>Games</h1>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <MdAutoGraph className="h-8 w-8 text-gray-500 float-left mr-3" />

              <h6>Plot The Graph</h6>

              <Link to="/plot">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Try</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <AiOutlineArrowsAlt className="h-8 w-8 text-gray-500 float-left mr-3" />
              <h6>Points And Intercepts</h6>
              <Link to="/points">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Try</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <FaChartArea className="h-8 w-8 text-gray-500 float-left mr-3" />
              <h6>Lines Game</h6>
              <Link to="/multi">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Play</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <LuAxis3D className="h-8 w-8 text-gray-500 float-left mr-3" />
              <h6>Region Game</h6>
              <Link to="/region">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Play</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <h2>Get Tested</h2>
              <Link to="/quiz">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Begin</button>
              </Link>
            </div>

            {/* <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <h2>Ask Doubts</h2>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home