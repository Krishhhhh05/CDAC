import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';
import './Style.css';

// const Home = () => {
//   return (

//     <div class="gap-x-7 mx-6 gap-9">



//       <Link to="/region">
//       <button type="button" class="btn btn-primary mx-6 my-2">Region</button>    
//       </Link>
//       <Link to="/plot">
//       <button type="button" class="btn btn-primary mx-6 my-2">Plot Graph</button>    
//       </Link>
//       <Link to="/multi">
//       <button type="button" class="btn btn-primary mx-6 my-2">Multi</button>    
//       </Link>
//       <Link to="/points">
//       <button type="button" class="btn btn-primary mx-6 my-2">Points</button>    
//       </Link>

//       </div>
//   )
// }

// export default Home
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

      <div className='App'>
        {/* <div class="gap-x-7 mx-6 gap-9">
          <Link to="/region">
            <button type="button" class="btn btn-primary mx-6 my-2">Region</button>
          </Link>
          <Link to="/plot">
            <button type="button" class="btn btn-primary mx-6 my-2">Plot Graph</button>
          </Link>
          <Link to="/points">
            <button type="button" class="btn btn-primary mx-6 my-2">Points</button>
          </Link>
          <Link to="/multi">
            <button type="button" class="btn btn-primary mx-6 my-2">Multi</button>
          </Link>
          <br></br>
          <Link to="/theory1">
            <button type="button" class="btn btn-primary mx-6 my-2">Inequations</button>
          </Link>
          <Link to="/theory2">
            <button type="button" class="btn btn-primary mx-6 my-2">Understanding Planes of Axis</button>
          </Link>
          <Link to="/theory3">
            <button type="button" class="btn btn-primary mx-6 my-2">Plotting of Lines</button>
          </Link>
          <Link to="/theory4">
            <button type="button" class="btn btn-primary mx-6 my-2">Shading of Region</button>
          </Link>

        </div> */}
        < div class="flex justify-start items-center h-screen">

          <div class="bg-black rounded-lg h-90 w-20 flex flex-col items-center">

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

          {/* <div class="gap-x-7 mx-6 gap-9">
            <Link to="/region">
              <button type="button" class="btn btn-primary mx-6 my-2">Region</button>
            </Link>
            <Link to="/plot">
              <button type="button" class="btn btn-primary mx-6 my-2">Plot Graph</button>
            </Link>
            <Link to="/points">
              <button type="button" class="btn btn-primary mx-6 my-2">Points</button>
            </Link>
            <Link to="/multi">
              <button type="button" class="btn btn-primary mx-6 my-2">Multi</button>
            </Link>
            <br></br>
            <Link to="/theory1">
              <button type="button" class="btn btn-primary mx-6 my-2">Inequations</button>
            </Link>
            <Link to="/theory2">
              <button type="button" class="btn btn-primary mx-6 my-2">Understanding Planes of Axis</button>
            </Link>
            <Link to="/theory3">
              <button type="button" class="btn btn-primary mx-6 my-2">Plotting of Lines</button>
            </Link>
            <Link to="/theory4">
              <button type="button" class="btn btn-primary mx-6 my-2">Shading of Region</button>
            </Link>
          </div> */}

          <div className="card-container">
            <div className="card">
              <h2>Hello Student!</h2>
              <p>It is good to see you again.</p>
            </div>
            <div className="card">
              <h2>Continue Lecture 2</h2>
              <p>This is the content of Card 2.</p>
            </div>

            <h1> Lectures </h1>
            <div className="card">
              <Link to="/theory1">
                <button type="button" class="btn btn-primary mx-6 my-2">Inequations</button>
              </Link>
            </div>

            <div className="card">
              <Link to="/theory2">
                <button type="button" class="btn btn-primary mx-6 my-2">Understanding Planes of Axis</button>
              </Link>
            </div>
            <div className="card">
              <Link to="/theory3">
                <button type="button" class="btn btn-primary mx-6 my-2">Plotting of Lines</button>
              </Link>
            </div>
            <div className="card">
              <Link to="/theory4">
                <button type="button" class="btn btn-primary mx-6 my-2">Shading of Region</button>
              </Link>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Home