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
       <div className="grid grid-cols-12 gap-4">
      <div className="col-span-2 row-span-2 flex justify-center mt-6 "><Sidebar/></div>
      <div className="col-span-5 p-3">
      <h3 className='my-2 flex justify-center text-center'>LECTURES</h3>

        <div className="">
              <div className="card flex flex-row justify-between text-center font-semibold p-3 w-full  items-center">
                <h6 className='ml-6'>Explaining Inequations</h6>
                <Link to="/theory1">
                  <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 ">View lecture</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 p-3  items-center">
                <h6 className='ml-6'>Understanding Planes of Axis</h6>
                <Link to="/theory2">
                  <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10">View lecture</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 p-3 items-center">
                <h6 className='ml-6'> Plotting of Lines</h6>
                <Link to="/theory3">
                  <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10 ">View lecture</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 p-3 items-center">
                <h6 className='ml-6'>Shading of Region</h6>
                <Link to="/theory4">
                  <button type="button" class="btn btn-primary mx-6 my-2 py-2 px-10">View lecture</button>
                </Link>
              </div>
            </div></div>
      <div className="col-span-5  p-4"> <div className="">
              <h3 className='flex justify-center text-center'>TEST YOURSELF</h3>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3 p-3 items-center">
                <div className="flex items-center">
                  <MdAutoGraph className="h-12 w-8 text-gray-500 mr-3" />
                  <h6>Plot The Graph</h6>
                </div>
                <Link to="/plot">
                  <button type="button" className="btn btn-primary  py-2 px-6 h-9 w-20">Play</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3  p-3 items-center">
                <div className="flex items-center">
                  <AiOutlineArrowsAlt className="h-12 w-8 text-gray-500 mr-3" />
                  <h6>Points And Intercepts</h6>
                </div>
                <Link to="/points">
                  <button type="button" className="btn btn-primary py-2 px-6 h-9 w-20">Play</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3  p-3 items-center">
                <div className="flex items-center">
                  <FaChartArea className="h-12 w-8 text-gray-500 float-left mr-3" />
                  <h6>Lines Game</h6>
                </div>
                <Link to="/multi">
                  <button type="button" className="btn btn-primary py-2 px-6 h-9 w-20">Play</button>
                </Link>
              </div>

              <div className="card flex flex-row justify-between text-center font-semibold mt-3  p-3 items-center">
                <div className="flex items-center">
                  <LuAxis3D className="h-12 w-8 text-gray-500 mr-3" />
                  <h6>Region Game</h6>
                </div>
                <Link to="/region">
                  <button type="button" className="btn btn-primary py-2 px-6 h-9 w-20">Play</button>
                </Link>
              </div>

        </div>
        </div>
      {/* Add more items with the desired spans */}

      <div className="col-span-10 p-4"><div className=" rounded-md flex flex-row justify-center text-center font-semibold my-2 w-full p-3 items-center">
                <Link to="/quiz">
                  <button className="bg-black text-white  p-4  rounded-md h-18 w-80">MCQ TEST</button>
                </Link>
              </div></div>
    </div>
    
    </>
  );
}

export default Home
