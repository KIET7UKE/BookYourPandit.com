
import React from 'react'
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
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
import Footer from './Footer';
import mail from '../assets/mail.png';
import message from '../assets/message.png';
import web from '../assets/web.png';
import contact from '../assets/contact.png';
import whitearrow from '../assets/whitearrow.png';

const Services = () => {

    return (       
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex flex-col'>

                {/* Navbar */}
                <Navbar/>

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

                        <div>
                            <Link to='/products'>
                        <button className="h-40 w-40 object-cover relative rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-110 transition-all duration-700 ease-in-out" style={{ backgroundImage: `url(${Ganapathi_Pooja})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Ganapathi Pooja</h2>
                            </div>
                        </button>
                            </Link>
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
             
            <div className=' mt-24 h-72 bg-red-700'>
        <div className='grid grid-cols-4 pt-10 text-white font-sans gap-2'>
          <h1 className='ml-[9rem]'>Contact Info</h1>
          <h1 className='ml-[9rem]'>Main Links</h1>
          <h1 className='ml-[9rem]'>Policy Info</h1>
          <h1 className='ml-[9rem]'>Sponsors</h1>
          <div className='grid gap-2 text-sm text-justify justify-end mr-8'>
            <h1 className='grid grid-flow-col gap-2'>
              <img src={mail} alt='' width={25} /> info@bookyourpandit.com
            </h1>
            <h1 className='grid grid-flow-col gap-2'>
              <img src={web} alt='' width={25} />
              www.bookyourpandit.com
            </h1>
            <h1 className='grid grid-flow-col gap-2 mr-12'>
              <img src={message} alt='' width={25} />
              Send Your Enquiry
            </h1>
            <h1 className='grid grid-flow-col gap-2 mr-24'>
              <img src={contact} alt='' width={25} />
              Contact Us
            </h1>
          </div>
          <div className='grid gap-2 text-sm text-justify ml-36'>
            <button className='grid grid-flow-col mr-28'>
              <img src={whitearrow} alt='' width={15} /> Pooja Services
            </button>
            <button className='grid grid-flow-col mr-28'>
              <img src={whitearrow} alt='' width={15} />
              Login / Register
            </button>
            <button className='grid grid-flow-col mr-40'>
              <img src={whitearrow} alt='' width={15} />
              Sitemap
            </button>
            <button className='grid grid-flow-col mr-28'>
              <img src={whitearrow} alt='' width={15} />
              Hindu Wedding Planners
            </button>
          </div>
          <div className='grid gap-2 text-sm text-justify ml-36'>
            <button className='grid grid-flow-col mr-32'>
              <img src={whitearrow} alt='' width={15} />
              how we work
            </button>
            <button className='grid grid-flow-col mr-32'>
              <img src={whitearrow} alt='' width={15} />
              Privacy Policy
            </button>
            <button className='grid grid-flow-col mr-32'>
              <img src={whitearrow} alt='' width={15} />
              Terms of use
            </button>
            <button className='grid grid-flow-col mr-44'>
              <img src={whitearrow} alt='' width={15} />
              FAQ
            </button>
            <button className='grid grid-flow-col mr-28'>
              <img src={whitearrow} alt='' width={15} />
              Cancellation & Refund Policy
            </button>
          </div>
        </div>
      </div>
      <div className='h-80 bg-red-950'>
        <div className='grid grid-cols-6 pt-5 text-white font-sans'>
          <h1 className='ml-14'>Cuttack</h1>
          <h1 className='ml-14'>Bhubaneswar</h1>
          <h1 className='ml-14'>Sambalpur</h1>
          <h1 className='ml-14'>Burla</h1>
          <h1 className='ml-14'>Bargarh</h1>
          <h1 className='ml-14'>Balangir</h1>
          <div className='mt-3 ml-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
        </div>
        <h1 className='mt-24 text-white font-semibold text-xs flex flex-row justify-center'>BookYourPandit.com © 2023. All Rights Reserved.</h1>
      </div>
        </div>
    )
}
export default Services