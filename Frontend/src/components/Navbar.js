import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className="relative">
                    <div className='absolute z-5 bg-white opacity-25 flex flex-row items-center container mx-auto px-10 py-14 mt-10 gap-7 '></div>
                    <div className='z-10 flex flex-row items-center container mx-auto px-10 py-5 mb-8 gap-8'>
                        <div className=''>
                            <Link href='/'>
                                <span className='font-bold text-4xl text-white relative'>
                                    <img src={logo} alt='' width={200} className='mt-10'/>
                                </span>
                            </Link>
                        </div>
                        <div className='flex flex-col md:flex-row sm:items-center gap-4 relative ml-6 mt-8'>
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
                        <div className="relative gap-2 mt-12">
                            <input class="block w-full py-2 pr-10 pl-4 mrleading-tight rounded-lg border border-gray-300 bg-white focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search..." />
                            <button class="absolute top-0 right-0 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg">
                                Search
                            </button>
                        </div>
                        <div className='flex flex-row justify-end gap-5 mt-10 ml-28'>
                            <button className='hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border h-7 w-20 pr-7 pl-5 pb-3 rounded-md relative'>
                                Login
                            </button>
                            <button className='hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border h-7 w-20 pb-2 rounded-md relative'>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
  )
}

export default Navbar
