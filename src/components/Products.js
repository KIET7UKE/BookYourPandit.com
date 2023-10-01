import React from 'react';
import Navbar from './Navbar';
import Ganapathi_Pooja from '../assets/Ganapathi_Pooja.png';
import star from '../assets/star.png';
import Footer from './Footer';
import whitearrow from '../assets/whitearrow.png';
import mail from '../assets/mail.png';
import message from '../assets/message.png';
import web from '../assets/web.png';
import contact from '../assets/contact.png';
import bg from '../assets/bg.jpg'
import { Link } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

function Products() {
  return (
    <div
    className="bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}
      >
      <Navbar />

      <div className='container h-[28rem]'>
        <div className='ml-20 py-16 flex flex-row justify-evenly'>
          <img src={Ganapathi_Pooja} alt='' className='w-[25rem] h-[22rem]'/>
          <div className='flex flex-col'>
            <div className='flex justify-center mr-[23rem] flex-row'>
              <h1 className='flex ml-[5.5rem] text-white font-bold text-xl'>
                Ganpathi Pooja
              </h1>
              <div className='grid grid-cols-5 mt-0 w-28 mr-2 ml-2'>
                <p>
                  <img src={star} alt='' width={30} />
                </p>
                <p>
                  <img src={star} alt='' width={30} />
                </p>
                <p>
                  <img src={star} alt='' width={30} />
                </p>
                <p>
                  <img src={star} alt='' width={30} />
                </p>
                <p>
                  <img src={star} alt='' width={30} />
                </p>
              </div>
              <h1 className=' text-green-300 text-xs'>(10 Customer Reviews)</h1>
            </div>
            <h1 className='flex justify-center gap-1 mb-3 mr-[34rem] text-white '>
              <span className='font-semibold text-white'>Price:</span>Rs
              2,100.00
            </h1>
            <div className='flex flex-col w-[48rem] ml-44 bg-white border-2 rounded-lg divide-y-2 divide-y divide-zinc-800'>
              <div className='mr-3 ml-3 mt-1 mb-2'>
                <p>
                  Ganapathi Pooja is performed for Lord Ganapathi who removes
                  all the obstacles and negative energies. This pooja bestows
                  one with victory, brings harmony in the family, and helps to
                  succeed in life.
                </p>
              </div>
              <div className='grid grid-cols-2 divide-x divide-zinc-800 divide-x-2 mb-1'>
                <div className='ml-4 mt-2'>
                    <h1 className='font-bold'>Key Insights:</h1>
                  <ul className='list-disc ml-3'>
                    <li>To retain health, wealth, and prosperity.</li>
                    <li>
                      Ganapathi is worshiped before doing any Auspicious
                      activity.
                    </li>
                    <li>Deity Worshiped: Lord Ganesh.</li>
                    <li>
                      Ashta Dhravya, Durva/Doob grass are the key ingredients
                      used.
                    </li>
                  </ul>
                </div>
                <div className='ml-4 mt-2 mb-2'>
                  <ul className='list-disc ml-8'>
                    <h1 className='font-bold'>Our Promise :</h1>
                    <li>Vedic Patashala certified and experienced priests.</li>
                    <li>All rituals follow Vedic Standards and Procedures</li>
                    <li>
                      High-quality Samagri(items) to ensure a pleasant Pooja
                      experience.
                    </li>
                    <li>Guaranteed Punctuality and Authenticity.</li>
                    <li>Professional Guidance & Support.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='flex flex-row justify-between'>
              <div className='flex ml-[11rem] bg-white rounded-md mt-5 py-1 font-semibold px-4'>
                Pooja will be performed in Cuttack
              </div>
              <div className='ml-[18rem] text-white mt-5'>Location:</div>
              <div className='flex mr-[6rem] bg-white rounded-md mt-5 ml-2 px-2 py-1 font-semibold'>
                At My Home
              </div>
            </div>
            <div>
              <Link to='/checkoutpage'>
            <button className='flex flex-row ml-[44rem] mt-5 px-3'>
              <div className='mr-20 bg-[#089e45] text-white font-semibold rounded-md text-md px-2 py-2 w-[14rem]'>
                View Pricing and Packages
              </div>
            </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white text-center ml-[15rem] py-0 grid grid-cols-3 w-[60rem] h-[3rem] divide-x mt-40'>
        <div className='border-b-4 border-red-800'>Description</div>
        <div className=''>Reviews(3)</div>
        <div>FAQ</div>
      </div>

      <div className='bg-white flex flex-col container mt-6 h-[30rem] w-[60rem] ml-[15rem]'>
        <div className='ml-3 mt-3'>
          Lord Ganesha, the son of Lord Shiva and Goddess Parvathi, is one of
          the most cherished Gods. Ganapathi pooja is usually conducted before
          any other homam and poojas to avoid and overcome any obstacles during
          the prayers.{' '}
        </div>
        <div className='pl-3 pr-3 mt-2'>
          When a person starts to do any auspicious events like new business,
          investments, housewarming, getting married, to reduce the malefic
          effects of Ketu or on their respective birthdays, Ganapathi pooja is
          suggested.
        </div>
        <div className='pl-3 pr-3 mt-2'>
          The process of Ganapathi Pooja is by invoking Lord Ganapathi followed
          by the chanting of Ganapathi Mantra and then performing the Ganapathi
          pooja to receive blessings.
        </div>
        <div className='pl-3 pr-3 mt-2'>
          <h1 className='text-md font-bold text-red-800'>
            When To Perform Ganapathi Pooja?
          </h1>
          <ul className='list-disc ml-5'>
            <li>
              Pooja can be done during the Brahma Muhurta (4:30 am – 6:00 am).
              It can also be done at other auspicious times.
            </li>
            <li>
              Schedule the pooja date as per the Janma Nakshatra of a person and
              considering the Yoga, and Thithi of that particular date.
            </li>
          </ul>
        </div>

        <div className='pl-3 pr-3 mt-2'>
          <h1 className='text-md font-bold text-red-800'>
            Benefits Of Ganapathi Pooja:
          </h1>
          <ul className='list-disc ml-5'>
            <li>This pooja bestows one with intelligence and wisdom.</li>
            <li>
              Removes and helps to overcome obstacles and hurdles one may face
              in life.
            </li>
            <li>
              Ensures to get good fortune, harmony, and prosperity in one’s
              family.
            </li>
          </ul>
        </div>
        <div className='pl-3 pr-3 mt-2'>
          Book Vadhyar for Ganapathi Pooja & Homam. Vadhyar will bring all the
          Pooja Samagri(items). All the vadhyars are well experienced and
          studied from Vedic Patasala.
        </div>
        <div className='pl-3 pr-3 mt-2 text-bold'>
          Note: To View The Cost Of Ganapathi Pooja, Kindly Click On The “View
          Pricing And Packages” Button.
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

export default Products;
