import React from 'react';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';
import line from '../assets/line.png';
import pngs from '../assets/pngs.png';
import star from '../assets/star.png';
import pandit1 from '../assets/pandit1.jpg';
import pandit2 from '../assets/pandit2.jpeg';
import pandit3 from '../assets/pandit3.jpeg';
import pandit4 from '../assets/pandit4.jpeg';
import whitearrow from '../assets/whitearrow.png';
import mail from '../assets/mail.png';
import message from '../assets/message.png';
import web from '../assets/web.png';
import contact from '../assets/contact.png';

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionY: -90,
        height: 2140,
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
          <button className='font-serif font-bold shadow-lg hover:opacity-75 bg-black text-white  bg-blend-multiply box-border h-9 w-52 rounded-md'>
            View All Services
          </button>
        </div>
      </div>
      <div className='max-w-screen-xl pl-60 mt-28'>
        <img src={pngs} alt='' />
      </div>

      <div>
        <h1 className='mt-20 font-serif font-bold text-xl text-amber-950'>
          Customer Reviews
        </h1>

        <div className='grid grid-cols-4 mt-10'>
          <div class='ml-10 w-80 h-76  block rounded-lg border-2 border-neutral-300'>
            <div class='p-6'>
              <h5 class='mb-2 text-md font-serif leading-tight dark:text-neutral-500'>
                Beyond my expectations. Their Vedic chanting and performing the
                rituals left my guests including french guests spellbound.Thanks
                a ton🙏
              </h5>
              <p class='mb-4 text-base font-bold text-neutral-700'>
                Rakesh Swain
              </p>
              <div class=' border-t-2 pl-14'>
                <h1 className='mr-10 mt-3  dark:text-neutral-500'>
                  Pooja performed by,
                </h1>
                <div className=''>
                  <img
                    src={pandit1}
                    alt=''
                    width={100}
                    className='pl-10 mt-1'
                  />
                </div>
                <h1 className='pr-14 font-bold dark:text-gray-500'>
                  Avinash Yogi
                </h1>
                <div className='grid grid-cols-5 mt-0 w-28 ml-3'>
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
              </div>
            </div>
          </div>

          <div class='ml-10 w-80 h-76  block rounded-lg border-2 border-neutral-300'>
            <div class='p-6 '>
              <h5 class='mb-2 text-md font-serif leading-tight dark:text-neutral-500'>
                I contacted for my gruhapravesam pooja, Pandit's were reached
                home on time as they committed even though it was early morning
                2:30 am, and all gruhapravesam package programs...
              </h5>
              <p class='mb-4 text-base font-bold text-neutral-700'>
                Ambika Bhoi
              </p>
              <div class=' border-t-2 px-6 py-2  pl-14'>
                <h1 className='mr-10 dark:text-neutral-500'>
                  Pooja performed by,
                </h1>
                <div className=''>
                  <img
                    src={pandit2}
                    alt=''
                    width={100}
                    className='pl-10 mt-1'
                  />
                </div>
                <h1 className='pr-14 font-bold dark:text-gray-500'>
                  Trilochan Biswal
                </h1>
                <div className='grid grid-cols-5 mt-0 w-28 ml-3'>
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
              </div>
            </div>
          </div>

          <div class='ml-10 w-80 h-76 block rounded-lg border-2 border-neutral-300'>
            <div class='p-6'>
              <h5 class='mb-2 text-md font-serif leading-tight dark:text-neutral-500'>
                A true professional and a dedicated person..Pandit Prabeen Nayak
                ji... his commitment to the puja was very evident right from the
                beginning when he took sufficient time to...
              </h5>
              <p class='mb-4 text-base text-neutral-700 font-bold'>
                Debananda Panda
              </p>
              <div class=' border-t-2 px-6 py-2  pl-14'>
                <h1 className='mr-10 dark:text-neutral-500'>
                  Pooja performed by,
                </h1>
                <div className=''>
                  <img
                    src={pandit3}
                    alt=''
                    width={100}
                    className='pl-10 mt-1'
                  />
                </div>
                <h1 className='pr-14 font-bold dark:text-gray-500'>
                  Prabeen Nayak
                </h1>
                <div className='grid grid-cols-5 mt-0 w-28 ml-3'>
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
              </div>
            </div>
          </div>

          <div class='ml-10 w-80 h-76  block rounded-lg border-2 border-neutral-300'>
            <div class='p-6'>
              <h5 class='mb-2 text-md font-serif leading-tight dark:text-neutral-500'>
                Lavesh Mishra ji was extremely good natured, humble and soft
                spoken. He meticulously performed the entire Puja along with a
                short kathan...
              </h5>
              <p class='mb-4 text-base text-neutral-700 font-bold'>
                Anita Mohanty
              </p>
              <div class=' border-t-2 px-6 py-2  pl-14'>
                <h1 className='mr-10 dark:text-neutral-500'>
                  Pooja performed by,
                </h1>
                <div className=''>
                  <img
                    src={pandit4}
                    alt=''
                    width={100}
                    className='pl-10 mt-1'
                  />
                </div>
                <h1 className='pr-14  font-bold dark:text-gray-500'>
                  Lavesh Mishra
                </h1>
                <div className='grid grid-cols-5 mt-0 w-28 ml-3'>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 font-serif font-bold text-xl text-amber-950'>
        Book A Pandit For Pooja
      </div>
      <div>
        <p className='text-center ml-40 mr-40 font-serif text-neutral-700 mt-3'>
          BookYourPandit Pooja Services is India’s Largest Online Pooja Booking
          Portal. All our Purohits are trained in Certified Vedic Pathashalas
          and they perform pooja professionally. BookYourPandit provides best in
          class pooja services in metro cities of India such as Cuttack,
          Bhubaneswar, Sambalpur, Burla, khorda, Koraput, Balasore, Bargarh,
          Balangir, Titlagarh etc. while catering to various languages like
          Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Oriya, Malayalam,
          etc.
        </p>
        <p className='text-center ml-40 mr-40 font-serif text-neutral-700 mt-5'>
          Book Your Pandit for Pooja online including all the pooja Materials
          for the best price. You can book pandit for Havans, Homams, Japas,
          Kathas, path, Marriages, Engagement, Ceremonies, pitru dosha pooja,
          Srardhas and Temple Services etc.
        </p>
      </div>

      <div className=' mt-24 h-72 bg-red-700'>
        <div className='grid grid-cols-4 pt-10 text-white font-sans gap-2'>
          <h1>Contact Info</h1>
          <h1>Main Links</h1>
          <h1>Policy Info</h1>
          <h1>Sponsors</h1>
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
          <h1>Cuttack</h1>
          <h1>Bhubaneswar</h1>
          <h1>Sambalpur</h1>
          <h1>Burla</h1>
          <h1>Bargarh</h1>
          <h1>Balangir</h1>
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
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>Hindi Pandits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Telugu Purohits in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Kannada Pujari in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Marathi Guruji in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Malayalam Pandit in Bangalore</h1>
            <h1 className='dark:text-gray-300 font-thin'>Odiya Purohits in Bangalore</h1>
          </div>
        </div>
        <h1 className='mt-24 text-white font-semibold text-xs'>BookYourPandit.com © 2023. All Rights Reserved.</h1>
      </div>
    </div>
  );
}

export default Home;
