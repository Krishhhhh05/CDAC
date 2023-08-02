import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoLogoAndroid } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { BsPencilFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { IoMdExit } from 'react-icons/io';


function Sidebar() {
    return (
        <>

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
                                <Link to="/">
                                    <AiFillHome className="h-6 w-6 text-gray-500" />
                                </Link>
                            </div>
                        </div>
                        <div class="text-white p-3">
                            <div>
                                <Link to="/theorylec1">
                                    <FaGraduationCap className="h-6 w-6 text-gray-500" />
                                </Link>

                            </div>
                        </div>
                        <div class="text-white p-3">
                            <div>
                                <Link to="/multi">
                                    <IoLogoGameControllerB className="h-6 w-6 text-gray-500" />
                                </Link>

                            </div>
                        </div>
                        <div class="text-white p-3">
                            <div>
                                <Link to="/">
                                    <BsPencilFill className="h-6 w-6 text-gray-500" />
                                </Link>

                            </div>
                        </div>
                        <div class="text-white p-3">
                            <div>
                                <Link to="/">
                                    <IoMdSettings className="h-6 w-6 text-gray-500" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="text-white p-16">
                        <div>
                            <Link to="/">
                                <IoMdExit className="h-8 w-8 text-gray-500" />
                            </Link>
                        </div>
                    </div>

                </div>




            </div>

        </>
    );
}

export default Sidebar