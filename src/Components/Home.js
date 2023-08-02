import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';
import { MdAutoGraph } from 'react-icons/md';
import { LuAxis3D } from 'react-icons/lu';
import { AiOutlineArrowsAlt } from 'react-icons/ai';
import { FaChartArea } from 'react-icons/fa';
import { VscOctoface } from 'react-icons/vsc';

import './Style.css';
import Sidebar from './Sidebar';

function Home() {
  return (
    <>

      <div className='App'>

        < div class="flex justify-start items-center h-screen">

          <Sidebar />


          <div className="card-container mx-5">
            <div className="card">


              <h4>Hello Student!</h4>
              <p>It is good to see you again.</p>
            </div>
            <div className="card">
              <h4>Time to learn inequalities in graph</h4>
              <p>Follow along the lectures and test yourself.</p>
            </div>

            <h1> Lectures </h1>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <h6>Explaining Inequations</h6>

              <Link to="/theory1">
                <button type="button" class="btn btn-primary mx-6 my-2 ">View lecture</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">

              <h6>Understanding Planes of Axis</h6>
              <Link to="/theory2">
                <button type="button" class="btn btn-primary mx-6 ">View lecture</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py- items-center justify-center">

              <h6>Plotting of Lines</h6>
              <Link to="/theory3">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 ">View lecture</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">

              <h6>Shading of Region</h6>
              <Link to="/theory4">
                <button type="button" class="btn btn-primary mx-6 my-2 ">View lecture</button>
              </Link>
            </div>
          </div>

          <div className="card-container mx-5">
            <h1>Games</h1>
            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <LuAxis3D className="h-8 w-8 text-gray-500 float-left mr-3" />
              <h6>Plot The Region</h6>
              <Link to="/region">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Play</button>
              </Link>
            </div>
            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <MdAutoGraph className="h-8 w-8 text-gray-500 float-left mr-3" />

              <h6>Plot The Graph</h6>

              <Link to="/plot">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Play</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <AiOutlineArrowsAlt className="h-8 w-8 text-gray-500 float-left mr-3" />
              <h6>Points And Intercepts</h6>
              <Link to="/points">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Play</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <FaChartArea className="h-8 w-8 text-gray-500 float-left mr-3" />
              <h6>Select the correct line</h6>
              <Link to="/multi">
                <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 h-10 w-20">Play</button>
              </Link>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <h2>Get Tested</h2>
            </div>

            <div className="card flex flex-row text-center font-semibold mt-3 py-3 items-center justify-center">
              <h2>Ask Doubts</h2>
            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default Home