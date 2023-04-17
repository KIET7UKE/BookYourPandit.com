import React from 'react';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';
import line from '../assets/line.png';
import pngs from '../assets/pngs.png'

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionY: -90,
        height: 3000,
        width: 1520,
      }}>
      <div className='flex flex-row pl-7 pt-5 justify-between'>
        <img src={logo} alt='' width={200} />
        <div className='flex flex-row justify-end mr-10 pr-10 gap-5 mt-3'>
          <button className='pr-7 hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border h-7 w-20 pl-5 pb-3 rounded-md'>
            Login
          </button>
          <button className='pr-10  hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border h-7 w-20 pr-2 pb-2 rounded-md'>
            Register
          </button>
        </div>
      </div>
      <div className='flex flex-col place-items-center pt-48'>
        <p1 className='text-2xl font-sans'>
          Perform your pooja with the best group of
        </p1>
        <p2 className='text-3xl font-sans font-bold'>
          PROFESSIONAL PUROHITS AND PANDITS
        </p2>
        <img src={line} alt='' width={750} />
      </div>

      {/* <div className='grid justify-items-center pt-5 mr-78 ml-14'>
        <div className='grid grid-cols-3 mr-20'>
          <h1 className='flex justify-end mr-36 font-serif font-bold'>
            To Perform Pooja in
          </h1>
        </div>
        <div className=''>
          <h2 className='flex justify-start px-24 mr-24 font-serif font-bold'>
            My Pandit Preference
          </h2>
      </div> */}

      {/* ----- text ends here ----- */}

      <div>
        <h1 className='grid grid-cols-3 ml-56 font-serif font-bold'>
          To Perform Pooja in
          <h2 className='flex justify-start font-serif font-bold'>
            My Pandit Preference
          </h2>
        </h1>
      </div>
      <div className='grid grid-cols-5 gap-10 ml-12'>
        <select className='col-start-2' name='' id=''>
          <option value='1'>Select</option>
          <option value='2'>Cuttack</option>
          <option value='3'>Bhubneswar</option>
          <option value='4'>Sambalpur</option>
          <option value='5'>Burla</option>
        </select>
        <select className='' name='' id=''>
          <option value='1'>Select</option>
          <option value='2'>Odia</option>
          <option value='3'>Hindi</option>
          <option value='4'>Marathi</option>
          <option value='5'>Gujrati</option>
        </select>
        <div>
          <button className='font-serif font-bold shadow-lg hover:opacity-75 bg-black text-white  bg-blend-multiply box-border h-9 w-52 rounded-md'>View All Services</button>
        </div>
      </div>
      <div className='max-w-screen-xl pl-60 mt-28'>
        <img src={pngs} alt="" />
      </div>

      <div>
        <h1 className='mt-20 font-serif'>
          Customer Reviews
        </h1>
      </div>
    </div>
  );
}

export default Home;
