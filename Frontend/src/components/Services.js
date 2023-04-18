
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Services = () => {
    return (
        <div
            style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: -90,
            height: 2140,
            width: 1520,
        }}>
            <div>
                // Navbar
                <div className='flex flex-row container mx-auto px-10 mb-8 mt-10 gap-4'>
                    <div className='md:float-left block'>
                        <Link href='/'>
                            <span className='cursor-pointer font-bold text-4xl text-white'>
                                <img src={logo} alt='' width={200} />
                            </span>
                        </Link>
                    </div>
                    To perform Pooja in Sambalpur
                    
                    <div className='flex flex-row'>
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
                
                {/* <div>
                    <div>Sidebar</div>
                    <div>Pooja to perform</div>
                </div> */}
            </div>
        </div>
    )
}
export default Services