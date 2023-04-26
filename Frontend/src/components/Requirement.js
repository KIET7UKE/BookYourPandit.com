
import React, { useRef, useState } from 'react';
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

import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// const key = 'pk_test_51MHZ0CSJeOoq1oiAlJKPkFYdhcaAjJ3obmqDBbV74euxoejBkIsh7yRNNpS0eehDQIxLm2ElwON8v6eA6BXTjo0M00zyAaCvIn'

const MySwal = withReactContent(Swal)

function Requirement() {

  const key = 'pk_test_51MHZ0CSJeOoq1oiAlJKPkFYdhcaAjJ3obmqDBbV74euxoejBkIsh7yRNNpS0eehDQIxLm2ElwON8v6eA6BXTjo0M00zyAaCvIn'

  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const [ product, setProduct ] = useState({
    name: 'Ganapathi',
    price: 3000,
  })

  const priceForStripe = product.price * 100

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    })
  }

  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    })
  }

  const payNow = async token => {
    try {
      const response = await axios ({
        url:'http://localhost:/5000/payment',
        method:'post',
        data: {
          amount: product.price * 100,
          token,
        }
      })
      if (response.status === 200) {
          handleSuccess()
          console.log('Your payment was successful')
      } else {
          handleFailure()
      }
    }
    catch (error) {
        console.log(error)
    }
  }

  const handleChange = (e) => {
    setDate(e.target.value);
  };

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

      {/* First Component */}
      <div className='flex flex-row justify-center gap-4 mt-[7rem]'>
        <div className='flex flex-col '>
          <div className='flex flex-row'>
            <Link to='/checkoutpage'>
            <button className='bg-red-600 hover:bg-green-600 flex flex-row rounded-md px-3 h-6 text-md'>
              <img src={leftarrow} alt='' className='w-3 h-3 mt-1.5 mr-2' />
              <div>Back</div>
            </button>
            </Link>
            <div className='ml-[13rem] mb-2 font-semibold text-xl text-white'>
              Your Requirements
            </div>
          </div>
          <div className='flex flex-row bg-white rounded-md w-[50rem] h-[10rem] border-4 border-yellow-950'>
            <div className='flex flex-row divide-x mr-[10rem] divide-amber-950 divide-x-2'>
              <div className='flex flex-col'>
                <div className='ml-3'>
                <input type="radio"/>  Select date for pooja
                  <input
                  className='ml-3 mt-3 rounded-md'
                    type='date'
                    onChange={handleChange}
                    ref={dateInputRef}
                    placeholder={date}
                  />
                  <button className='bg-red-700 hover:bg-green-600 text-white ml-3 w-[9rem] rounded-md' onClick={handleCLick} style={{backgroundColor: color ? "green" : "red"}}>Check Availability</button>
                </div>
                <div className='ml-3'>
                  Time Preference
                  <input
                  className='ml-3 mt-3 rounded-md'
                    type='text'
                  /> (optional)
                </div>
                <div className='ml-3 mt-3'><input type="radio"/>  I Need BookYourPandit To fix my Date and Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Component */}
        <div className='flex flex-col mt-1'>
          <div className='flex flex-row'>
            <div className='ml-[6.5rem] font-semibold text-xl text-white'>
              Order Summary
            </div>
          </div>
          <div className='flex flex-row bg-white rounded-md w-[25rem] h-[21rem] mt-1 border-4 border-yellow-950'>
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
              <div className='flex flex-row'>
                <div>Package Name</div>
                <div className='ml-[4.8rem] font-bold font-sans'>
                Economy : ( 1 Priest + Pooja Samagries )
                </div>
              </div>
              <div className='flex flex-row'>
                <div>Date & Time</div>
                <div className='ml-[4.1rem] font-bold font-sans'>
                Fix by BookYourPandit Team
                </div>
              </div>

              <div className='flex flex-row justify-end mr-6 font-bold'>
                <div><input type="radio"/> Pay full amount</div>
              </div>
              <div className='border-t-2 border-b-2 border-t-zinc-400 border-b-zinc-400'>Total: <span className='font-semibold ml-[13rem]'>Rs 2,600.00</span></div>
            </div>
          </div>

            {/* Stripe Integration */}
          {/* <div>
            <Link to=''>
              <button className='flex flex-row text-white bg-red-700 hover:bg-green-600 ml-[6rem]  font-semibold justify-center rounded-md w-[13rem] h-[3rem] mt-3'>
                <div className='mt-2'>Proceed To Payment</div>
                <StripeCheckout 
                  stripeKey=''
                  label="Pay Now"
                  name="Pay with Credit Card"
                  billingAddress
                  shippingAddress
                  amount={priceForStripe}
                  description={`Your total is Rs.${product.price}`}
                />
              </button>
            </Link>
          </div> */}
          <StripeCheckout 
            stripeKey={key}
            label="Proceed To Payment"
            name="Pay with Credit Card"
            billingAddress
            shippingAddress
            amount={priceForStripe}
            className='text-white bg-red-700 mt-10'
            description={`Your total is Rs.${product.price}`}
            token={payNow}
          />
        </div>
      </div>

      {/* Footer */}
      <div className='mt-24 h-72 bg-red-700'>
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
      <div className='h-[22rem] bg-red-950'>
        <div className='grid grid-cols-6 pt-10 text-white font-sans ml-4'>
          <h1 className='ml-14'>Cuttack</h1>
          <h1 className='ml-10'>Bhubaneswar</h1>
          <h1 className='ml-14'>Sambalpur</h1>
          <h1 className='ml-14'>Burla</h1>
          <h1 className='ml-14'>Bargarh</h1>
          <h1 className='ml-14'>Balangir</h1>
          <div className='mt-3 ml-3'>
            <h1 className='dark:text-gray-300 font-thin'>
              Hindi Pandits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Telugu Purohits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Kannada Pujari in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Marathi Guruji in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Malayalam Pandit in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Odiya Purohits in Bangalore
            </h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>
              Hindi Pandits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Telugu Purohits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Kannada Pujari in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Marathi Guruji in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Malayalam Pandit in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Odiya Purohits in Bangalore
            </h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>
              Hindi Pandits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Telugu Purohits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Kannada Pujari in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Marathi Guruji in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Malayalam Pandit in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Odiya Purohits in Bangalore
            </h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>
              Hindi Pandits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Telugu Purohits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Kannada Pujari in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Marathi Guruji in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Malayalam Pandit in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Odiya Purohits in Bangalore
            </h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>
              Hindi Pandits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Telugu Purohits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Kannada Pujari in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Marathi Guruji in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Malayalam Pandit in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Odiya Purohits in Bangalore
            </h1>
          </div>
          <div className='mt-3'>
            <h1 className='dark:text-gray-300 font-thin'>
              Hindi Pandits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Telugu Purohits in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Kannada Pujari in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Marathi Guruji in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Malayalam Pandit in Bangalore
            </h1>
            <h1 className='dark:text-gray-300 font-thin'>
              Odiya Purohits in Bangalore
            </h1>
          </div>
        </div>
        <div className='mb-3'>
          <h1 className='mt-24 text-white font-semibold text-xs flex flex-row justify-center'>
            BookYourPandit.com © 2023. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Requirement
