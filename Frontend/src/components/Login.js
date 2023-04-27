import React, { useState, useEffect } from 'react'
import logo1 from '../assets/logo1.png'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import { gapi } from 'gapi-script'
import panditBath from '../assets/pandit_bath.mp4'

const clientId="1019777784248-emfneg8cbjj6n2et9p77evdre820ar53.apps.googleusercontent.com"

function Login() {

    const navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onSuccess = (response) => {
        console.log("LOGIN SUCCESS! Current user: ", response.profileObj)
        // localStorage.setItem('user', JSON.stringify(response.profileObj))
        // const { name, googleId, imageUrl } = response.profileObj
        setIsAuthenticated(true);
    }

    const onFailure = (response) => {
        console.log("LOGIN FAILED! response: ", response)
        setIsAuthenticated(false);
    }

    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: clientId,
            scope:" "
         })
         if (isAuthenticated) {
            navigate('/')
         }
        }
        gapi.load('client:auth2', start)
    }, [isAuthenticated])

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
        <div className="relative w-full h-full">
            <video
            src={panditBath}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
            />

            <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 backdrop-brightness-50">
                <div className="flex items-center justify-center p-5">
                    <img src={logo1} className="ml-3 scale-50  rounded-lg" alt="logo" />
                </div>

                <div className="shadow-2xl mb-10">
                    <GoogleLogin
                        clientId={clientId}
                        render={renderProps => (
                        <button
                            type="button"
                            className="bg-mainColor flex justify-center outline-none items-center p-3 rounded-lg cursor-pointer opacity-70 bg-black text-white hover:opacity-80"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <FcGoogle className="mr-4" /> Sign in with Google
                        </button>
                        )}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />

                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;