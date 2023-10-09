import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo.png';


import Cookie from '../components/Molecules/Cookie/Cookie'
import Swal from 'sweetalert2';

import axios from 'axios';


export default function LoginHelper(){
    const cookie=Cookie()
    const navigate=useNavigate();
    axios.get('http://localhost:8000/login')
        .then(response=>{
            console.log("user:",response.user)
            if(response.data.user){
                
                navigate(`/profile/${response.user}`)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    

    const [loginformdata,setLoginfromdata]=useState({
        email:"",
        password:""
    })
    

    function handleEmailChange(e){
        setLoginfromdata({
          ...loginformdata,
          email: e.target.value,
        });
      };
    
    function handlePassChange(e){
        setLoginfromdata({
          ...loginformdata,
          password: e.target.value,
        });
      }; 

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            let response=await axios.post('http://localhost:8080/api/user/login',loginformdata)
            response=await response.data;
            if(response.code===200){
              cookie.setUserCookie(response.data.email)
            }
            
          else{

            Swal.fire('password or email is wrong')

            
          }
          
        
            }
        catch(error){
            console.log(error)
        }
    }


    return(
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionY: -90,
        height: 2140,
        width: 1520,
      }}>
        <img src={logo} alt='' width={200} />
      <div className='flex justify-center h-96'>
        
        <form className='flex gap-1 items-center flex-col justify-around	loginForm border-2 border-black shadow-lg p-3 mb-5 bg-body-tertiary w-96 h-60  mt-28 rounded-xl ' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <br/>
                <input
                    type="text"
                    name="email"
                    className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                    value={loginformdata.email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <br/>
                <input
                    type="password"
                    name="password"
                    className='form-control border-2 border-black rounded-md shadow-md bg-transparent'
                    value={loginformdata.password}
                    onChange={handlePassChange}
                />
            </div>
            <button type="submit" onSubmit={handleSubmit} className="border border-black p-2 py-1.5 rounded text-white bg-black">LOGIN</button>
        </form>
  
      </div>
      </div>
    );
}