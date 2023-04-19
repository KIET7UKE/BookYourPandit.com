
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

import optimus from '../assets/optimus.png';
import pooja_1 from '../assets/pooja_1.png'
import pooja_2 from '../assets/pooja_2.png'
import pooja_3 from '../assets/pooja_3.png'
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
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex flex-col'>

                {/* Navbar */} 
                <div className='flex flex-row items-center container mx-auto px-10 py-5 mb-8 mt-10 gap-7 bg-gray-500 opacity-50'>
                    <div className='md:float-left block'>
                        <Link href='/'>
                            <span className='cursor-pointer font-bold text-4xl text-white'>
                                <img src={logo} alt='' width={200} />
                            </span>
                        </Link>
                    </div>
                    To perform Pooja in Sambalpur
                    <div className='flex flex-row items-center gap-4'>
                        <div className='flex flex-col'>
                            My Pandit Preference
                            <select className='' name='' id=''>
                                <option value='1'>Select</option>
                                <option value='2'>Odia</option>
                                <option value='3'>Hindi</option>
                                <option value='4'>Marathi</option>
                                <option value='5'>Gujrati</option>
                            </select>
                        </div>
                        <div>
                            <Link to='/services'>
                                <button className='font-serif font-bold shadow-lg hover:opacity-75 bg-black text-white  bg-blend-multiply box-border h-9 w-52 rounded-md'>
                                    View All Services
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div class="relative gap-2">
                        <input class="block w-full py-2 pr-10 pl-4 mrleading-tight rounded-lg border border-gray-300 bg-white focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search..." />
                        <button class="absolute top-0 right-0 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg">
                            Search
                        </button>
                    </div>
                    <div className='flex flex-row justify-end gap-5 mt-3 ml-10'>
                        <button className='pr-7 hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border h-7 w-20 pl-5 pb-3 rounded-md'>
                            Login
                        </button>
                        <button className='pr-10  hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border h-7 w-20 pr-2 pb-2 rounded-md'>
                            Register
                        </button>
                    </div>
                </div>
                
                <div className='flex flex-row justify-between mx-auto px-10 mb-8 mt-10 gap-9 '>
                    {/* Sidebar */}
                    <div className='w-64 bg-gray-100'>
                        <ul class="py-4">
                            <li class="px-8 py-2 text-black font-bold">Services</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Ceremonies</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Homam</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Pariharam</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Ancestor-rituals</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Festival poojas</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Donations</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Namkaran</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Music for pooja</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Japams</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Astrology</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Wedding</li>
                            <li class="px-8 py-2 text-gray-600 hover:text-white hover:bg-gray-800">Special Occasion</li>
                        </ul>
                    </div>

                    {/* <div className='flex-1'>
                        Pooja to perform
                    </div> */}
                    
                    {/* <div class="bg-gray-200 h-64 w-64 flex items-center justify-center bg-cover bg-center" style="background-image: url('your-image-url-here')">

                    </div> */}
                    <div className='flex-1 grid grid-cols-7 gap-7 '>
                        <h1>Pooja to perform</h1>  

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${pooja_1})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Pooja_1</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${pooja_2})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Pooja_2</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${pooja_3})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Pooja_3</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${marriage})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Marriage</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Pandakkal})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Pandakkal</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Annaprasana})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Annaprasana</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Naamkaran})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Naamkaran</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Aksarabhyasam})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Aksarabhyasam</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Seemantham})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Seemantham</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${VastuShaanti})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">VastuShaanti</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Fix_Muhurath})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Fix Muhurath</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Sashtiapthapoorthi})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Sashtiapthapoorthi</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Upanayanam})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Upanayanam</h2>
                            </div>
                        </div>
                        
                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${KarnaVedha})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">KarnaVedha</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Bhima_Ratha_Shanthi})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Bhima Ratha Shanthi</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${GrihaPravesham})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Griha Pravesham</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Saraswati})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Saraswati Pooja</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Ganapathi_Pooja})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Ganapathi Pooja</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Lakshmi_Pooja})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Lakshmi Pooja</h2>
                            </div>
                        </div>

                        <div className="h-40 w-40 object-cover relative rounded-lg overflow-hidden" style={{ backgroundImage: `url(${Punyahavachanam})`, backgroundSize: 'cover' }}>
                            <div className="absolute inset-0 bg-black opacity-0 transition duration-300 hover:opacity-30"></div>
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full">
                                <h2 className="text-white font-bold text-sm">Punyahavachanam</h2>
                            </div>
                        </div>
                        {/* <div className="bg-gray-500 h-16" style={{ backgroundImage: `url(${optimus})`, backgroundSize: 'cover' }}></div>
                        <div className="bg-gray-600 h-16" style={{ backgroundImage: `url(${optimus})`, backgroundSize: 'cover' }}></div>
                        <div className="bg-gray-700 h-16" style={{ backgroundImage: `url(${optimus})`, backgroundSize: 'cover' }}></div> */}
                    </div> 
                </div>   
            </div>
        </div>
    )
}
export default Services