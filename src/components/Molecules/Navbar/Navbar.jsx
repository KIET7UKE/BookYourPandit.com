import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login'
const clientId="1019777784248-emfneg8cbjj6n2et9p77evdre820ar53.apps.googleusercontent.com"

function Navbar() {

  const navigate = useNavigate()
    const [isLoggedOut, setIsLoggedOut] = useState(false);
  
    const onSuccess = () => {
      console.log("Log out successfull!")
      setIsLoggedOut(true);
    }
  
    useEffect(() => {
       if (isLoggedOut) {
        navigate('/login')
       }  
    }, [isLoggedOut])


  return (
    <div className='relative'>
      <div className='absolute z-5 bg-white opacity-25 flex flex-row items-center container mx-auto px-10 py-14 mt-10 gap-7 '></div>
      <div className='z-10 flex flex-row items-center container mx-auto px-10 py-5 mb-8 gap-8'>
        <div className=''>
          <Link to='/'>
            <span className='font-bold text-4xl text-white relative'>
              <img src={logo} alt='' width={200} className='mt-10' />
            </span>
          </Link>
        </div>
        <div className='flex flex-col md:flex-row sm:items-center gap-4 mt-7 relative ml-6'>
          <div className='flex flex-col relative '>
            <div className='mb-1'>Pooja Location</div>
            <select className='rounded-lg focus:outline-none' name='' id=''>
              <option value='1'>Select</option>
              <option value='2'>Cuttack</option>
              <option value='3'>Bhubaneswar</option>
              <option value='4'>Sambalpur</option>
              <option value='5'>Burla</option>
            </select>
          </div>

          <div className='flex flex-col relative'>
            <div className='mb-1'>My Pandit Preference</div>
            <select className='rounded-lg' name='' id=''>
              <option value='1'>Select</option>
              <option value='2'>Odia</option>
              <option value='3'>Hindi</option>
              <option value='4'>Marathi</option>
              <option value='5'>Gujrati</option>
            </select>
          </div>

          <div className='relative ml-6 mt-7'>
            <Link to='/services'>
              <button className='font-sans font-semibold shadow-lg hover:opacity-75 bg-black text-white bg-blend-multiply box-border py-2 px-4 rounded-md cursor-pointer'>
                View All Services
              </button>
            </Link>
          </div>
        </div>
        <div className='relative gap-2 ml-[5rem] mt-12'>
          <input
            class='block w-full py-2 pr-10 pl-4 mrleading-tight rounded-lg border border-gray-300 bg-white focus:outline-none focus:bg-white focus:border-gray-500'
            type='text'
            placeholder='Search...'
          />
          <button class='absolute top-0 right-0 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg'>
            Search
          </button>
        </div>
        <div className='flex flex-row justify-end gap-5 mt-10 ml-20'>
          <div className="shadow-2xl">
                            <GoogleLogout
                                clientId={clientId}
                                render={renderProps => (
                                <button 
                                    type="button"
                                    className='hover:opacity-75 shadow-lg bg-black text-white shadow-black box-border py-2 px-4 rounded-md relative'
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Logout
                                </button>
                                )}
                                onLogoutSuccess={onSuccess}
                            />
                        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
