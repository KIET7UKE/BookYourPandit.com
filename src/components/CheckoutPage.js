import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import bg from '../assets/bg.jpg';
import leftarrow from '../assets/leftarrow.png';
import greenarrow from '../assets/greenarrow.png';
import whitearrow from '../assets/whitearrow.png';
import mail from '../assets/mail.png';
import message from '../assets/message.png';
import web from '../assets/web.png';
import contact from '../assets/contact.png';

function CheckoutPage() {

    const [color, setColor] = useState(false)

    const handleCLick = () => {
        setColor(!color)
    }

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionY: -90,
        height: 1040,
        width: 1520,
      }}>
      <Navbar />

      <div className='flex flex-row justify-center gap-4 mt-[7rem]'>
        <div className='flex flex-col '>
          <div className='flex flex-row'>
            <Link to='/products'>
            <button className='bg-red-600 hover:bg-green-600 flex flex-row rounded-md px-3 h-6 text-md'>
              <img src={leftarrow} alt='' className='w-3 h-3 mt-1.5 mr-2' />
              <div>Back</div>
            </button>
            </Link>
            <div className='ml-[13rem] mb-2 font-semibold text-xl text-white'>
              Select Your Package
            </div>
          </div>
          <div className='flex flex-row bg-white rounded-md w-[50rem] h-[21rem] border-4 border-yellow-950'>
            <div className='flex flex-row divide-x mr-[10rem] divide-amber-950 divide-x-2'>
              <div className='flex flex-col'>
                <div className='ml-4 mt-2 font-semibold'>
                  Standard : (1 Purohit+ All Pooja Materials)
                </div>
                <div className='ml-4 mt-2'>
                  In Standard package Single Purohit will be there and the
                  annaprasana ceremony is performed with cooked white rice and
                  the baby is fed with the rice & paysam after the puja for the
                  well being of the baby & this pooja goes on for 45 mins-1hr.
                </div>
                <div className='ml-4 mt-2 mb-2'>
                  <h1 className='font-semibold'>Procedures Involved :</h1>
                  <ul className='list-disc ml-4'>
                    <li>Ganapathi Pooja</li>
                    <li>Punyaha Vachanam, Maha Sankalpam</li>
                    <li>Kalasha Pooja</li>
                    <li> Annaprasanam Pooja (Annam ootudhal to baby)</li>
                    <li>Prasad Distribution</li>
                  </ul>
                </div>
                <button className='flex flex-row justify-end mr-7 bg-red-600 hover:bg-green-600 rounded-md  ml-[27rem] w-[7rem] pr-3 font-bold text-white'>
                  + Read More
                </button>
              </div>

              <div className='flex flex-col text-md gap-3'>
                <div className='ml-4 mt-3 font-bold'>Inclusions</div>
                <div className='flex flex-row ml-3'>
                  <img src={greenarrow} alt='' className='h-5 w-5' />
                  <div>Dakshina</div>
                </div>
                <div className='flex flex-row ml-3'>
                  <img src={greenarrow} alt='' className='h-5 w-5' />
                  <div>All pooja Materials</div>
                </div>
                <div className='flex flex-row ml-3'>
                  <img src={greenarrow} alt='' className='h-5 w-5' />
                  <div>Flowers/Fruits</div>
                </div>

                <div className='flex flex-row ml-5 mt-1'>
                  <div className='flex flex-col'>
                    <div className='font-bold'>Rs 2,600.00</div>
                    <button className='flex justify-center rounded-md text-white font-semibold' onClick={handleCLick} style={{backgroundColor: color ? "green" : "red"}}>Select</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col mt-1'>
          <div className='flex flex-row'>
            <div className='ml-[6.5rem] font-semibold text-xl text-white'>
              Order Summary
            </div>
          </div>
          <div className='flex flex-row bg-white rounded-md w-[23rem] h-[10rem] mt-1 border-4 border-yellow-950'>
            <div className='flex flex-col ml-3 mt-2 gap-3'>
              <div className='flex flex-row'>
                <div className=''>City</div>
                <div className='ml-[8rem] font-bold font-sans'>Cuttack</div>
              </div>
              <div className='flex flex-row'>
                <div>Pandit Preference</div>
                <div className='ml-[2rem] font-bold font-sans'>Odia</div>
              </div>
              <div className='flex flex-row'>
                <div>Pooja Location</div>
                <div className='ml-[3.3rem] font-bold font-sans'>
                  At my home
                </div>
              </div>
              <div className='flex flex-row'>
                <div>Pooja Home</div>
                <div className='ml-[4.3rem] font-bold font-sans'>
                  Ganapathi Pooja
                </div>
              </div>
            </div>
          </div>

            <div>
                <Link to='/requirement'>
          <button className='flex flex-row bg-zinc-400 text-white hover:bg-green-600 font-semibold justify-center rounded-md w-[23rem] h-[3rem] mt-1'>
            <div className='mt-2'>Proceed to check date availability</div>
          </button>
                </Link>
            </div>
        </div>
      </div>
      <div className='mt-24 h-72 bg-yellow-600'>
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
      <div className='h-[22rem] bg-yellow-950'>
        <div className='grid grid-cols-6 pt-10 text-white font-sans ml-4'>
          <h1 className='ml-14'>Cuttack</h1>
          <h1 className='ml-10'>Bhubaneswar</h1>
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
        <div className='mb-3'>
        <h1 className='mt-24 text-white font-semibold text-xs flex flex-row justify-center'>BookYourPandit.com © 2023. All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
