
import React, { useState } from 'react'
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'

// import pooja_1 from '../assets/pooja_1.png'
// import pooja_2 from '../assets/pooja_2.png'
// import pooja_3 from '../assets/pooja_3.png'
import marriage from '../assets/marriage.png'
import Pandakkal from '../assets/Pandakkal.png'
import Annaprasana from '../assets/Annaprasana.png'
import Naamkaran from '../assets/Naamkaran.png'
import Aksarabhyasam from '../assets/Aksarabhyasam.png'
import Seemantham from '../assets/Seemantham.png'
import VastuShaanti from '../assets/VastuShaanti.png'
import Fix_Muhurath from '../assets/Fix_Muhurath.png'
import Sashtiapthapoorthi from '../assets/Sashtiapthapoorthi.png'
import Upanayanam from '../assets/Upanayanam.png'
import KarnaVedha from '../assets/KarnaVedha.png'
import Bhima_Ratha_Shanthi from '../assets/Bhima_Ratha_Shanthi.png'
import GrihaPravesham from '../assets/GrihaPravesham.png'
import Saraswati from '../assets/Saraswati.png'
import Ganapathi_Pooja from '../assets/Ganapathi_Pooja.png'
import Lakshmi_Pooja from '../assets/Lakshmi_Pooja.png'
import Punyahavachanam from '../assets/Punyahavachanam.png'

const Services = () => {

    return (       
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex flex-col'>

                {/* Navbar */} 
                <div className="relative">
                    <div className='absolute flex flex-col md:flex-row z-5 bg-white opacity-25 rounded-lg items-center container mx-auto px-10 py-14 mb-8 mt-10 gap-7 '></div> 
                    <div className='z-10 flex flex-col md:flex-row items-center container justify-between mx-auto px-10 py-5 mb-8 mt-10 gap-7 '>
                        
                        <div className='md:float-left block relative cursor-pointer'>
                            <Link to='/'>
                                <img src={logo} alt='' width={200} />
                            </Link>
                        </div>

                        <div className='flex flex-col md:flex-row sm:items-center gap-4 relative ml-6'>
                            <div className='flex flex-col relative '>
                                <div className='mb-2'>Pooja Location</div>
                                <select className='rounded-lg focus:outline-none' name='' id=''>
                                    <option value='1'>Select</option>
                                    <option value='2'>Cuttack</option>
                                    <option value='3'>Bhubaneswar</option>
                                    <option value='4'>Sambalpur</option>
                                    <option value='5'>Burla</option>
                                </select>
                            </div>

                            <div className='flex flex-col relative'>
                                <div className='mb-2'>My Pandit Preference</div>
                                <select className='rounded-lg' name='' id=''>
                                    <option value='1'>Select</option>
                                    <option value='2'>Odia</option>
                                    <option value='3'>Hindi</option>
                                    <option value='4'>Marathi</option>
                                    <option value='5'>Gujrati</option>
                                </select>
                            </div>
                            
                            <div className="relative ml-6">
                                <Link to='/services'>
                                    <button className='font-sans font-semibold shadow-lg hover:opacity-75 bg-black text-white bg-blend-multiply box-border py-2 px-4 rounded-md cursor-pointer'>
                                        View All Services
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="relative gap-2 ml-6">
                            <input class="block w-full py-2 pr-10 pl-4 mrleading-tight rounded-lg border border-gray-300 bg-white focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search..." />
                            <button class="absolute top-0 right-0 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg">
                                Search
                            </button>
                        </div>

                        <div className='flex flex-row justify-end gap-5 ml-10'>
                            <button className='hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border py-2 px-4 pb-3 rounded-md relative'>
                                Login
                            </button>
                            <button className='hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border py-2 px-4 rounded-md relative'>
                                Register
                            </button>
                        </div>

                    </div>
                </div>
 
                <div className='flex flex-col md:flex-row justify-between mx-auto px-10 mb-8 mt-10 gap-9 '>
                    {/* Sidebar */}
                    <div className='w-64 bg-gray-100 rounded-lg opacity-75 border-4 border-black'>
                        <ul class="py-4 cursor-pointer">
                            <li class="px-8 py-2 text-black font-bold">Services</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Ceremonies</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Homam</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Pariharam</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Ancestor-rituals</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Festival poojas</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Donations</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Namkaran</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Music for pooja</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Japams</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Astrology</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Wedding</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-yellow-800 duration-500">Special Occasion</li>
                        </ul>
                    </div>

                    {/* Poojas to perform */}
                    <div className='flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7 '>
                    {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"></div> */}
                        <p class="text-lg font-medium text-gray-800 font-sans">
                            Poojas to perform
                        </p> 

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Ganapathi_Pooja})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Ganapathi Pooja</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Lakshmi_Pooja})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Lakshmi Pooja</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Punyahavachanam})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Punyahavachanam</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${marriage})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Marriage</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Pandakkal})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Pandakkal</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Annaprasana})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Annaprasana</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Naamkaran})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Naamkaran</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Aksarabhyasam})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Aksarabhyasam</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Seemantham})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Seemantham</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${VastuShaanti})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">VastuShaanti</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Fix_Muhurath})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Fix Muhurath</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Sashtiapthapoorthi})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Sashtiapthapoorthi</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Upanayanam})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Upanayanam</h2>
                            </div>
                        </div>
                        
                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${KarnaVedha})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">KarnaVedha</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Bhima_Ratha_Shanthi})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Bhima Ratha Shanthi</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${GrihaPravesham})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Griha Pravesham</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Saraswati})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Saraswati Pooja</h2>
                            </div>
                        </div>

                    </div> 
                    <button class="block md:hidden fixed bottom-0 right-0 m-4 bg-gray-500 text-white p-2 rounded" id="toggle-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 010 2H3a1 1 0 01-1-1zM1 10a1 1 0 011-1h14a1 1 0 110 2H2a1 1 0 01-1-1zM3 15a1 1 0 100 2h14a1 1 0 100-2H3z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>    

            </div>
        </div>
    )
}
export default Services